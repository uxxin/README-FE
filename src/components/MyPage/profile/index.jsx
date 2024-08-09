import { useNavigate } from 'react-router-dom';
import defaultProfileSrc from '../../../assets/images/defaultprofileimage.png';
import settingSrc from '../../../assets/svgs/setting.svg';
import { ProfileContainer } from './style';

export default function Profile({ id, profile, nickname, room }) {
  const navigate = useNavigate();

  const handleNavTo = () =>
    room
      ? navigate('/my-page/notice-edit', {
          state: { profile, nickname, id, room },
        })
      : navigate('/my-page/default-edit');

  return (
    <ProfileContainer>
      <div className="profile">
        <img
          src={profile || defaultProfileSrc}
          alt="프로필 사진"
          className="profile-image"
        />
        <div>
          <span className="medium-18 nickname">{nickname}</span>
          <br />
          <span className="regular-12">{room || '기본 프로필'} </span>
        </div>
      </div>
      <button className="setting" onClick={handleNavTo}>
        <img src={settingSrc} alt="설정 아이콘" />
      </button>
    </ProfileContainer>
  );
}
