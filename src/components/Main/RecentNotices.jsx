import React, { useState } from 'react';
import styled from 'styled-components';
import prevButtonSvg from '../../assets/images/prev_button.svg'; // 경로를 맞게 설정해 주세요
import nextButtonSvg from '../../assets/images/next_button.svg'; // 다음 버튼 이미지 경로

export const RecentNotices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 99;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <RecentNoticesSection>
      <RecentTitle>최근 공지</RecentTitle>
      <NoticesList>
        {[...Array(5)].map((_, index) => (
          <NoticeItem key={index}>
            <NoticeContent>
              <NoticeName>공지방 이름</NoticeName>
              <NoticeText>공지 내용</NoticeText>
            </NoticeContent>
            <NoticeTime>n분전</NoticeTime>
          </NoticeItem>
        ))}
        <Pagination>
          <NavButton
            onClick={handlePrevPage}
            src={prevButtonSvg}
            alt="Previous"
          />
          <PageNumber>
            <span>{currentPage}</span>
            <span>/</span>
            <span>{totalPages}</span>
          </PageNumber>
          <NavButton onClick={handleNextPage} src={nextButtonSvg} alt="Next" />
        </Pagination>
      </NoticesList>
    </RecentNoticesSection>
  );
};

const RecentNoticesSection = styled.section`
  width: 100%;
`;

const RecentTitle = styled.div`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%; /* 20px */
  letter-spacing: -0.4px;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const NoticesList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.33px solid var(--Primary-normal, #509bf7);
  border-bottom: 0.33px solid var(--Primary-normal, #509bf7);
`;

const NoticeItem = styled.div`
  display: flex;
  padding: 12px 0px;
  align-items: center;
  align-self: stretch;
  border-bottom: 0.33px solid var(--Text-caption, #888);
`;

const NoticeContent = styled.div`
  display: flex;
  padding-right: 4px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
`;

const NoticeName = styled.div`
  display: -webkit-box;
  width: 82px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  letter-spacing: -0.24px;
`;

const NoticeText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.28px;
`;

const NoticeTime = styled.div`
  margin-left: 4px;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 10px */
  letter-spacing: -0.2px;
`;

const Pagination = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

const PageNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-weight: 600;
`;

const NavButton = styled.img`
  width: 24px;
  height: 24px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  cursor: pointer;
`;

export default RecentNotices;
