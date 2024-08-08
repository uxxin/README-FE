import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import pinIcon from '../../assets/images/pinicon.svg';
import deleteIcon from '../../assets/images/deleteicon.svg';

const FixedNotice = ({ onDelete }) => {
  const [notice, setNotice] = useState({
    roomId: 0,
    postId: 0,
    title: '공지글 제목',
    startDate: '시작일',
    endDate: '마감일',
  });

  useEffect(() => {
    const getFixedNotice = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU5LCJwcm92aWRlciI6IlJFQURNRSIsImlhdCI6MTcyMzEwMDE3NSwiZXhwIjoxNzIzMTEwOTc1fQ.c_hk6yPRxJYYrvDJeM72kpAJavFKjSUq1hhdJ3wrmIo`,
          },
        };
        const response = await axios(
          'https://read-me.kro.kr/user/fixed',
          options,
        );
        if (response === null) {
          return;
        } else {
          setNotice(response.data.result);
        }
      } catch (error) {
        console.error('공지 데이터를 가져오는 중 오류 발생:', error);
      }
    };
    getFixedNotice();
  }, []);

  const handleDelete = async () => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU5LCJwcm92aWRlciI6IlJFQURNRSIsImlhdCI6MTcyMzEwMDE3NSwiZXhwIjoxNzIzMTEwOTc1fQ.c_hk6yPRxJYYrvDJeM72kpAJavFKjSUq1hhdJ3wrmIo`,
        },
      };
      await axios.delete(`https://read-me.kro.kr/room/fixPost`, options);
      onDelete(); // 삭제 후 추가적인 작업이 필요하다면 onDelete 함수로 처리
    } catch (error) {
      console.error('공지 삭제 중 오류 발생:', error);
    }
  };

  return (
    <>
      {notice && (
        <NoticeContainer>
          <PinButton>
            <img src={pinIcon} alt="Pin Icon" />
          </PinButton>
          <NoticeContent>
            <NoticeTitle>{notice.title}</NoticeTitle>
            <NoticeDate>
              <Date>{notice.startDate}</Date>
              <DateSeparator>-</DateSeparator>
              <Date>{notice.endDate}</Date>
            </NoticeDate>
          </NoticeContent>
          <DeleteButton onClick={handleDelete}>
            <img src={deleteIcon} alt="Delete Icon" />
          </DeleteButton>
        </NoticeContainer>
      )}
    </>
  );
};

export default FixedNotice;

const NoticeContainer = styled.div`
  display: flex;
  padding: 0.625rem; /* 10px */
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem; /* 8px */
  align-self: stretch;
  border-radius: 0.5rem; /* 8px */
  border: 0.0208rem solid var(--Primary-light-active, #c9e0fd); /* 0.33px */
  background: var(--Primary-light, #f4f9ff);
`;

const PinButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const NoticeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem; /* 8px */
`;

const NoticeTitle = styled.div`
  font-size: 1rem; /* 16px */
  font-weight: 700;
  color: #222;
`;

const NoticeDate = styled.div`
  font-size: 0.875rem; /* 14px */
  color: #666;
  display: flex;
  flex-direction: row;
  gap: 0.25rem; /* 4px */
`;

const Date = styled.div`
  font-size: 0.75rem; /* 12px */
  font-weight: 400;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.015rem; /* -0.24px */
  line-height: 0.75rem; /* 12px */
`;

const DateSeparator = styled.span`
  font-size: 0.75rem; /* 12px */
  font-weight: 400;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  line-height: 0.75rem; /* 12px */
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
