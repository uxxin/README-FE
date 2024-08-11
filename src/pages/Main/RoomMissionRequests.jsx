import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import MissionRequestForm from '../../components/Main/MissionRequestForm';
import { getRequestDatas } from '../../api/Main/noticecheckrequests';
import { useLocation, useParams } from 'react-router-dom';

const RoomMissionRequests = () => {
  const [missions, setMissions] = useState([]);
  const { roomId } = useParams();
  const location = useLocation();
  const roomName = location.state?.roomName || '공지방 이름 연결';

  useEffect(() => {
    (async () => {
      try {
        const response = await getRequestDatas(roomId);
        console.log(response);

        if (response.isSuccess) {
          setMissions(response.result);
        }
      } catch (error) {
        console.log('확인요청내역 불러오던 중 에러', error);
      }
    })();
  }, [roomId]);

  return (
    <>
      <Header title={roomName} isSearch={false} />
      <RequestMissions>
        {missions.length > 0 ? (
          missions.map((mission, index) => (
            <MissionRequestForm key={index} mission={mission} />
          ))
        ) : (
          <NoMissions>확인미션내역 존재 X</NoMissions>
        )}
      </RequestMissions>
    </>
  );
};
//NoMissions 부분은 나올 수 없음.

//key={mission.id}해야 안정
export default RoomMissionRequests;

const RequestMissions = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const NoMissions = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  color: #333;
`;
