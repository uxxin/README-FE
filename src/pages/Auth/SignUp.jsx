import React, { useEffect, useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import CustomInput from '../../components/CustomInput';
import styled from 'styled-components';
import ProgressBar from '../../components/Auth/ProgressBar';
import { useNavigate } from 'react-router-dom';
import { confirmCode, createCode, signup } from '../../api/Auth/user';
import logo from '../../assets/images/logoex.svg';

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

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [emailConfirmError, setEmailConfirmError] = useState('');

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

  const handleSendCode = async (email) => {
    await createCode(email);
    setIsEmailSent(true);
  };

  const handleConfirmCode = async (email, code) => {
    const result = await confirmCode(email, code);
    if (result.data.isSuccess) {
      setIsEmailConfirmed(true);
      setEmailConfirmError('');
    } else {
      // TODO : 인증코드 틀렸을 때 에러메세지 띄우기
      setEmailConfirmError('인증코드가 일치하지 않습니다.');
    }
  };

  const passwordInvalid = useMemo(() => {
    if (password === '') return '비밀번호를 입력해주세요!';
    if (!passwordRegex.test(password))
      return '비밀번호는 최소 8자 이상 입력해주세요.';
    return null;
  }, [password]);

  const passwordCheckInvalid = useMemo(() => {
    if (passwordConfirm === '') return '비밀번호를 입력해주세요!';
    if (password !== passwordConfirm) return '비밀번호가 일치하지 않습니다!';

    return null;
  }, [password, passwordConfirm]);

  const handleCompleteSignUp = async () => {
    const response = await signup(name, nickname, email, password);
    console.log(response);

    localStorage.setItem('token', response.data.result.accessToken);
    setUser(response.data.result.nickname);
    setSignupCompleted(true);
  };

  useEffect(() => {
    if (signupCompleted) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [signupCompleted, navigate]);

  return (
    <>
      <Header props={{ title: '회원가입', isSearch: false }} />
      <SignUpContainer>
        {signupCompleted ? (
          <>
            <StyledLogo src={logo} alt="logo" />
            <WelcomeMessage>
              {`${user}`} <Custom>{`님,\n 환영합니다!`}</Custom>
            </WelcomeMessage>
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
                      readOnly={isEmailSent}
                    />
                    <EmailButton
                      onClick={() => handleSendCode(email)}
                      disabled={!!emailInvalid || isEmailSent}
                    >
                      {isEmailSent ? '전송완료' : '인증하기'}
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
                      onClick={() => handleConfirmCode(email, emailConfirm)}
                      disabled={!!emailConfirmInvalid || !isEmailSent}
                    >
                      확인
                    </EmailButton>
                    {/*TODO: 인증코드 틀리면 '인증코드가 일치하지 않습니다' 에러메세지 띄우기*/}
                    {isEmailConfirmed && (
                      <EmailErrorMessage style={{ color: 'green' }}>
                        인증되었습니다.
                      </EmailErrorMessage>
                    )}
                    {emailConfirmError && !isEmailConfirmed && (
                      <EmailErrorMessage>{emailConfirmError}</EmailErrorMessage>
                    )}
                  </InputWrapperWithButton>
                </ContentContainer>
                <ButtonContainer>
                  <Button
                    onClick={() => handleNextStep()}
                    disabled={
                      !isEmailSent ||
                      !isEmailConfirmed ||
                      !!emailInvalid ||
                      !!emailConfirmInvalid
                    }
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
                      type="password"
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
                      type="password"
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
  bottom: -35px;
  margin-top: 0;
  width: 100%;
  color: red;
  margin-bottom: 10px;
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
  align-self: stretch;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 100%;
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
  bottom: 3.38rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const WelcomeMessage = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
  white-space: pre-line;
  letter-spacing: -0.045rem;
  margin: 3rem 13.94rem 28.5rem 2.69rem;
  gap: 0.62rem;
`;

const InputWrapperWithButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.44rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const StyledLogo = styled.img`
  width: 21.5625rem;
  height: 6.875rem;
  flex-shrink: 0;
  margin: 3.63rem 3.13rem 0 2.19rem;
`;

const Custom = styled.span`
  color: #888;
`;

export default SignUp;
