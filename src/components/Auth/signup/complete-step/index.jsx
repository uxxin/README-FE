import FlexBox from '../../../common/flex-box';
import { useEffect } from 'react';
import logo from '../../../../assets/images/logoex.svg';
import { Logo, WelcomeText } from './style';

export default function CompleteStep({ nickname }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace('/home');
      clearTimeout(timer);
    }, 2000);
  }, []);
  return (
    <FlexBox col items="center" py={13.6} gap={2}>
      <Logo src={logo} alt="로고" />
      <WelcomeText className="bold-36">
        {nickname} 님,
        <br />
        환영합니다!
      </WelcomeText>
    </FlexBox>
  );
}
