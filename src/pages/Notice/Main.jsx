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
  const [isManager, setIsManager] = useState(false);
  const dispatch = useDispatch();

  const handleFloatingButtonClick = () => {
    dispatch(setShowDivs(!showDivs));
    dispatch(setFlipped(!isFlipped));
  };

  const navigationProps = {
    title: '공지방 메인',
    isSearch: true,
  };

  const postData = [
    {
      postId: 3,
      postType: 'Quiz',
      postTitle: 'test3',
      postBody: 'testcontent3',
      postImage: '../../assets/images/notice_thumbnail.png',
      startDate: '24. 7. 27. 19:05',
      endDate: '24. 7. 27. 19:05',
      commentCount: 1,
      submitState: 'NOT_COMPLETE',
    },
    {
      postId: 2,
      postType: 'Mission',
      postTitle: 'test2',
      postBody: 'testcontent2',
      postImage: null,
      startDate: '24. 7. 27. 19:01',
      endDate: '24. 7. 27. 19:01',
      commentCount: 0,
      submitState: 'NOT_COMPLETE',
    },
    {
      postId: 1,
      postType: 'Quiz',
      postTitle: 'TEST',
      postBody: 'TESTCONTENT',
      postImage: 'url11.com',
      startDate: '24. 7. 25. 04:24',
      endDate: '24. 7. 25. 05:24',
      commentCount: 5,
      submitState: 'COMPLETE',
    },
  ];

  return (
    <>
      <Header props={navigationProps}></Header>

      <MainContainer>
        {postData.length > 0 ? <UnconfirmedNotice dispatch={dispatch} /> : null}
        {postData.length > 0 ? (
          postData.map((data) => (
            <NoticePreview props={data} key={data.postId} />
          ))
        ) : (
          <NoNotice>공지가 없습니다.</NoNotice>
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
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const NoNotice = styled.div`
  display: flex;
  width: 100%;
  height: 4.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
  color: var(--Basic-Black, #000);
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
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
