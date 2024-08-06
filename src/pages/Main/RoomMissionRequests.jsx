import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import MissionRequestForm from '../../components/Main/MissionRequestForm';
import axios from 'axios';

const RoomMissionRequests = () => {
  const [missions, setMissions] = useState([]); // 초기값을 빈 배열로 설정

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/assets/mission.json'); // JSON 파일 경로 수정
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
  }, []);

  return (
    <>
      <Header
        props={{
          title: '공지방 이름(다르게 하기)',
          isSearch: false,
          url: '/home',
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
