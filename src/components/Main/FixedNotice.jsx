import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import pinIcon from '../../assets/svgs/pinicon.svg';
import deleteIcon from '../../assets/svgs/deleteicon.svg';
import { getFixedNotice, deleteFixedNotice } from '../../api/Main/home';
import { useNavigate } from 'react-router-dom';

const FixedNotice = ({ onDelete }) => {
  const [notice, setNotice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getFixedNotice();

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
      await deleteFixedNotice();
      onDelete();
      setNotice(null);
    } catch (error) {
      console.log('고정 공지 삭제 중 오류 발생: ', error);
    }
  };

  const handleNoticeClick = () => {
    if (notice) {
      navigate(`/notice/${notice.roomId}/${notice.postId}`);
    }
  };

  return (
    <>
      {notice && (
        <NoticeContainer onClick={handleNoticeClick}>
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
  padding: 0.625rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.0208rem solid #c9e0fd;
  background: #f4f9ff;
  cursor: pointer;
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
  gap: 0.5rem;
`;

const NoticeTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #222;
`;

const NoticeDate = styled.div`
  font-size: 0.875rem;
  color: #666;
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

const Date = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #509bf7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.015rem;
  line-height: 0.75rem;
`;

const DateSeparator = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #509bf7;
  line-height: 0.75rem;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
