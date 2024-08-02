import React, { useState } from 'react';
import { UnconfirmedNotice } from '../../components/Notice/UnconfirmedNotice';
import { Header } from '../../components/Header';
import styled, { keyframes } from 'styled-components';
import { NoticePreview } from '../../components/Notice/NoticePreview';
import { ManagerNoticePreview } from '../../components/Notice/ManagerNoticePreview';
import { ReactComponent as Arrow } from '../../assets/images/top_arrow.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Edit } from '../../assets/images/floating_icon1.svg';
import { ReactComponent as MemberList } from '../../assets/images/floating_icon2.svg';
import { ReactComponent as RequestList } from '../../assets/images/floating_icon3.svg';
import { ReactComponent as Write } from '../../assets/images/floating_icon4.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setShowDivs, setFlipped } from '../../redux/Notice/NoticeActions';

const expand = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const collapse = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`;

const Main = () => {
  const [isNoticeNull, setIsNoticeNull] = useState(false);
  const showDivs = useSelector((state) => state.notice.showDivs);
  const isFlipped = useSelector((state) => state.notice.isFlipped);
  const [isManager, setIsManager] = useState(true);
  const dispatch = useDispatch();

  const handleFloatingButtonClick = () => {
    dispatch(setShowDivs(!showDivs));
    dispatch(setFlipped(!isFlipped));
  };

  const navigationProps = {
    title: '공지방 메인',
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
    <MainContainer>
      <Header props={navigationProps}></Header>
      {isNoticeNull ? (
        <NoNoticeContainer>
          <NoNotice>공지가 없습니다.</NoNotice>
        </NoNoticeContainer>
      ) : (
        <Notice>
          {isManager ? (
            <ManagerNoticePreview props={previewProps} />
          ) : (
            <>
              <UnconfirmedNotice />
              <NoticePreview props={previewProps} />
              <NoticePreview props={previewProps2} />
              <NoticePreview props={previewProps} />
            </>
          )}
        </Notice>
      )}
      {isManager && (
        <FloatingButtonContainer>
          <FloatingDivContainer showDivs={showDivs}>
            <StyledLink to="edit" showDivs={showDivs}>
              <FloatingDiv color="var(--system-warning, #F57D14)">
                <StyledEdit />
              </FloatingDiv>
            </StyledLink>
            <StyledLink to="/member" showDivs={showDivs}>
              <FloatingDiv color="var(--Primary-dark, #3C74B9)">
                <StyledMemberList />
              </FloatingDiv>
            </StyledLink>
            <StyledLink to="check-req" showDivs={showDivs}>
              <FloatingDiv color="var(--Primary-dark, #3C74B9)">
                <StyledRequestList />
              </FloatingDiv>
            </StyledLink>
            <StyledLink to="write" showDivs={showDivs}>
              <FloatingDiv color="var(--Primary-dark, #3C74B9)">
                <StyledWrite />
              </FloatingDiv>
            </StyledLink>
          </FloatingDivContainer>
          <FloatingButton onClick={handleFloatingButtonClick}>
            <StyledArrow flipped={isFlipped} />
          </FloatingButton>
        </FloatingButtonContainer>
      )}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  height: 100%;
  position: relative;
`;

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

const FloatingButtonContainer = styled.div`
  z-index: 1000;
`;

const FloatingDivContainer = styled.div`
  position: absolute;
  bottom: 1.875rem;
  right: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: height 0.5s;
  height: ${(props) => (props.showDivs ? '20rem' : '0')};
  overflow: hidden;
  gap: 0.625rem;
`;

const FloatingButton = styled.button`
  position: absolute;
  bottom: 1.875rem;
  right: 1.25rem;
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  border-radius: 50%;
  background: var(--GrayScale-gray6, #444);
  color: white;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

const StyledArrow = styled(Arrow)`
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.5s;
  transform: ${(props) => (props.flipped ? 'scaleY(-1)' : 'none')};
`;

const StyledEdit = styled(Edit)`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledMemberList = styled(MemberList)`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledRequestList = styled(RequestList)`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledWrite = styled(Write)`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledLink = styled(Link)`
  width: 3.5rem;
  height: 3.5rem;
  margin: 10px, 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.3s,
    transform 0.3s;
  animation: ${(props) => (props.showDivs ? expand : collapse)} 0.5s forwards;
`;

const FloatingDiv = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: bottom 0.5s ease-out;
`;
