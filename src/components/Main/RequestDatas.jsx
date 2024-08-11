import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RequestDataForm from './RequestDataForm';
import { useNavigate } from 'react-router-dom';
import { getNoticeCheckRequests } from '../../api/Main/noticecheckrequests';

export const RequestDatas = () => {
  const [requestDatas, setRequestDatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getNoticeCheckRequests();
        console.log(response);

        if (response.isSuccess) {
          setRequestDatas(response.result.rooms);
        }
      } catch (error) {
        console.log('확인요청내역 불러오던 중 에러', error);
      }
    })();
  }, []);

  const handleRoomClick = (roomId, roomName) => {
    navigate(`/notice-check-req/${roomId}`, {
      state: {
        roomName: roomName,
      },
    });
  };

  return (
    <>
      {requestDatas.length > 0 ? (
        <RequestRoomSection>
          <Container>
            <RequestRooms>
              {requestDatas.map((room) => (
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
