import { useMemo, useRef, useState } from 'react';
import Header from '../../components/MyPage/header';
import { NoticeRoomProfileEditContainer } from '../../styles/MyPage/style';
import Image from '../../components/MyPage/image';
import { ReactComponent as Camera } from '../../assets/svgs/camera_fill.svg';
import Input from '../../components/MyPage/input';
import { useLocation, useNavigate } from 'react-router-dom';
import FloatingButton from '../../components/MyPage/floating-button';

const NoticeRoomProfileEdit = () => {
  const { state } = useLocation();
  const [nickname, setNickname] = useState({
    value: state?.nickname || '',
    duplicate: 'none',
  });
  const [image, setImage] = useState(state?.profile || null);
  const imageRef = useRef(null);
  const prevUser = useMemo(() => state?.nickname || '', []);

  const navigate = useNavigate();

  const buttonDisabled =
    nickname.value.length < 1 ||
    prevUser === nickname.value ||
    nickname.duplicate !== 'avaliable';

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 20) return;
    setNickname({ value, duplicate: 'none' });
  };

  const handleOpenImageSelect = () => imageRef.current.click();

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  const handleCheckNickname = async () => {
    try {
      // 닉네임 중복 확인하는 API 호출
      setNickname({ ...nickname, duplicate: false ? 'avaliable' : 'exist' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      // 공지방별 내 정보 수정하는 API 호출
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
            <Image url={image} />
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
          <span className="regular-12">{state?.room || '공지방 이름'}</span>
          <div className="check-nickname">
            <Input
              id="value"
              type="text"
              value={nickname.value}
              onChange={handleChange}
              maxLength={20}
              placeholder="닉네임을 입력해주세요."
              status={
                nickname.duplicate === 'exist'
                  ? 'warning'
                  : nickname.duplicate === 'avaliable'
                    ? 'success'
                    : 'none'
              }
              success="사용 가능한 닉네임입니다."
              warning="이미 사용중인 닉네임입니다."
            />
            <button
              className={`regular-14 ${!nickname.value.length && 'disabled'}`}
              onClick={handleCheckNickname}
              disabled={!nickname.value.length}
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
