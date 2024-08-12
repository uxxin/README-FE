import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput.jsx';
import { useNavigate } from 'react-router-dom';
import {
  nicknameCheck,
  passwordCheck,
  registerUser,
  roomInfo,
} from '../../api/Auth/authEnter.js';

const NoticeRoomEntry = () => {
  const navigate = useNavigate();

  const [isPasswordChecked, setIsPasswordChecked] = useState(false); // 인증 버튼 상태 관리

  const [roomName, setRoomName] = useState('');
  const [roomImage, setRoomImage] = useState('');
  const [adminNickname, setAdminNickname] = useState('');

  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [isEntryEnabled, setIsEntryEnabled] = useState(false);

  // 공지방 정보 가져오기
  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        const response = await roomInfo();
        const { roomName, roomImage, admin_Nickname } = response.data;
        setRoomName(roomName);
        setRoomImage(roomImage);
        setAdminNickname(admin_Nickname);
      } catch (error) {
        console.error('공지방 정보를 가져오는 데 실패했습니다:', error);
      }
    };

    fetchRoomInfo();
  }, []);

  // 비밀번호 확인
  const handlePasswordCheck = async () => {
    try {
      const response = await passwordCheck(password);
      if (response.data.isValid) {
        setIsPasswordValid(true);
        setIsPasswordChecked(true); // 비밀번호 인증 성공 시 버튼 상태 업데이트
        setErrorMessage('인증되었습니다.');
      } else {
        setIsPasswordValid(false);
        setErrorMessage('비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('비밀번호 확인에 실패했습니다:', error);
      setErrorMessage('비밀번호 확인에 실패했습니다.');
    }
  };

  // 닉네임 중복 확인
  const handleNicknameCheck = async () => {
    try {
      const response = await nicknameCheck(nickname);
      if (!response.data.isDuplicate) {
        setIsNicknameValid(true);
        setErrorMessage('사용 가능한 닉네임입니다.');
      } else {
        setIsNicknameValid(false);
        setErrorMessage('이미 사용 중인 닉네임입니다.');
      }
    } catch (error) {
      console.error('닉네임 중복 확인에 실패했습니다:', error);
      setErrorMessage('닉네임 중복 확인에 실패했습니다.');
    }
  };

  // 입장하기 버튼 활성화
  useEffect(() => {
    if (isPasswordValid && isNicknameValid) {
      setIsEntryEnabled(true);
    } else {
      setIsEntryEnabled(false);
    }
  }, [isPasswordValid, isNicknameValid]);

  // 입장하기
  const handleEntry = async () => {
    try {
      await registerUser(true);
      navigate('/notice');
    } catch (error) {
      console.error('입장하는 데 실패했습니다:', error);
    }
  };

  return (
    <>
      <Header title="입장하기" isSearch={false} url="" />
      <InputPlusContainer>
        <ContextContainer>
          <ContainerHead>리드미</ContainerHead>
          <InfoContainer>
            <RoomImg style={{ backgroundImage: `url(${roomImage})` }}></RoomImg>
            <TextContainer>
              <TextTitle>공지방 이름</TextTitle>
              <TextContent>{roomName}</TextContent>
            </TextContainer>
            <TextContainer>
              <TextTitle>공지방 대표</TextTitle>
              <TextContent>{adminNickname}</TextContent>
            </TextContainer>
          </InfoContainer>
        </ContextContainer>
        <PasswordWrapper>
          <Label>비밀번호 확인</Label>
          <InputWrapper>
            <CustomInput
              placeholder="입력하세요."
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <ConfirmButton
              onClick={handlePasswordCheck}
              disabled={isPasswordChecked} // 인증 완료 시 버튼 비활성화
            >
              {isPasswordChecked ? '인증완료' : '인증'}
            </ConfirmButton>
          </InputWrapper>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </PasswordWrapper>

        {/* 비밀번호가 맞으면 닉네임 설정 필드 표시 */}
        {isPasswordValid && (
          <NicknameWrapper>
            <Label>닉네임 설정</Label>
            <InputWrapper>
              <CustomInput
                placeholder="입력하세요."
                value={nickname}
                onChange={(e) => setNickname(e.currentTarget.value)}
              />
              <ConfirmButton onClick={handleNicknameCheck}>인증</ConfirmButton>
            </InputWrapper>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </NicknameWrapper>
        )}

        <ButtonContainer>
          <Button onClick={handleEntry} disabled={!isEntryEnabled}>
            입장하기
          </Button>
        </ButtonContainer>
      </InputPlusContainer>
    </>
  );
};

const ErrorMessage = styled.div`
  color: red;
  text-align: start;
  width: 100%;
`;

const InputPlusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.88rem;
  margin: 0.625rem 1rem;
`;

const ContextContainer = styled.div`
  width: 24.875rem;
  max-width: 24.875rem;
  height: auto;
  border-radius: 0.5rem;
  border: 0.02rem solid #509bf7;
  background: #f4f9ff;
  box-sizing: border-box;
`;

const ContainerHead = styled.div`
  width: 24.875rem;
  height: 2rem;
  padding: 0.5rem 0.8125rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: #509bf7;
  color: #ffffff;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  width: 24.8125rem;
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
`;

const RoomImg = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 0.5rem;
  background: lightgray url(<path-to-image>) no-repeat 50% 50%;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 2.1875rem;
  color: black;
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  white-space: nowrap;
`;

const TextTitle = styled.span`
  height: 1rem;
  gap: 0.62rem;
  opacity: 1;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: -0.02em;
  text-align: left;
  color: #3c74b9;
`;

const TextContent = styled.span`
  height: 1rem;
  gap: 0.62rem;
  opacity: 1;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: left;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;
  font-size: 0.75rem;
  line-height: normal;
`;

const Label = styled.div`
  align-self: stretch;
  font-weight: 700;
  line-height: 100%;
  font-size: 1rem;
  letter-spacing: -0.02rem;
`;

const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: none;
  background: #509bf7;
  color: white;
  height: 3.625rem;
  width: 3.625rem;
  padding: 1rem 0;

  &:disabled {
    background: #bdbdbd;
    color: #ffffff;
  }
`;

const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.44rem;
  width: 100%;
`;

const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  background: #509bf7;
  color: white;
  height: 3.1875rem;
  width: 24.875rem;

  &:disabled {
    background: #bdbdbd;
    color: #ffffff;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 3.37rem;
`;

export default NoticeRoomEntry;
