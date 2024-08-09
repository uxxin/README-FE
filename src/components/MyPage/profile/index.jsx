import defaultProfileSrc from '../../../assets/images/defaultprofileimage.png';
import settingSrc from '../../../assets/svgs/setting.svg';
import { ProfileContainer } from './style';

export default function Profile({ room }) {
  return (
    <ProfileContainer>
      <div className="profile">
        <img
          src={defaultProfileSrc}
          alt="프로필 사진"
          className="profile-image"
        />
        <div>
          <span className="medium-18 nickname">닉네임</span>
          <br />
          <span className="regular-12">{room || '기본 프로필'} </span>
        </div>
      </div>
      <button className="setting">
        <img src={settingSrc} alt="설정 아이콘" />
      </button>
    </ProfileContainer>
  );
}
