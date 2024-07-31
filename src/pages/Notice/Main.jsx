import React, { useState, useEffect } from 'react';
import { UnconfirmedNotice } from '../../components/Notice/UnconfirmedNotice';
import { NoticeItem } from '../../components/Notice/NoticeItem';
import { Header } from '../../components/Header';
import styled from 'styled-components';
import { NoticePreview } from '../../components/Notice/NoticePreview';

const Main = () => {
  const [isNoticeNull, setIsNoticeNull] = useState(false);
  const navigationProps = {
    title: '확인 요청 내역',
    isSearch: true,
  };
  const previewProps = {
    quizFormat: 'Mission',
    commentCount: 100,
    requestStatus: 'complete',
    startDate: '20.10.22 17:41',
    lastDate: '20.10.22 18:41',
    title: '공지 제목입니다.',
    content: '내용 테스트 내용 테스트',
    thumbnailUrl: '../../assets/images/notice_thumbnail.png',
  };
  const previewProps2 = {
    quizFormat: 'Quiz',
    commentCount: 99,
    requestStatus: 'pending',
    startDate: '20.10.22 17:41',
    lastDate: '20.10.22 18:41',
    title: '공지 제목입니다.',
    content: '내용 테스트 내용 테스트',
    thumbnailUrl: '../../assets/images/notice_thumbnail.png',
  };
  return (
    <>
      <Header props={navigationProps}></Header>
      {isNoticeNull ? (
        <NoNoticeContainer>
          <NoNotice>공지가 없습니다.</NoNotice>
        </NoNoticeContainer>
      ) : (
        <Notice>
          <UnconfirmedNotice />
          <NoticePreview props={previewProps} />
          <NoticePreview props={previewProps2} />
          <NoticePreview props={previewProps} />
        </Notice>
      )}
    </>
  );
};

export default Main;

const NoNoticeContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const NoNotice = styled.div`
  display: flex;
  padding: 1.5rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  color: #000;

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const Notice = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
