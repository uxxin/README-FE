import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import pinIcon from '../../assets/svgs/pinicon.svg';
import deleteIcon from '../../assets/svgs/deleteicon.svg';
import { getFixedNotice, deleteFixedNotice } from '../../api/Main/home';

const FixedNotice = ({ onDelete }) => {
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getFixedNotice();
        console.log(response);

        if (response.isSuccess) {
          setNotice(response.result);
        }
      } catch (error) {
        console.log('고정 공지 데이터를 가져오는 중 오류 발생: ', error);
      }
    })();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await deleteFixedNotice();
      console.log(response);
      onDelete();
      setNotice(null);
    } catch (error) {
      console.log('고정 공지 삭제 중 오류 발생: ', error);
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
