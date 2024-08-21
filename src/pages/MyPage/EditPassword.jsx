import React, { useEffect, useState } from 'react';
import { EditPasswordContainer } from '../../styles/MyPage/style';
import Input from '../../components/common/input';
import useDebounce from '../../hooks/use-debounce';
import FloatingButton from '../../components/MyPage/floating-button';
import { useNavigate } from 'react-router-dom';
import {
  PatchAxiosInstance,
  PostAxiosInstance,
} from '../../axios/axios.method';
import { Header } from '../../components/Header';

const EditPassword = () => {
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [passwordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();

  const debouncedCurrentPassword = useDebounce({
    value: password.current,
    delay: 1000,
  });
  const lengthValid = password.new.length > 7;
  const samePassword = password.new === password.confirm;

  const butotnDisabled = !passwordValid || !lengthValid || !samePassword;

  const handleChange = async (e) => {
    const { id, value } = e.target;
    if (value.length > 20) return;
    setPassword((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpdatePassword = async () => {
    try {
      await PatchAxiosInstance('/user/password', { password: password.new });
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    debouncedCurrentPassword.length > 0 &&
      (async () => {
        try {
          await PostAxiosInstance('/user/password', {
            password: debouncedCurrentPassword,
          });
          setPasswordValid(true);
        } catch (err) {
          setPasswordValid(false);
          console.error(err);
        }
      })();
  }, [debouncedCurrentPassword]);
  return (
    <>
      <Header title="마이페이지" isNotHome />
      <EditPasswordContainer>
        <section className="input-container">
          <Input
            id="current"
            type="password"
            placeholder="기존 비밀번호"
            value={password.current}
            maxLength={20}
            onChange={handleChange}
            status={passwordValid ? 'none' : 'error'}
            error={
              <span>
                현재 비밀번호와 일치하지 않습니다.
                <br />
                올바른 비밀번호를 입력해 주세요.
              </span>
            }
          />
          <div className="divider" />
          <Input
            id="new"
            type="password"
            placeholder="새 비밀번호 (8자 - 20자)"
            value={password.new}
            maxLength={20}
            onChange={handleChange}
            status={
              password.new.length > 0
                ? lengthValid
                  ? 'success'
                  : 'error'
                : 'none'
            }
            success="사용 가능한 비밀번호입니다."
            error="비밀번호는 최소 8자 이상 입력해 주세요."
          />
          <Input
            id="confirm"
            type="password"
            placeholder="새 비밀번호 확인"
            value={password.confirm}
            maxLength={20}
            onChange={handleChange}
            status={
              password.confirm.length > 0
                ? samePassword
                  ? 'none'
                  : 'error'
                : 'none'
            }
            error="비밀번호가 일치하지 않습니다."
          />
        </section>
      </EditPasswordContainer>
      <FloatingButton
        onClick={handleUpdatePassword}
        disabled={butotnDisabled}
      />
    </>
  );
};

export default EditPassword;
