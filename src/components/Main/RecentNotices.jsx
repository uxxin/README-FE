import React from 'react';
import styled from 'styled-components';

export const RecentNotices = () => {
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
      </NoticesList>
      <Pagination>
        <NavButton>◀</NavButton>
        <PageNumber>1/99</PageNumber>
        <NavButton>▶</NavButton>
      </Pagination>
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
  gap: 10px;
  padding: 12px;
  border-top: 0.33px solid var(--Primary-normal, #509bf7);
  border-bottom: 0.33px solid var(--Primary-normal, #509bf7);
`;

const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  padding: 12px 0px 12px 0px;
  border-bottom: 0.33px solid var(--Text-caption, #888);
  border: 0.0625rem solid red;
`;

const NoticeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  flex: 1;
`;

const NoticeName = styled.div`
  display: -webkit-box;
  width: 82px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;

  /* Pretendard/regular/12 */
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

  /* Pretendard/regular/14 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.28px;
`;

const NoticeTime = styled.div`
  margin-left: 4px;
  white-space: nowrap; //여기 수정해야하나
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));

  /* Pretendard/regular/10 */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 10px */
  letter-spacing: -0.2px;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

const PageNumber = styled.span`
  font-weight: 600;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default RecentNotices;
