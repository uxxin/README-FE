import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ReactComponent as VerificationIcon } from '../../assets/images/vertificationicon.svg';
import { ReactComponent as PenaltyIcon } from '../../assets/images/penaltyicon.svg';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    '/assets/images/defaultprofileimage.png',
  );
  const [name, setName] = useState('이름');
  const [email, setEmail] = useState('이메일@gmail.com');

  useEffect(() => {
    axios
      .get('/mock/ProfileData.json')
      .then((response) => {
        const data = response.data;
        setName(data.nickname);
        setEmail(data.email);
        setProfileImage(data.profile_image);
      })
      .catch((error) => console.error('Error fetching profile data:', error));
  }, []);

  const handleVerificationClick = () => {
    navigate('/notice-check-req');
  };

  const handlePenaltyClick = () => {
    navigate('/penalty');
  };

  return (
    <ProfileContainer>
      <InfoContainer>
        <ProfileImage src={profileImage} alt="Profile" />
        <PersonalInfo>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </PersonalInfo>
      </InfoContainer>
      <ButtonContainer>
        <VerificationButton onClick={handleVerificationClick}>
          <StyledVerificationIcon />
          확인 요청 내역
        </VerificationButton>
        <PenaltyButton onClick={handlePenaltyClick}>
          <StyledPenaltyIcon />
          페널티
        </PenaltyButton>
      </ButtonContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 0.5rem;
  background: lightgray;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
`;

const Name = styled.div`
  color: #000;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;

const Email = styled.div`
  color: var(--GrayScale-gray4, #bdbdbd);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const VerificationButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 999px;
  border: 0.021rem solid var(--GrayScale-gray4, #bdbdbd);
  background: var(--GrayScale-gray1, #f3f3f3);
  color: var(--GrayScale-gray5, #888);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
  cursor: pointer;
`;

const StyledVerificationIcon = styled(VerificationIcon)`
  width: 1rem;
  height: 1rem;
`;

const PenaltyButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  border-radius: 999px;
  border: 0.021rem solid var(--GrayScale-gray4, #bdbdbd);
  background: var(--GrayScale-gray1, #f3f3f3);
  color: var(--GrayScale-gray5, #888);
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
  cursor: pointer;
`;

const StyledPenaltyIcon = styled(PenaltyIcon)`
  width: 1rem;
  height: 1rem;
`;
