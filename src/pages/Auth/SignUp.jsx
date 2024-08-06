import React, { useEffect, useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import CustomInput from '../../components/CustomInput';
import styled from 'styled-components';
import ProgressBar from '../../components/Auth/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { confirmCode, createCode, signup } from '../../api/user.js';

const nameRegex = /^[가-힣a-zA-Z\s]+$/;
const nickNameRegex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{1,20}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const emailConfirmRegex = /^[a-z0-9]+$/;
const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&])[A-Za-z\d$@!%*#?&]{8,20}$/;

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState('');

  const [signupCompleted, setSignupCompleted] = useState(false);

  const [step, setStep] = useState(1);

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [nameTouched, setNameTouched] = useState(null);
  const [nickNameTouched, setNicknameTouched] = useState(null);
  const [emailTouched, setEmailTouched] = useState(null);
  const [emailConfirmTouched, setEmailConfirmTouched] = useState(null);
  const [passwordTouched, setPasswordTouched] = useState(null);
  const [passwordConfirmTouched, setPasswordConfirmTouched] = useState(null);

  const handleNextStep = () => {
    setStep((prevState) => Math.min(prevState + 1, 4));
  };

  const nameInvalid = useMemo(() => {
    if (name === '') return '이름을 입력해주세요!';
    if (!nameRegex.test(name)) return '올바른 이름을 입력해주세요!';

    return null;
  }, [name]);

  const nicknameInValid = useMemo(() => {
    if (nickname === '') return '닉네임을 입력해주세요!';
    if (!nickNameRegex.test(nickname)) return '올바른 아이디를 입력해주세요!';

    return null;
  }, [nickname]);

  const emailInvalid = useMemo(() => {
    if (email === '') return '이메일을 입력해주세요!';
    if (!emailRegex.test(email)) return '올바른 이메일 형식을 입력해주세요!';

    return null;
  }, [email]);

  const emailConfirmInvalid = useMemo(() => {
    if (emailConfirm === '') return '인증코드를 입력해주세요!';
    if (!emailConfirmRegex.test(emailConfirm))
      return '유효한 인증코드를 입력해주세요!';
    return null;
  }, [emailConfirm]);

  const passwordInvalid = useMemo(() => {
    if (password === '') return '비밀번호를 입력해주세요!';
    if (!passwordRegex.test(password))
      // return "비밀번호는 최소 8자 이상 영소문자, 숫자, 특수문자를 조합해 입력해주세요!"
      return '비밀번호는 최소 8자 이상 입력해주세요.';
    return null;
  }, [password]);

  const passwordCheckInvalid = useMemo(() => {
    if (passwordConfirm === '') return '비밀번호를 입력해주세요!';
    if (password !== passwordConfirm) return '비밀번호가 일치하지 않습니다!';

    return null;
  }, [password, passwordConfirm]);

  useEffect(() => {
    if (signupCompleted) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [signupCompleted, navigate]);

  const handleCompleteSignUp = async () => {
    const response = await signup(name, nickname, email, password);

    console.log(response);
    localStorage.setItem('token', response.data.result.accessToken);
    setUser(response.data.result.nickname);

    setSignupCompleted(true);
  };

  // const formValid = useMemo(
  //   () => !nameInvalid && !idInValid && !emailInvalid && !ageInvalid && !passwordInvalid && !passwordCheckInvalid,
  //   [nameInvalid, idInValid, ageInvalid, emailInvalid, passwordInvalid, passwordCheckInvalid]
  // )
  //
  // const signUpClick = async () => {
  //   if (formValid) {
  //     const body = JSON.stringify({ name, username: id, email, age: age, password, passwordCheck });
  //     // B.E.로 보내기 =
  //     const response = await fetch("http://localhost:8080/auth/signup", { method: "POST", body, headers: { "Content-Type": "application/json" } })
  //     if (response.ok) { // 응답코드가 200번대이면!
  //       alert("회원가입에 성공하였습니다.");
  //       navigate("/login");
  //     } else {
  //       alert("회원가입 실패!!")
  //     }
  //   } else {
  //     console.log("필드에 잘못된 데이터가 있습니다.");
  //   }
  // };

  return (
    <>
      <Header props={{ title: '회원가입', isSearch: false }} />
      <SignUpContainer>
        {signupCompleted ? (
          <>
            <WelcomeMessage>
              {`${user} 님 \nRead.me에 오신 것을\n 환영합니다!`}
            </WelcomeMessage>
            {/*<ButtonContainer>*/}
            {/*  <Button onClick={() => navigate('/home')}>로그인</Button>*/}
            {/*</ButtonContainer>*/}
          </>
        ) : (
          <>
            <ProgressBar progress={(step / 4) * 100} />

            {step === 1 && (
              <>
                <ContentContainer>
                  <Label>이름을 입력해주세요.</Label>
                  <InputWrapper>
                    <CustomInput
                      onBlur={() => setNameTouched(true)}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="입력하세요."
                      value={name}
                      charCount={true}
                    />
                    {nameInvalid && nameTouched && (
                      <ErrorMessage>{nameInvalid}</ErrorMessage>
                    )}
                  </InputWrapper>
                </ContentContainer>
                <ButtonContainer>
                  <Button
                    onClick={() => handleNextStep()}
                    disabled={!!nameInvalid}
                  >
                    확인
                  </Button>
                </ButtonContainer>
              </>
            )}
            {step === 2 && (
              <>
                <ContentContainer>
                  <Label>닉네임을 입력해주세요.</Label>
                  <InputWrapper>
                    <CustomInput
                      onBlur={() => setNicknameTouched(true)}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder="입력하세요."
                      value={nickname}
                      charCount={true}
                    />
                    {nicknameInValid && nickNameTouched && (
                      <ErrorMessage>{nicknameInValid}</ErrorMessage>
                    )}
                  </InputWrapper>
                </ContentContainer>
                <ButtonContainer>
                  <Button
                    onClick={() => handleNextStep()}
                    disabled={!!nicknameInValid}
                  >
                    확인
                  </Button>
                </ButtonContainer>
              </>
            )}
            {step === 3 && (
              <>
                <ContentContainer>
                  <Label>이메일을 입력해주세요.</Label>
                  <InputWrapperWithButton>
                    <CustomInput
                      onBlur={() => setEmailTouched(true)}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="입력하세요."
                      value={email}
                    />
                    <EmailButton onClick={createCode} disabled={!!emailInvalid}>
                      인증하기
                    </EmailButton>
                    {emailInvalid && emailTouched && (
                      <EmailErrorMessage>{emailInvalid}</EmailErrorMessage>
                    )}
                  </InputWrapperWithButton>

                  <Label>인증코드를 입력해주세요.</Label>
                  <InputWrapperWithButton>
                    <CustomInput
                      onBlur={() => setEmailConfirmTouched(true)}
                      onChange={(e) => setEmailConfirm(e.target.value)}
                      placeholder="입력하세요."
                      value={emailConfirm}
                    />
                    <EmailButton
                      onClick={confirmCode}
                      disabled={!!emailConfirmInvalid}
                    >
                      확인
                    </EmailButton>
                    {emailConfirmInvalid && emailConfirmTouched && (
                      <EmailErrorMessage>
                        {emailConfirmInvalid}
                      </EmailErrorMessage>
                    )}
                  </InputWrapperWithButton>
                </ContentContainer>
                <ButtonContainer>
                  <Button
                    onClick={() => handleNextStep()}
                    disabled={!!emailInvalid}
                  >
                    확인
                  </Button>
                </ButtonContainer>
              </>
            )}
            {step === 4 && (
              <>
                <ContentContainer>
                  <Label>비밀번호를 입력해주세요.</Label>
                  <InputWrapper>
                    <CustomInput
                      onBlur={() => setPasswordTouched(true)}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호 확인 (최소 8자)"
                      value={password}
                      charCount={true}
                    />
                    {passwordInvalid && passwordTouched && (
                      <ErrorMessage>{passwordInvalid}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <CustomInput
                      onBlur={() => setPasswordConfirmTouched(true)}
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                      placeholder="비밀번호 재확인"
                      value={passwordConfirm}
                      charCount={true}
                    />
                    {passwordCheckInvalid && passwordConfirmTouched && (
                      <ErrorMessage>{passwordCheckInvalid}</ErrorMessage>
                    )}
                  </InputWrapper>
                </ContentContainer>
                <ButtonContainer>
                  <Button
                    onClick={() => handleCompleteSignUp()}
                    disabled={!!passwordInvalid || !!passwordCheckInvalid}
                  >
                    확인
                  </Button>
                </ButtonContainer>
                {/*비밀번호 disable 이게 맞나*/}
              </>
            )}
          </>
        )}
      </SignUpContainer>
    </>
  );
};

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  margin-top: 0;
  width: 100%;
  color: red;
  text-align: start;
`;

const EmailErrorMessage = styled.div`
  position: absolute;
  margin-top: 6rem;
  width: 100%;
  color: red;
  text-align: start;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  min-height: 95vh;
`;

const Label = styled.div`
  font-family: Pretendard;
  align-self: stretch;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 1.5rem */
  letter-spacing: -0.03rem;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 26.8125rem;
  margin-top: 3.75rem;
  padding: 0 1rem;
  flex-direction: column;
  align-items: stretch;
  gap: 1.875rem;
  box-sizing: border-box;
  position: relative;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: none;
  background: #509bf7;
  color: white;
  height: 3.1875rem;
  width: 24.875rem;
  padding: 1rem 0;

  &:disabled {
    background: #bdbdbd;
    color: #ffffff;
  }
`;

const EmailButton = styled.button`
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 3.37rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const WelcomeMessage = styled.div`
  font-family: Pretendard;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 100%;
  margin: 6.38rem 5.87rem 23.56rem 1.06rem;
  white-space: pre-line;
  font-style: normal;
  letter-spacing: -0.045rem;
`;

const InputWrapperWithButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.44rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export default SignUp;
