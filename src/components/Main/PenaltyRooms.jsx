import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PenaltyRoomForm from './PenaltyRoomForm';
import { useNavigate } from 'react-router-dom';

export const PenaltyRooms = () => {
  const [penaltyRooms, setPenaltyRooms] = useState([]);
  const PenaltyDatas = penaltyRooms.slice();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('mock/penaltyrooms.json');
        setPenaltyRooms(response.data);
      } catch (error) {
        console.error('페널티 있는 방 불러오는 중 오류:', error);
      }
    };

    fetchData();
  }, []);

  const handleRoomClick = (room) => {
    navigate(`/penalty/${room.id}`, {
      state: {
        maxPenalty: room.maxPenalty,
        penaltyCount: room.penaltyCount,
      },
    });
  };

  return (
    <>
      {PenaltyDatas.length > 0 ? (
        <RoomSection>
          <Container>
            <Rooms>
              {PenaltyDatas.map((room) => (
                <PenaltyRoomForm
                  key={room.id}
                  room={room}
                  onClick={() => handleRoomClick(room)}
                />
              ))}
            </Rooms>
          </Container>
        </RoomSection>
      ) : (
        <NoDataContainer>
          <NoData>받은 페널티가 없습니다.</NoData>
        </NoDataContainer>
      )}
    </>
  );
};

const Container = styled.div`
  padding: 0.625rem 1rem;
`;

const RoomSection = styled.section`
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
  gap: 0.625rem; /* 10px */
  align-self: stretch;
  width: 100%;
`;

const Rooms = styled.div`
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
  border: 0.33px solid #f5535e;
  background: #fdd8db;

  color: #000;
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

export default PenaltyRooms;
