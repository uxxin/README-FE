import { useMemo, useRef, useState } from 'react';
import Header from '../../components/common/header';
import { NoticeRoomProfileEditContainer } from '../../styles/MyPage/style';
import Image from '../../components/MyPage/image';
import { ReactComponent as Camera } from '../../assets/svgs/camera_fill.svg';
import Input from '../../components/common/input';
import { useLocation, useNavigate } from 'react-router-dom';
import FloatingButton from '../../components/MyPage/floating-button';
import {
  PatchAxiosInstance,
  PostAxiosInstance,
} from '../../axios/axios.method';
import defaultProfileSrc from '../../assets/pngs/default_profile_8.png';

const NoticeRoomProfileEdit = () => {
  const { state } = useLocation();
  const [profile, setProfile] = useState({
    nickname: state?.nickname || '',
    status: 'none',
  });
  const [image, setImage] = useState({
    preview: state?.profileImage || '',
    file: '',
  });
  const imageRef = useRef(null);
  const prevUser = useMemo(
    () =>
      ({
        nickname: state?.nickname,
        profileImage: state?.profileImage || '',
      }) || '',
    [],
  );

  const navigate = useNavigate();

  const sameImage = prevUser.profileImage === image.preview;
  const sameNickname = prevUser.nickname === profile.nickname;

  const buttonDisabled =
    profile.nickname.length < 1 ||
    (sameNickname && sameImage) ||
    profile.status === 'duplicate' ||
    profile.status === 'typing';

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 20) return;
    setProfile({ nickname: value, status: 'typing' });
  };

  const handleOpenImageSelect = () => imageRef.current.click();

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage({ preview: reader.result, file });
        if (profile.status === 'typing') {
          handleCheckNickname();
        }
      };
    }
  };

  const handleCheckNickname = async () => {
    if (profile.nickname === prevUser.nickname)
      return setProfile((prev) => ({
        nickname: prev.nickname,
        status: 'none',
      }));
    try {
      const res = await PostAxiosInstance(
        `/user/profile/${state?.roomId}/nickname`,
        { nickname: profile.nickname },
      );
      if (res.data.isSuccess) {
        setProfile({
          ...profile,
          status: res.data.result.isDuplicate ? 'duplicate' : 'avaliable',
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      let profileImage = image.preview;
      if (!image.preview.startsWith('https://s3' && image.file)) {
        const formData = new FormData();
        formData.append('file', image.file);
        const s3Response = await PostAxiosInstance(
          '/user/s3/upload',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } },
        );
        profileImage = s3Response.data.result.image;
      }
      await PatchAxiosInstance(`/user/profile/${state?.roomId}`, {
        nickname: profile.nickname,
        profileImage,
      });
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header title="마이페이지" back />
      <NoticeRoomProfileEditContainer>
        <section className="image-email">
          <div className="image">
            <Image url={image.preview || defaultProfileSrc} />
            <button onClick={handleOpenImageSelect}>
              <Camera color="#ffffff" />
            </button>
            <input
              ref={imageRef}
              id="profile-image"
              type="file"
              onChange={handleImageSelect}
            />
          </div>
          <span className="regular-12">{state?.roomName || '공지방 이름'}</span>
          <div className="check-nickname">
            <Input
              id="nickname"
              type="text"
              value={profile.nickname}
              onChange={handleChange}
              maxLength={20}
              placeholder="닉네임을 입력해주세요."
              status={
                profile.status === 'duplicate'
                  ? 'warning'
                  : profile.status === 'avaliable'
                    ? 'success'
                    : 'none'
              }
              success="사용 가능한 닉네임입니다."
              warning="이미 사용중인 닉네임입니다."
            />
            <button
              className={`regular-14 ${!profile.nickname.length && 'disabled'}`}
              onClick={handleCheckNickname}
              disabled={!profile.nickname.length}
            >
              확인
            </button>
          </div>
        </section>
      </NoticeRoomProfileEditContainer>
      <FloatingButton onClick={handleUpdateProfile} disabled={buttonDisabled} />
    </>
  );
};

export default NoticeRoomProfileEdit;
