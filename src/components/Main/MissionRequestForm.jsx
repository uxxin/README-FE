import React from 'react';
import styled from 'styled-components';

const MissionRequestForm = ({ mission }) => {
  if (!mission) return null; // mission이 없을 때 처리

  return (
    <Container>
      <TopSection>
        <ProfileImage src={mission.roomImage} alt="profile" />
        <Info>
          <NickName>{mission.nickName}</NickName>
          <Coment>{mission.coment}</Coment>
        </Info>
      </TopSection>
      <BottomSection>
        <UploadedMission src="/assets/images/missionimage.png" alt="Mission" />
        <RequestState>승인</RequestState>
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
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
`;

const Coment = styled.div`
  align-self: stretch;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
`;

const BottomSection = styled.div`
  position: relative;
`;

const UploadedMission = styled.img`
  display: flex;
  height: 12.5rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const RequestState = styled.div`
  position: absolute; /* 절대 위치 설정 */
  top: 0; /* 상단에 위치 */
  right: 0; /* 우측에 위치 */
  display: flex;
  width: 3.6875rem;
  padding: 0.375rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 62.4375rem;
  background: var(--system-success-light, #e3f2ef);
  color: var(--system-success, var(--System-Success, #00a881));
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.0175rem;
`;
