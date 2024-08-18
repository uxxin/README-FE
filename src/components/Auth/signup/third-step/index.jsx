import styled from 'styled-components';
import Button from '../../../common/button';
import FlexBox from '../../../common/flex-box';
import FloatingBox from '../../../common/floating-box';
import Input from '../../../common/input';
import { useState } from 'react';

export default function ThirdStep({
  email,
  code,
  onChange,
  handleChangeCode,
  handleNext,
  handleSendCode,
  handleCheckCode,
}) {
  const [isSent, setIsSent] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailValid = emailRegex.test(email);

  const handleSend = () => {
    if (emailRegex.test(email)) {
      setIsSent(true);
    }
    handleSendCode();
  };

  return (
    <>
      <FlexBox col gap={0.25} px={1}>
        <FlexBox col gap={0.1875}>
          <h1 className="bold-24">이메일을 입력해주세요.</h1>
          <FlexBox gap={0.5} calc={2}>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={onChange}
              placeholder="입력하세요."
              status={email.length > 0 && !emailValid ? 'error' : 'none'}
              error="잘못된 이메일 형식입니다."
            />
            <Button
              name={isSent ? '전송완료' : '인증하기'}
              disabled={!emailValid || isSent}
              onClick={handleSend}
              small
            />
          </FlexBox>
        </FlexBox>
        <FlexBox col gap={0.1875}>
          <h1 className="bold-24">인증코드를 입력해주세요.</h1>
          <FlexBox gap={0.5} calc={2}>
            <Input
              id="code"
              type="text"
              value={code.value}
              onChange={handleChangeCode}
              placeholder="입력하세요."
              disabled={!isSent}
              status={
                code.isValid === 'none'
                  ? 'none'
                  : code.isValid
                    ? 'success'
                    : 'error'
              }
              error="인증코드가 일치하지 않습니다."
              success="인증되었습니다."
            />
            <StyledButton
              disabled={!isSent}
              onClick={handleCheckCode}
              className="medium-16"
            >
              확인
            </StyledButton>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FloatingBox>
        <Button
          name="확인"
          onClick={handleNext}
          disabled={code.isValid === 'none' || !code.isValid}
        />
      </FloatingBox>
    </>
  );
}

const StyledButton = styled.button`
  height: 65px;
  border-radius: 0.5rem;
  width: 20%;
  border: 0.0625rem solid var(--color-primary-normal);
  background-color: var(--color-primary-normal);
  color: #ffffff;

  &:disabled {
    background-color: var(--color-disabled);
    border: 0.0625rem solid var(--color-disabled);
  }
`;
