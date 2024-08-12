import Button from '../../../common/button';
import FlexBox from '../../../common/flex-box';
import FloatingBox from '../../../common/floating-box';
import Input from '../../../common/input';

export default function FirstStep({ name, onChange, handleNext }) {
  return (
    <>
      <FlexBox col gap={0.1875} px={1}>
        <h1 className="bold-24">이름을 입력해주세요.</h1>
        <Input
          id="name"
          type="text"
          maxLength={20}
          value={name}
          onChange={onChange}
          placeholder="입력하세요."
        />
      </FlexBox>
      <FloatingBox>
        <Button name="확인" onClick={handleNext} disabled={name.length === 0} />
      </FloatingBox>
    </>
  );
}
