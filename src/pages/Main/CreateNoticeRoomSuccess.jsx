import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios를 import 해야 합니다
import styled from 'styled-components';
import { CustomBtn } from '../../components/CustomBtn';
import exampleProfileImage from '../../assets/images/exampleimage.png';
import { Header } from '../../components/Header';
import CreateNoticeRoomSuccessForm from '../../components/Main/CreateNoticeRoomSuccessForm';

const CreateNoticeRoomSuccess = () => {
  const [profileImage, setProfileImage] = useState(exampleProfileImage);
  const [url, setURL] = useState('https:/default/url');
  const [roomName, setRoomName] = useState('공지방 이름');
  const [password, setPassword] = useState('비밀번호');
  const [nickName, setNickName] = useState('대표자 이름');

  useEffect(() => {
    axios
      .get('/mock/createsuccess.json')
      .then((response) => {
        const data = response.data[0];
        setProfileImage(data.room_image);
        setURL(data.room_url);
        setRoomName(data.room_name);
        setPassword(data.room_password);
        setNickName(data.admin_nickname);
      })
      .catch((error) => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header
          props={{
            title: '',
            isSearch: false,
            url: '/create-notice-room',
          }}
        />
        <CreateNoticeRoomSuccessForm
          profileImage={profileImage}
          url={url}
          roomName={roomName}
          password={password}
          nickName={nickName}
        />
      </div>
      <ButtonContainer>
        <CustomBtn
          props={{
            text: '공지방으로 이동',
            background: '#509BF7',
            border: 'none',
            link: '/notice',
          }}
        />
        <CustomBtn
          props={{
            text: '메인으로 이동',
            background: '#FFFFFF',
            border: '0.5px solid #509BF7',
            link: '/home',
          }}
        />
      </ButtonContainer>
    </div>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1.25rem;
  padding: 0.625rem 1rem;
`;

export default CreateNoticeRoomSuccess;
