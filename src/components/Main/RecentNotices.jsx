import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import prevButtonSvg from '../../assets/images/prev_button.svg';
import nextButtonSvg from '../../assets/images/next_button.svg';

const ITEMS_PER_PAGE = 5; //한 페이지에 5개씩 오도록

export const RecentNotices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNotices, setTotalNotices] = useState(0);

  useEffect(() => {
    const fetchTotalNotices = async () => {
      // 데이터 실제로 받아올 때 수정 필요
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve(101), 1000); // 101개라고 가정
      });
      setTotalNotices(response);
    };

    fetchTotalNotices();
  }, []);

  const totalPages = Math.ceil(totalNotices / ITEMS_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage - 1 < 1 ? totalPages : prevPage - 1,
    );
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 > totalPages ? 1 : prevPage + 1,
    );
  };

  //공지방 이름, 내용, n분전 예시로- 변경 필요
  const notices = Array.from({ length: totalNotices }, (_, index) => ({
    name: `공지방 이름 ${index + 1}`,
    text: `공지 내용 ${index + 1}`,
    time: `${index + 1}분전`,
  }));

  const currentNotices = notices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // 마지막 페이지 빈 부분 개수
  const emptyRows = ITEMS_PER_PAGE - currentNotices.length;

  // 빈 부분도 추가해놓기
  const displayedNotices = [
    ...currentNotices,
    ...Array.from({ length: emptyRows }, () => ({
      name: '',
      text: '',
      time: '',
    })),
  ];

  return (
    <RecentNoticesSection>
      <RecentTitle>최근 공지</RecentTitle>
      <NoticesList>
        {displayedNotices.map((notice, index) => (
          <NoticeItem
            key={index}
            isEmpty={!notice.name && !notice.text && !notice.time}
          >
            <NoticeContent>
              <NoticeName>{notice.name}</NoticeName>
              <NoticeText>{notice.text}</NoticeText>
            </NoticeContent>
            <NoticeTime>{notice.time}</NoticeTime>
          </NoticeItem>
        ))}
        <Pagination>
          <NavButton
            onClick={handlePrevPage}
            src={prevButtonSvg}
            alt="Previous"
          />
          <PageNumber>
            <CurrentPage>{currentPage}</CurrentPage>
            <Separator>/</Separator>
            <TotalPages>{totalPages}</TotalPages>
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
  padding: 12px 0;
  align-items: center;
  align-self: stretch;
  border-bottom: 0.33px solid var(--Text-caption, #888);
  height: ${(props) => (props.isEmpty ? '14px' : 'auto')};
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
  padding: 8px 0;
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

const CurrentPage = styled.span`
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
`;

const Separator = styled.span`
  color: var(--GrayScale-gray5, var(--Grayscale-Gray5, #888));
`;

const TotalPages = styled.span`
  color: var(--GrayScale-gray5, var(--Grayscale-Gray5, #888));
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
