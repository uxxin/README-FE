import React from 'react';
import styled from 'styled-components';
import VerificationIcon from '../../assets/images/vertificationicon.svg';

export const Profile = () => {
  return (
    <ProfileContainer>
      <InfoContainer>
        <ProfileImage />
        <PersonalInfo>
          <Name>이름</Name>
          <Email>이메일@gmail.com</Email>
        </PersonalInfo>
      </InfoContainer>
      <ButtonContainer>
        <VerificationButton>
          <Icon src={VerificationIcon} alt="Verificationicon" />
          확인요청내역
        </VerificationButton>
        <PenaltyButton>페널티</PenaltyButton>
      </ButtonContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border: 1px solid red; /* 디버깅용 테두리 */
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProfileImage = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background:
    url('/path-to-image') lightgray 50% / cover no-repeat,
    #d9d9d9;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const Name = styled.div`
  color: #000;

  /* Pretendard/bold/18 */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
  letter-spacing: -0.36px;
`;

const Email = styled.div`
  color: var(--GrayScale-gray4, var(--Grayscale-Gray4, #bdbdbd));

  /* Pretendard/regular/12 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 12px */
  letter-spacing: -0.24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const VerificationButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  border: 0.33px solid var(--GrayScale-gray4, #bdbdbd);
  background: var(--GrayScale-gray1, #f3f3f3);
`;

const Icon = styled.button``;

const PenaltyButton = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 999px;
  border: 0.33px solid var(--GrayScale-gray4, #bdbdbd);
  background: var(--GrayScale-gray1, #f3f3f3);
`;
