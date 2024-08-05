import React from 'react';
import { Header } from '../../components/Header.jsx';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput.jsx';

{
  // 비밀번호 확인 어떻게 하지?
}

// const [password, setPassword] = useState('');
// const [passwordConfirm, setPasswordConfirm] = useState('');
// const [nickname, setNickname] = useState('');
// const [nickNameTouched, setNicknameTouched] = useState(null);
// const [passwordConfirmTouched, setPasswordConfirmTouched] = useState(null);
//
// const passwordCheckInvalid = useMemo(() => {
//   if (passwordConfirm === '') return '비밀번호를 입력해주세요!';
//   if (password !== passwordConfirm) return '비밀번호가 일치하지 않습니다!';
//
//   return null;
// }, [password, passwordConfirm]);
//
// const nicknameInValid = useMemo(() => {
//   if (nickname === '') return '닉네임을 입력해주세요!';
//   if (!nickNameRegex.test(nickname)) return '올바른 아이디를 입력해주세요!';
//
//   return null;
// }, [nickname]);

const NoticeRoomEntry = () => {
  return (
    <>
      <Header props={{ title: '입장하기', isSearch: false, url: '' }} />
      <InputPlusContainer>
        <ContextContainer>
          <ContainerHead>리드미</ContainerHead>
          <InfoContainer>
            <RoomImg></RoomImg>
            <TextContainer>
              <TextTitle>공지방 이름</TextTitle>
              <TextContent>공지방 이름 예시</TextContent>
            </TextContainer>
            <TextContainer>
              <TextTitle>공지방 대표</TextTitle>
              <TextContent>공지방 대표 이름</TextContent>
            </TextContainer>
          </InfoContainer>
        </ContextContainer>
        <PasswordWrapper>
          <Label>비밀번호 확인</Label>
          <InputWrapper>
            <CustomInput placeholder="입력하세요." />
            <ConfirmButton>인증</ConfirmButton>
            {/*여기에 에러메세지 넣기*/}
          </InputWrapper>
        </PasswordWrapper>
        <NicknameWrapper>
          <Label>닉네임 설정</Label>
          <InputWrapper>
            <CustomInput placeholder="입력하세요." />
            <ConfirmButton>인증</ConfirmButton>
            {/*여기에 에러메세지 넣기*/}
          </InputWrapper>
        </NicknameWrapper>
        <ButtonContainer>
          <Button onClick={() => navigate('/notice')}>입장하기</Button>
        </ButtonContainer>
      </InputPlusContainer>
    </>
  );
};

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
  background-color: gray;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 0.5rem;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
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
  font-family: Pretendard;
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
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  line-height: normal;
`;

const Label = styled.div`
  font-family: Pretendard;
  align-self: stretch;
  font-style: normal;
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

// const EmailErrorMessage = styled.div`
//   position: absolute;
//   margin-top: 6rem;
//   width: 100%;
//   color: red;
//   text-align: start;
// `;

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

// const EmailButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 0.625rem;
//   border-radius: 0.5rem;
//   border: none;
//   background: #509bf7;
//   color: white;
//   height: 3.625rem;
//   width: 3.625rem;
//   padding: 1rem 0;
//
//   &:disabled {
//     background: #bdbdbd;
//     color: #ffffff;
//   }
// `;

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
