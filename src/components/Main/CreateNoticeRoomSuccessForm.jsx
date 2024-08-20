import React from 'react';
import styled from 'styled-components';
import copyIcon from '../../assets/svgs/copy_icon.svg';

const CreateNoticeRoomSuccessForm = ({
  profileImage,
  url,
  roomName,
  password,
  nickName,
}) => {
  const handleCopyClick = () => {
    const fullUrl = `https://read-me-official.kro.kr/notice/entry/${url}`;
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        alert('공지방 URL 복사 완료');
      })
      .catch((error) => {
        console.log('URL 복사 중 오류 발생: ', error);
      });
  };

  return (
    <Container>
      <InfoBox>
        <TopSection>리드미 완성🎉</TopSection>
        <InfoSection>
          <ProfileImage src={profileImage} alt="Profile" />
          <Info>
            <InfoSet>
              <InfoLabel>초대 URL</InfoLabel>
              <UrlContainer>
                <InfoValue>
                  https://read-me-official.kro.kr/notice/entry/{url}
                </InfoValue>
                <CopyButton onClick={handleCopyClick}>
                  <img src={copyIcon} alt="Copy Icon" />
                </CopyButton>
              </UrlContainer>
            </InfoSet>
            <InfoSet>
              <InfoLabel>공지방 이름</InfoLabel>
              <InfoValue>{roomName}</InfoValue>
            </InfoSet>
            <InfoSet>
              <InfoLabel>비밀번호</InfoLabel>
              <InfoValue>{password}</InfoValue>
            </InfoSet>
            <InfoSet>
              <InfoLabel>대표자</InfoLabel>
              <InfoValue>{nickName}</InfoValue>
            </InfoSet>
          </Info>
        </InfoSection>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const InfoBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 0.33px solid #509bf7;
  margin-top: 10px;
  margin-bottom: 6rem;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0.5rem 0.8125rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: #509bf7;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.02rem;
`;

const InfoSection = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  background: #f4f9ff;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 0.5rem;
  background: lightgray 50% / cover no-repeat;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  align-self: stretch;
`;

const InfoLabel = styled.div`
  color: #3c74b9;
  font-size: 1rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.02rem;
  white-space: nowrap;
`;

const InfoValue = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: #222;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
`;

const InfoSet = styled.div`
  display: flex;
  height: 2.1875rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export default CreateNoticeRoomSuccessForm;
