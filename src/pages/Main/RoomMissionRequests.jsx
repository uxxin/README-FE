import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import MissionRequestForm from '../../components/Main/MissionRequestForm';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

const RoomMissionRequests = () => {
  const [missions, setMissions] = useState([]);
  const { roomId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomName = queryParams.get('roomName');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/mock/missiondetail_${roomId}.json`); // api로 수정
        console.log('Fetched data:', response.data); // 데이터 확인
        if (Array.isArray(response.data)) {
          setMissions(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Error fetching mission:', error);
      }
    };

    fetchData();
  }, [roomId]);

  return (
    <>
      <Header
        props={{
          title: roomName || '공지방 이름 연결',
          isSearch: false,
        }}
      />
      <RequestMissions>
        {missions.map((mission) => (
          <MissionRequestForm key={mission.id} mission={mission} />
        ))}
      </RequestMissions>
    </>
  );
};

export default RoomMissionRequests;

const RequestMissions = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;
