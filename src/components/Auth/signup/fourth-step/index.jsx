import Button from '../../../common/button';
import FlexBox from '../../../common/flex-box';
import FloatingBox from '../../../common/floating-box';
import Input from '../../../common/input';

export default function FourthStep({
  password,
  passwordCheck,
  onChange,
  handleNext,
}) {
  const lengthInvalid = password.length < 8 && password.length > 0;
  const passwordMatch = password === passwordCheck;
  return (
    <>
      <FlexBox col gap={0.1875} px={1}>
        <h1 className="bold-24">비밀번호를 입력해주세요.</h1>
        <FlexBox col gap={0.625} calc={2}>
          <Input
            id="password"
            type="password"
            maxLength={20}
            value={password}
            onChange={onChange}
            placeholder="비밀번호 확인 (최소 8자)"
            status={lengthInvalid ? 'error' : 'none'}
            error="비밀번호는 최소 8자 이상 입력해 주세요."
          />
          <Input
            id="passwordCheck"
            type="password"
            maxLength={20}
            value={passwordCheck}
            onChange={onChange}
            placeholder="비밀번호 재확인"
            status={
              passwordCheck.length === 0
                ? 'none'
                : passwordMatch
                  ? 'none'
                  : 'error'
            }
            error="비밀번호가 일치하지 않습니다."
          />
        </FlexBox>
      </FlexBox>
      <FloatingBox>
        <Button
          name="확인"
          onClick={handleNext}
          disabled={
            lengthInvalid || passwordCheck.length === 0 || !passwordMatch
          }
        />
      </FloatingBox>
    </>
  );
}
