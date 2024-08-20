import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { NoticePreview } from '../NoticePreview';
import { ConfirmListMap } from './ConfirmListMap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getSubmitList } from '../../../api/Member/memberListCheck';

export const ConfirmList = () => {
  const [requestNum, setRequestNum] = useState([]);

  const { roomId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSubmitList({ roomId });
        const confirmList = data.result;
        console.log('이미지데이터 불러와', confirmList);
        setRequestNum(confirmList);
      } catch (error) {
        console.error('데이터를 가져오는 동안 오류 발생:', error);
      }
    };
    fetchData();
  }, [roomId]);

  return (
    <div>
      {requestNum.length === 0 ? (
        <BoxContainer>
          <CheckContainer>확인요청내역이 없습니다.</CheckContainer>
        </BoxContainer>
      ) : (
        requestNum.map((item, index) => (
          <ConfirmListMap key={index} {...item} />
        ))
      )}
    </div>
  );
};

const BoxContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  flex-grow: 1;
  flex-shrink: 1;
  height: 4.188rem;
`;
