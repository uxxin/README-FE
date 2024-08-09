import React, { useState } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';
import CreateNoticeRoomForm from '../../components/Main/CreateNoticeRoomForm';
import { CustomBtn } from '../../components/CustomBtn';
import styled from 'styled-components';
import { postNoticeRoom } from '../../api/createnoticeroom';

const CreateNoticeRoom = () => {
  const [leaderName, setLeaderName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [password, setPassword] = useState('');
  const [penaltyCount, setPenaltyCount] = useState('');
  const [image, setImage] = useState('');

  const handleCreateClick = async () => {
    if (isFormValid) {
      const RoomData = {
        admin_id: 0,
        room_image: image,
        admin_nickname: leaderName,
        room_name: roomName,
        room_password: password,
        max_penalty: penaltyCount,
      };
      useEffect(() => {
        (async () => {
          try {
            const response = await postNoticeRoom(RoomData);
            console.log(response);
            console.log('공지방 생성 성공 콘솔');
          } catch (error) {
            console.log('공지방 생성 중 에러', error);
          }
        })();
      }, []);
    }
  };

  const isFormValid = leaderName && roomName && password && penaltyCount;

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
            title: '공지방 생성',
            isSearch: false,
            url: '/home',
          }}
        />
        <CreateNoticeRoomForm
          leaderName={leaderName}
          roomName={roomName}
          password={password}
          penaltyCount={penaltyCount}
          image={image}
          onImageChange={(img) => setImage(img)}
          onLeaderNameChange={(e) => {
            console.log('Leader Name:', e.target.value);
            setLeaderName(e.target.value);
          }}
          onRoomNameChange={(e) => {
            console.log('Room Name:', e.target.value);
            setRoomName(e.target.value);
          }}
          onPasswordChange={(e) => {
            console.log('Password:', e.target.value);
            setPassword(e.target.value);
          }}
          onPenaltyCountChange={(e) => {
            console.log('Penalty Count:', e.target.value);
            setPenaltyCount(e.target.value);
          }}
        />
      </div>
      <ButtonContainer>
        <CustomBtn
          props={{
            text: '생성하기',
            background: isFormValid ? '#509BF7' : '#BDBDBD',
            border: 'none',
            link: '/create-notice-room/success',
            onClick: handleCreateClick,
          }}
        />
      </ButtonContainer>
    </div>
  );
};

export default CreateNoticeRoom;

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  padding: 0rem 1rem;
`;
