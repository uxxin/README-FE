import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RequestDataForm from './RequestDataForm';
import { useNavigate } from 'react-router-dom';

export const RequestDatas = () => {
  const [requestDatas, setRequestDatas] = useState([]);
  const currentRequestDatas = requestDatas.slice();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('mock/mission.json');
        setRequestDatas(response.data);
      } catch (error) {
        console.error('Error fetching Request Datas:', error);
      }
    };

    fetchData();
  }, []);

  const handleRoomClick = (roomid, roomName) => {
    {
      navigate(
        `/notice-check-req/${roomid}?roomName=${encodeURIComponent(roomName)}`,
      );
    }
  };

  return (
    <>
      {currentRequestDatas.length > 0 ? (
        <RequestRoomSection>
          <Container>
            <RequestRooms>
              {currentRequestDatas.map((room) => (
                <RequestDataForm
                  key={room.id}
                  room={room}
                  onClick={() => handleRoomClick(room.id, room.roomName)}
                />
              ))}
            </RequestRooms>
          </Container>
        </RequestRoomSection>
      ) : (
        <NoDataContainer>
          <NoData>확인요청내역이 없습니다.</NoData>
        </NoDataContainer>
      )}
    </>
  );
};

const Container = styled.div`
  padding: 0.625rem 1rem;
`;

const RequestRoomSection = styled.section`
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
  gap: 0.625rem; /* 10px */
  align-self: stretch;
  width: 100%;
`;

const RequestRooms = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.8125rem;
  align-self: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NoDataContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.625rem;
`;

const NoData = styled.div`
  display: flex;
  padding: 1.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: #f4f9ff;

  color: #000;
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

export default RequestDatas;
