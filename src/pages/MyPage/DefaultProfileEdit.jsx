import { useEffect, useMemo, useRef, useState } from 'react';
import { DefaultProfileEditContainer } from '../../styles/MyPage/style';
import Image from '../../components/MyPage/image';
import { ReactComponent as Camera } from '../../assets/svgs/camera_fill.svg';
import Input from '../../components/common/input';
import { Link, useNavigate } from 'react-router-dom';
import FloatingButton from '../../components/MyPage/floating-button';
import defaultProfileSrc from '../../assets/pngs/default_profile_8.png';
import {
  GetAxiosInstance,
  PatchAxiosInstance,
  PostAxiosInstance,
} from '../../axios/axios.method';
import { Header } from '../../components/Header';

const DefaultProfileEdit = () => {
  const [user, setUser] = useState({
    name: '',
    nickname: '',
    email: '이메일 주소',
    profileImage: '',
  });
  const [isLoading, setIsLoading] = useState(true);
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
    (prevUser.name === user.name &&
      prevUser.nickname === user.nickname &&
      prevUser.profileImage === user.profileImage);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value.length > 20) return;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const handleOpenImageSelect = () => imageRef.current.click();

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prev) => ({ ...prev, profileImage: file }));
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
      };
    }
  };

  const handleUpdateProfile = async () => {
    try {
      let { profileImage, name, nickname } = user;

      if (!image.startsWith('https://s3')) {
        const formData = new FormData();
        formData.append('file', profileImage);
        const s3Response = await PostAxiosInstance('/user/s3', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        profileImage = s3Response.data.result.images[0];
      }

      await PatchAxiosInstance('/user/profile', {
        name,
        nickname,
        profileImage,
      });
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (isLoading) {
          const res = await GetAxiosInstance('/user');
          if (res.data.isSuccess) {
            setUser({
              ...res.data.result,
              profileImage: res.data.result.profileImage || '',
            });
            setImage(res.data.result.profileImage || '');
            setIsLoading(false);
          }
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [isLoading]);
  return (
    <>
      <Header title="마이페이지" isNotHome />
      <DefaultProfileEditContainer>
        <section className="image-email">
          <div className="image">
            <Image url={image || defaultProfileSrc} />
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
          <span className="regular-12">{user.email}</span>
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
