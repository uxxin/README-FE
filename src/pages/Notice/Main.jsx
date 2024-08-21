import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UnconfirmedNotice } from '../../components/Notice/UnconfirmedNotice';
import { Header } from '../../components/Header';
import styled, { keyframes } from 'styled-components';
import { NoticePreview } from '../../components/Notice/NoticePreview';
import { ReactComponent as Arrow } from '../../assets/svgs/top_arrow.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Edit } from '../../assets/svgs/floating_icon1.svg';
import { ReactComponent as MemberList } from '../../assets/svgs/floating_icon2.svg';
import { ReactComponent as RequestList } from '../../assets/svgs/floating_icon3.svg';
import { ReactComponent as Write } from '../../assets/svgs/floating_icon4.svg';
import { ReactComponent as PenaltyIcon } from '../../assets/svgs/penalty_icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  setShowDivs,
  setFlipped,
  setRoomTitle,
} from '../../redux/Notice/NoticeActions';
import {
  bannedRoom,
  checkPenalty,
  getNotices,
  getUnconfirmedNotices,
} from '../../api/Notice/noticeMain';
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
  const { roomId } = useParams();
  const showDivs = useSelector((state) => state.notice.showDivs);
  const isFlipped = useSelector((state) => state.notice.isFlipped);
  const roomTitle = useSelector((state) => state.notice.roomTitle);
  const [isManager, setIsManager] = useState(true);
  const [noticeData, setNoticeData] = useState([]);
  const [unconfirmedNoticeData, setUnconfirmedNoticeData] = useState([]);
  const [isPenaltyModalOpen, setIsPenaltyModalOpen] = useState(false);
  const [penaltyData, setPenaltyData] = useState({
    penaltyCount: 0,
    maxPenalty: 0,
    notCheckedPenalty: [],
  });
  const [offset, setOffset] = useState(1.25);
  const [isBanned, setIsBanned] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const isNoticeNull = noticeData.length === 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updatePosition = () => {
    const bodyRect = document.body.getBoundingClientRect();
    setOffset(bodyRect.left / 16 + 1.25);
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  const handlePenaltyModalClose = () => {
    setIsPenaltyModalOpen(false);
  };

  const handleFloatingButtonClick = () => {
    dispatch(setShowDivs(!showDivs));
    dispatch(setFlipped(!isFlipped));
  };

  const handleCheckButtonClick = () => {
    navigate(`/penalty/${roomId}`);
  };

  const handleBannedButtonClick = async () => {
    try {
      const response = await bannedRoom(roomId);
      if (response.isSuccess) navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getNoticeData = async () => {
      try {
        const response = await getNotices(roomId);
        setIsManager(response.data.result.isRoomAdmin);
        setNoticeData(response.data.result.posts);
        dispatch(setRoomTitle(response.data.result.roomName));
        if (response.data.result.notCheckedPenalty.length > 0) {
          setPenaltyData({
            penaltyCount: response.data.result.penaltyCount,
            maxPenalty: response.data.result.maxPenalty,
            notCheckedPenalty: response.data.result.notCheckedPenalty,
          });
          setIsPenaltyModalOpen(true);
        }
        await checkPenalty(roomId);
      } catch (error) {
        console.log(error);
      }
    };
    getNoticeData();
  }, []);

  useEffect(() => {
    const unconfirmedNoticeData = async () => {
      try {
        const response = await getUnconfirmedNotices(roomId);
        setUnconfirmedNoticeData(response.data.result.posts);
      } catch (error) {
        console.log(error);
      }
    };
    unconfirmedNoticeData();
  }, []);

  useEffect(() => {
    if (penaltyData.penaltyCount === penaltyData.maxPenalty) setIsBanned(true);
    else setIsBanned(false);
  }, [penaltyData]);

  return (
    <MainContainer>
      <Header
        title={roomTitle}
        isSearch={true}
        url="/home"
        setSearchValue={setSearchValue}
      />
      {isPenaltyModalOpen && (
        <PenaltyContainer>
          <PenaltyModal>
            <PenaltyModalTop>
              <PenaltyText>Penalty</PenaltyText>
              <StyledPenaltyIcon />
              <PenaltyCount>
                <PenaltyCount1>{penaltyData.penaltyCount}</PenaltyCount1>
                <PenaltyCount2>/{penaltyData.maxPenalty}</PenaltyCount2>
              </PenaltyCount>
              {penaltyData.notCheckedPenalty.length > 0 &&
                penaltyData.notCheckedPenalty.map((post) => (
                  <PenaltyRoomTitle>{post.postTitle}</PenaltyRoomTitle>
                ))}
              <PenaltyWarning>
                해당 공지글을 확인하지 않아 페널티가 부여됐습니다.
              </PenaltyWarning>
            </PenaltyModalTop>
            <PenaltyButtons>
              {isBanned ? (
                <>
                  <PenaltyBanned onClick={handleBannedButtonClick}>
                    퇴장하기
                  </PenaltyBanned>
                </>
              ) : (
                <>
                  <PenaltyCheck onClick={handleCheckButtonClick}>
                    확인하러 가기
                  </PenaltyCheck>
                  <PenaltyClose onClick={handlePenaltyModalClose}>
                    닫기
                  </PenaltyClose>
                </>
              )}
            </PenaltyButtons>
          </PenaltyModal>
        </PenaltyContainer>
      )}
      {isNoticeNull ? (
        <NoNoticeContainer>
          <NoNotice>공지가 없습니다.</NoNotice>
        </NoNoticeContainer>
      ) : (
        <Notice>
          {!isManager && (
            <>
              {unconfirmedNoticeData.length > 0 && (
                <UnconfirmedNotice
                  dispatch={dispatch}
                  postData={unconfirmedNoticeData}
                />
              )}
            </>
          )}
          {noticeData
            .filter((post) => {
              if (searchValue.length > 0) {
                return post.postTitle.includes(searchValue);
              }
              return true;
            })
            .map((post) => (
              <NoticePreview
                key={post.id}
                props={post}
                isManager={isManager}
                roomId={roomId}
              />
            ))}
        </Notice>
      )}

      {isManager && (
        <FloatingButtonContainer>
          <FloatingDivContainer showDivs={showDivs} offset={offset}>
            <StyledLink to="edit" showDivs={showDivs}>
              <FloatingDiv color="var(--system-warning, #F57D14)">
                <StyledEdit />
              </FloatingDiv>
            </StyledLink>

            <StyledLink to="member" showDivs={showDivs}>
              <FloatingDiv color="var(--Primary-dark, #3C74B9)">
                <StyledMemberList />
              </FloatingDiv>
            </StyledLink>

            <StyledLink to="confirm-list" showDivs={showDivs}>
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

          <FloatingButton onClick={handleFloatingButtonClick} offset={offset}>
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
  background-color: transparent;
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
  width: 90%;
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
  font-size: 1rem;
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
  background-color: transparent;
  position: relative;
`;

const FloatingButtonContainer = styled.div`
  z-index: 1000;
`;

const FloatingDivContainer = styled.div`
  position: fixed;
  bottom: 1.875rem;
  right: ${(props) => `${props.offset}rem`};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: height 0.5s;
  height: ${(props) => (props.showDivs ? '20rem' : '0')};
  overflow: hidden;
  gap: 0.625rem;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 1.875rem;
  right: ${(props) => `${props.offset}rem`};
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

const FloatingDiv = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${(props) => props.color};
  padding: 0;
  border: none;
  margin: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: bottom 0.5s ease-out;
`;
const PenaltyContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 17.875rem 2.6875rem 17.9375rem 2.6875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--Background-dimmed60, rgba(34, 34, 34, 0.6));
  box-sizing: border-box;
  z-index: 1000;
`;

const StyledPenaltyIcon = styled(PenaltyIcon)`
  width: 10.125rem;
  height: 9.1875rem;
`;

const PenaltyModal = styled.div`
  display: flex;
  padding-top: 1.1875rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.33px solid var(--System-Danger, #f5535e);
  background: var(--system-danger-light, #fdd8db);
  backdrop-filter: blur(40px);
  position: absolute;
  top: 10rem;
`;

const PenaltyModalTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  padding: 0rem 1rem 0.9375rem 1rem;
`;

const PenaltyText = styled.div`
  color: var(--system-danger, var(--System-Danger, #f5535e));
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.03rem;
`;
const PenaltyCount = styled.div`
  display: flex;
`;
const PenaltyCount1 = styled.span`
  color: var(--system-danger, var(--Grayscale-Gray7, #f5535e));
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0175rem;
`;
const PenaltyCount2 = styled.span`
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0175rem;
`;

const PenaltyRoomTitle = styled.button`
  display: flex;
  padding: 0.125rem 0.625rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: none;
  border-radius: 6.1875rem;
  background: var(--System-Danger, #f5535e);
  color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
`;

const PenaltyWarning = styled.div`
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
`;
const PenaltyButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PenaltyCheck = styled.button`
  width: 100%;
  display: flex;
  padding: 0.875rem 0rem;
  margin: 0;
  border: none;
  border-top: 0.333px solid var(--Grayscale-Gray5, #888);
  background-color: var(--Basic-White, var(--Basic-White, #fff));
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  color: var(--system-danger, var(--System-Danger, #f5535e));
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.02rem;
`;

const PenaltyClose = styled.button`
  width: 100%;
  display: flex;
  padding: 0.875rem 0rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border: none;
  border-top: 0.333px solid var(--Grayscale-Gray5, #888);
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  background-color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.02rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const PenaltyBanned = styled.button`
  width: 100%;
  display: flex;
  padding: 0.875rem 0rem;
  margin: 0;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border: none;
  border-top: 0.333px solid var(--Grayscale-Gray5, #888);
  color: var(--system-danger, var(--System-Danger, #f5535e));
  background-color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.02rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;
