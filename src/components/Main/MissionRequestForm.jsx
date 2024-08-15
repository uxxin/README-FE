import React, { useState } from 'react';
import styled from 'styled-components';
import prevButton from '../../assets/svgs/dark_prev_button.svg';
import nextButton from '../../assets/svgs/dark_next_button.svg';
import returnIcon from '../../assets/svgs/returnicon.svg';
import { useNavigate } from 'react-router-dom';

const MissionRequestForm = ({ mission, roomId }) => {
  const navigate = useNavigate();

  const truncateContent = (content, maxLength) => {
    if (content && content.length > maxLength) {
      return content.slice(0, maxLength) + '...';
    }
    return content;
  };

  const getRequestStateText = (state) => {
    switch (state) {
      case 'COMPLETE':
        return '승인';
      case 'PENDING':
        return '검토 중';
      case 'REJECT':
        return '거절';
      default:
        return '상태 미정';
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = mission.images || [];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex,
    );
  };

  const handleNoticeClick = () => {
    navigate(`/notice/${roomId}/${mission.postId}`);
  };

  return (
    <Container>
      <TopSection>
        <ProfileImage src={mission.profileImage} alt="profile" />
        <Info>
          <NickName>{mission.nickname}</NickName>
          <Coment>{truncateContent(mission.content, 50)}</Coment>
        </Info>
      </TopSection>
      <BottomSection>
        {images.length > 1 && currentIndex !== 0 && (
          <PrevButton src={prevButton} alt="Previous" onClick={handlePrev} />
        )}
        <ImageContainer>
          <UploadedMission src={images[currentIndex]} alt="Mission" />
          {mission.submitState === 'REJECT' && (
            <>
              <Overlay />
              <NoticeButton onClick={handleNoticeClick}>
                공지 돌아가기
                <Icon src={returnIcon} alt="Return Icon" />
              </NoticeButton>
            </>
          )}
        </ImageContainer>
        {images.length > 1 && currentIndex !== images.length - 1 && (
          <NextButton src={nextButton} alt="Next" onClick={handleNext} />
        )}
        <RequestState state={mission.submitState}>
          {getRequestStateText(mission.submitState)}
        </RequestState>
      </BottomSection>
    </Container>
  );
};

export default MissionRequestForm;

const Container = styled.div`
  display: flex;
  padding-bottom: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-bottom: 0.020625rem solid var(--Primary-Light-active, #c9e0fd);
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
  flex: 1 0 0;
`;

const NickName = styled.div`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const Coment = styled.div`
  align-self: stretch;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
`;

const BottomSection = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const UploadedMission = styled.img`
  height: 12.5rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
  width: 24.875rem;
  height: 12.5rem;
  object-fit: cover;
`;

const Button = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  opacity: 0.8;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const PrevButton = styled(Button)`
  left: 0.625rem;
  z-index: 3;
`;

const NextButton = styled(Button)`
  right: 0.625rem;
  z-index: 3;
`;

const RequestState = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: flex;
  padding: 0.375rem 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 62.4375rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0175rem;
  width: 2.5rem;
  white-space: nowrap;

  background: ${({ state }) => {
    switch (state) {
      case 'COMPLETE':
        return '#E3F2EF';
      case 'PENDING':
        return '#E9E9E9';
      case 'REJECT':
        return '#FDD8DB';
      default:
        return '#E9E9E9';
    }
  }};

  color: ${({ state }) => {
    switch (state) {
      case 'COMPLETE':
        return '#00A881';
      case 'PENDING':
        return '#222';
      case 'REJECT':
        return '#F5535E';
      default:
        return '#222';
    }
  }};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 검정색 반투명 오버레이 */
  border-radius: 0.5rem;
`;

const NoticeButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  font-family: Pretendard; //여기만 적용이 안되길래 작성함.
  line-height: 120%;
  letter-spacing: -0.02rem;
  cursor: pointer;
  z-index: 1;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.125rem;
`;

const Icon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;
