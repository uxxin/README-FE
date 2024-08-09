import arrorLeftSrc from '../../../assets/images/back_button.svg';
import { useNavigate } from 'react-router-dom';
import { ProfileContainer } from './style';

export default function Header({ title, back, backFun, rightEle, rightFun }) {
  const navigate = useNavigate();

  const handleBack = () => (backFun ? backFun() : navigate(-1));
  return (
    <ProfileContainer className="bold-18">
      {back && (
        <button onClick={handleBack} className="left">
          <img src={arrorLeftSrc} alt="뒤로가기" />
        </button>
      )}
      <span>{title}</span>
      {rightEle && (
        <button onClick={rightFun} className="right">
          {rightEle}
        </button>
      )}
    </ProfileContainer>
  );
}
