import { useEffect, useMemo, useRef, useState } from 'react';
import Header from '../../components/MyPage/header';
import { DefaultProfileEditContainer } from '../../styles/MyPage/style';
import Image from '../../components/MyPage/image';
import { ReactComponent as Camera } from '../../assets/svgs/camera_fill.svg';
import Input from '../../components/MyPage/input';
import { Link, useNavigate } from 'react-router-dom';
import FloatingButton from '../../components/MyPage/floating-button';

const DefaultProfileEdit = () => {
  const [user, setUser] = useState({
    name: '',
    nickname: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);
  const navigate = useNavigate();
  const prevUser = useMemo(() => {
    if (!isLoading) return user;
    return null;
  }, [isLoading]);

  const buttonDisabled =
    user.nickname.length < 1 ||
    user.name.length < 1 ||
    prevUser.name === user.name ||
    prevUser.nickname === user.nickname;

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value.length > 20) return;
    setUser((prev) => ({ ...prev, [id]: value }));
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

  const handleUpdateProfile = async () => {
    try {
      // 내 정보 수정하는 API 호출
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isLoading) {
      // 내 정보 가져오는 API 호출

      setIsLoading(false);
    }
  }, [isLoading]);
  return (
    <>
      <Header title="마이페이지" back />
      <DefaultProfileEditContainer>
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
          <span className="regular-12">example@gmail.com</span>
        </section>
        <section className="input-nickname">
          <div className="input-wrap">
            <Input
              id="name"
              value={user.name}
              placeholder="이름"
              maxLength={20}
              onChange={handleChange}
            />
            <Input
              id="nickname"
              value={user.nickname}
              placeholder="닉네임"
              maxLength={20}
              onChange={handleChange}
            />
          </div>
          <Link className="link" to="/my-page/default-edit/password">
            비밀번호 변경
          </Link>
        </section>
      </DefaultProfileEditContainer>
      <FloatingButton onClick={handleUpdateProfile} disabled={buttonDisabled} />
    </>
  );
};

export default DefaultProfileEdit;
