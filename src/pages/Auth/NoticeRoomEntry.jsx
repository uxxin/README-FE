import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import {
  nicknameCheck,
  passwordCheck,
  registerUser,
  roomInfo,
} from '../../api/Auth/authEnter.js';
import LoadingSpinner from '../../components/Notice/LoadingSpinner.jsx';

const NoticeRoomEntry = () => {
  const navigate = useNavigate();
  const { url } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isPasswordChecked, setIsPasswordChecked] = useState(false);
  const [roomData, setRoomData] = useState(null);
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isEntryEnabled, setIsEntryEnabled] = useState(false);

  const [message, setMessage] = useState({
    pwSuccess: '',
    pwError: '',
    nnSuccess: '',
    nnError: '',
  });

  useEffect(() => {
    const fetchRoomInfo = async () => {
      try {
        const response = await roomInfo(url);
        const {
          data: { result },
        } = response;
        const { isAlreadyJoinedRoom, ...restData } = result;

        if (isAlreadyJoinedRoom) {
          navigate(`/notice/${restData.roomId}`);
        } else {
          setRoomData(restData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('공지방 정보를 가져오는 데 실패했습니다:', error);
        setIsLoading(false);
      }
    };

    fetchRoomInfo();
  }, [navigate, url]);

  const handlePasswordCheck = async () => {
    try {
      const response = await passwordCheck(password, roomData.roomId);
      if (response.data.result.isValid) {
        setIsPasswordValid(true);
        setIsPasswordChecked(true);
        setMessage((prev) => ({
          ...prev,
          pwError: '',
          pwSuccess: '인증되었습니다.',
        }));
      } else {
        setIsPasswordValid(false);
        setMessage((prev) => ({
          ...prev,
          pwError: '비밀번호가 일치하지 않습니다.',
          pwSuccess: '',
        }));
      }
    } catch (error) {
      console.error('비밀번호 확인에 실패했습니다:', error);
      setMessage((prev) => ({
        ...prev,
        pwError: '비밀번호 확인에 실패했습니다.',
        pwSuccess: '',
      }));
    }
  };

  const handleNicknameCheck = async () => {
    try {
      const response = await nicknameCheck(nickname, roomData.roomId);
      if (!response.data.result.isDuplicate) {
        setIsNicknameValid(true);
        setMessage((prev) => ({
          ...prev,
          nnError: '',
          nnSuccess: '사용 가능한 닉네임입니다.',
        }));
      } else {
        setIsNicknameValid(false);
        setMessage((prev) => ({
          ...prev,
          nnError: '이미 사용중인 닉네임입니다.',
          nnSuccess: '',
        }));
      }
    } catch (error) {
      console.error('닉네임 중복 확인에 실패했습니다.', error);
      setMessage((prev) => ({
        ...prev,
        nnError: '닉네임 중복 확인에 실패했습니다.',
        nnSuccess: '',
      }));
    }
  };

  useEffect(() => {
    if (isPasswordValid && isNicknameValid) {
      setIsEntryEnabled(true);
    } else {
      setIsEntryEnabled(false);
    }
  }, [isPasswordValid, isNicknameValid]);

  const handleEntry = async () => {
    try {
      await registerUser(nickname, roomData.roomId);
      navigate(`/notice/${roomData.roomId}`);
    } catch (error) {
      console.error('입장하는 데 실패했습니다:', error);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!roomData) {
    return (
      <>
        <Header title="입장하기" isSearch={false} url="" />
        <ErrorMessage>공지방 정보를 불러오는 데 실패했습니다.</ErrorMessage>
      </>
    );
  }

  return (
    <>
      <Header title="입장하기" isSearch={false} url="" />
      <FirstContainer>
        <InputPlusContainer>
          <ContextContainer>
            <ContainerHead>리드미</ContainerHead>
            <InfoContainer>
              <ImgContainer>
                <RoomImg src={roomData.roomImage} />
              </ImgContainer>
              <TextContainer>
                <TextTitle>공지방 이름</TextTitle>
                <TextContent>{roomData.roomName}</TextContent>
              </TextContainer>
              <TextContainer>
                <TextTitle>공지방 대표</TextTitle>
                <TextContent>{roomData.adminNickname}</TextContent>
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
                type="password"
                disabled={isPasswordChecked}
              />
              <ConfirmButton
                onClick={handlePasswordCheck}
                disabled={isPasswordChecked}
                className={`${isPasswordChecked ? 'long-text' : ''}`}
              >
                {isPasswordChecked ? '인증완료' : '인증'}
              </ConfirmButton>
            </InputWrapper>
            {isPasswordValid ? (
              <SuccessMessage>{message.pwSuccess}</SuccessMessage>
            ) : (
              <ErrorMessage>{message.pwError}</ErrorMessage>
            )}
          </PasswordWrapper>

          {isPasswordValid && (
            <NicknameWrapper>
              <Label>닉네임 설정</Label>
              <InputWrapper>
                <CustomInput
                  placeholder="입력하세요."
                  value={nickname}
                  onChange={(e) => setNickname(e.currentTarget.value)}
                />
                <ConfirmButton onClick={handleNicknameCheck}>
                  확인
                </ConfirmButton>
              </InputWrapper>
              {isNicknameValid ? (
                <NicknameSuccessMessage>
                  {message.nnSuccess}
                </NicknameSuccessMessage>
              ) : (
                <NicknameErrorMessage>{message.nnError}</NicknameErrorMessage>
              )}
            </NicknameWrapper>
          )}
        </InputPlusContainer>
        <ButtonContainer>
          <Button onClick={handleEntry} disabled={!isEntryEnabled}>
            입장하기
          </Button>
        </ButtonContainer>
      </FirstContainer>
    </>
  );
};

const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95vh;
`;

const ErrorMessage = styled.div`
  color: var(--color-danger);
  text-align: start;
  width: 100%;
`;

const SuccessMessage = styled.div`
  color: var(--color-success);
  text-align: start;
  width: 100%;
`;

const NicknameErrorMessage = styled.div`
  color: var(--color-warning);
  text-align: start;
  width: 100%;
`;

const NicknameSuccessMessage = styled.div`
  color: var(--color-success);
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
  width: 100%;
  max-width: 24.875rem;
  height: auto;
  border-radius: 0.5rem;
  border: 0.02rem solid var(--color-primary-normal);
  background: var(--color-primary-light);
  box-sizing: border-box;
`;

const ContainerHead = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0.5rem 0.8125rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: var(--color-primary-normal);
  color: var(--color-white);
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
`;

const ImgContainer = styled.div`
  display: flex;
  height: 12.5rem;
  width: 12.5rem;
  justify-content: center;
  align-items: center;
`;

const RoomImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
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
  color: var(--color-primary-dark);
`;

const TextContent = styled.span`
  opacity: 1;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: left;
  overflow: hidden;
  color: var(--color-default);
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
  background: var(--color-primary-normal);
  color: var(--color-white);
  align-self: stretch;
  padding: 1.38rem 1.06rem;

  &:disabled {
    background: var(--color-empty);
    color: var(--color-white);
  }

  &.long-text {
    padding: 1.38rem 0.31rem;
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
  background: var(--color-primary-normal);
  color: var(--color-white);
  height: 100%;
  width: 100%;

  &:disabled {
    background: var(--color-empty);
    color: var(--color-white);
  }
`;

const ButtonContainer = styled.div`
  padding: 0 1rem 0 1rem;
  min-height: 3.1875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3.37rem;
`;

export default NoticeRoomEntry;
