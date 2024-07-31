import React from "react";
import styled from "styled-components";
import { CustomBtn } from "../CustomBtn";

const TotalContainer = styled.div`
  padding-right: 1rem;
`

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const AddContainer = styled.div`
  flex-direction: column;
  width: 24.875rem;
  margin: 0 auto;
  margin-top: 0.625rem;
  max-width: 24.875rem;
  height: auto;
  border-radius: 0.5rem;
  border: 0.02rem solid #509bf7;
  background: #f4f9ff;
  box-sizing: border-box;

`;

const ContainerHead = styled.div`
  width: 24.875rem;
  height: 2rem;
  padding: 0.5rem 0.8125rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: #509bf7;
  color: #ffffff;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  width: 23.625rem;
  height: 9.875rem;
  margin-top: 11.25rem;
  margin-bottom: 4px;
  color: black;
  box-sizing: border-box;
  padding: 0 0.8125rem;
  bottom: 4px;
  
`;

const TextContainer = styled.div`
  width: 100%;
  height: 2.1875rem;
  color: black;
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  white-space: nowrap;
`;

const TextColor = styled.span`
  width: 3.75rem;
  height: 1rem;
  gap: 0;
  opacity: 1;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: -0.02em;
  text-align: left;
  color: #3c74b9;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;
  width: 23.625rem; 
  align-items: center;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  box-sizing: border-box; 
`;


export const MemberInvite = () => {
  return (
    <TotalContainer>
    <Container>
      <AddContainer>
        <ContainerHead>리드미</ContainerHead>
        <InfoContainer>
          <TextContainer><TextColor>초대 url</TextColor></TextContainer>
          <TextContainer><TextColor>공지방 이름</TextColor></TextContainer>
          <TextContainer><TextColor>비밀번호</TextColor></TextContainer>
          <TextContainer><TextColor>대표자</TextColor></TextContainer>
        </InfoContainer>
      </AddContainer>
           <ButtonWrapper>
          <CustomBtn
            props={{
              text: '멤버목록으로 이동',
              border: 'none',
              background: '#509BF7',
              link: '/sign-in',
            }}
          />
   
          <CustomBtn
            props={{
              text: '공지방으로 이동',
              border: '0.5px solid #509BF7',
              background: '#FFFFFF',
              link: '/sign-up',
            }}
          />
       
      </ButtonWrapper>
    </Container>
    </TotalContainer>
  );
};