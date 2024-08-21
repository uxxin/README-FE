import Header from '../../components/common/header';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  CompleteStep,
} from '../../components/Auth/signup';
import axios from 'axios';

export default function Signup() {
  const [width, setWidth] = useState(0);
  const [page, setPage] = useState(1);
  const [code, setCode] = useState({
    value: '',
    isValid: 'none',
  });
  const [user, setUser] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    passwordCheck: '',
  });
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleChangeCode = (e) => {
    setCode({ value: e.target.value, isValid: 'none' });
  };

  const handleNext = async () => {
    if (page === 4) {
      try {
        const { passwordCheck, ...userData } = user;
        const response = await axios.post(`${baseUrl}/user/signup`, userData);
        localStorage.setItem('token', response.data.result.accessToken);
        return setPage((prev) => (prev = prev + 1));
      } catch (err) {
        return console.error(err);
      }
    }
    if (page === 5) {
      return navigate('/');
    }
    setPage((prev) => (prev = prev + 1));
  };

  const navigate = useNavigate();

  const handlePrev = () => {
    if (page === 1) return navigate(-1);
    setPage((prev) => (prev = prev - 1));
  };

  const handleSendCode = async () => {
    try {
      await axios.post(`${baseUrl}/user/create-code`, { email: user.email });
    } catch (err) {
      console.error(err);
    }
  };

  const handleCheckCode = async () => {
    try {
      await axios.post(`${baseUrl}/user/confirm-code`, {
        email: user.email,
        code: code.value,
      });
      setCode({ value: code.value, isValid: true });
    } catch (err) {
      setCode({ value: code.value, isValid: false });
      console.error(err);
    }
  };

  const steps = useMemo(
    () => [
      <FirstStep
        key={1}
        name={user.name}
        onChange={handleInput}
        handleNext={handleNext}
      />,
      <SecondStep
        key={2}
        nickname={user.nickname}
        onChange={handleInput}
        handleNext={handleNext}
      />,
      <ThirdStep
        key={3}
        email={user.email}
        code={code}
        onChange={handleInput}
        handleChangeCode={handleChangeCode}
        handleNext={handleNext}
        handleSendCode={handleSendCode}
        handleCheckCode={handleCheckCode}
      />,
      <FourthStep
        key={4}
        password={user.password}
        passwordCheck={user.passwordCheck}
        onChange={handleInput}
        handleNext={handleNext}
      />,
      <CompleteStep key={5} nickname={user.nickname} />,
    ],
    [user, code],
  );

  useEffect(() => {
    setWidth(document.body.clientWidth);
  }, []);
  return (
    <>
      {page < 5 && (
        <>
          <Header title="회원가입" back backFun={handlePrev} isNotHome={true} />
          <div
            style={{
              width: `${(width * page) / 4 / 16}rem`,
              transition: 'all 0.5s',
              height: '0.25rem',
              backgroundColor: 'var(--color-primary-normal)',
              marginTop: '2.75rem',
            }}
          />
        </>
      )}
      {steps.map((step, idx) => page === idx + 1 && step)}
    </>
  );
}
