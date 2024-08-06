import React from 'react';
import styled from 'styled-components';
import { SlideButton, CheckButton, XButton } from '../../assets/images/icons';

const Container = styled.div`
  display: flex;
  width: 26.75rem;
  padding-right: 1rem;
  padding: 0.625rem 1rem;
  padding-right: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const TotalContainer = styled.div`
  display: flex;
  width: 26.75rem;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const MissionTogle = styled.div`
  display: flex;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
`;

const BarLeftContainer = styled.div`
  border-radius: 0.5rem 0 0 0.5rem;
  border: 1px solid #bdbdbd;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  color: white;
  display: flex;
  padding: 0.75rem 4.125rem;
  align-items: center;
  gap: 0.125rem;
  flex: 1 0 0;
  align-self: stretch;
  background: white;
  color: #509bf7;
`;

const BarRightContainer = styled.div`
  display: flex;
  padding: 0.75rem 4.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  background: var(--Primary-normal, #509bf7);
`;

const CheckContainer = styled.div`
  display: flex;
  width: 22rem;
  padding: 1.5rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
`;

const BoxContainer = styled.div`
  display: flex;
  padding-right: 2rem;
  padding-bottom: 1rem;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-bottom: 0.33px solid var(--Primary-light-active, #c9e0fd);
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.span`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));

  font-size: 1rem;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
`;

const ProfileInfo = styled.span`
  align-self: stretch;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%; /* 0.75rem */
  letter-spacing: -0.015rem;
`;

const ImgContainer = styled.img`
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
`;

const ContentContainer = styled.div`
  width: 24.875rem;
  height: 12.5rem;
  justify-content: flex-end; //슬라이드버튼을 오른쪽 끝에 오게 만든다.
  align-items: center;
  display: flex;
`;
const SecondButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
`;

const YesButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-right: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  border: 0.33px solid #bdbdbd; /* 전체 경계선을 회색으로 설정 */
  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;

const NoButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-right: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  border: 0.33px solid #bdbdbd; /* 전체 경계선을 회색으로 설정 */
  border-radius: 0rem 0.5rem 0.5rem 0rem;
`;

export const CheckList = () => {
  return (
    <div>
      <Container>
        <BoxContainer>
          <MissionTogle>
            <BarLeftContainer>대기</BarLeftContainer>
            <BarRightContainer>승인완료</BarRightContainer>
          </MissionTogle>
          <CheckContainer>확인요청내역 없음</CheckContainer>

          <ProfileContainer>
            <ImgContainer></ImgContainer>
            <TextContainer>
              <ProfileName>숩 </ProfileName>
              <ProfileInfo> 감사합니다</ProfileInfo>
            </TextContainer>
          </ProfileContainer>
          <ContentContainer>
            {' '}
            <SlideButton />
          </ContentContainer>
          <SecondButtonContainer>
            <YesButton>
              <CheckButton />
              수락
            </YesButton>
            <NoButton>
              <XButton />
              거절
            </NoButton>
          </SecondButtonContainer>
        </BoxContainer>
      </Container>
    </div>
  );
};
