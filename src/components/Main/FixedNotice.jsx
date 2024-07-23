import React from 'react';
import styled from 'styled-components';
import pinIcon from '../../assets/images/pinicon.svg';
import deleteIcon from '../../assets/images/deleteicon.svg';

const FixedNotice = () => {
  return (
    <NoticeContainer>
      <PinButton>
        <img src={pinIcon} alt="Pin Icon" />
      </PinButton>
      <NoticeContent>
        <NoticeTitle>공지 제목</NoticeTitle>
        <NoticeDate>
          <Date>시작 날짜</Date>
          <DateSeparator>-</DateSeparator>
          <Date>끝날짜</Date>
        </NoticeDate>
      </NoticeContent>
      <DeleteButton>
        <img src={deleteIcon} alt="Delete Icon" />
      </DeleteButton>
    </NoticeContainer>
  );
};

export default FixedNotice;

const NoticeContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
`;

const PinButton = styled.button`
  background: none;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
`;

const NoticeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const NoticeTitle = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  color: #222;
`;

const NoticeDate = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  color: #666;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

const Date = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.24px;
  line-height: 12px;
`;

const DateSeparator = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  line-height: 12px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
