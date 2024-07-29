import React from "react";
import styled from "styled-components";
import { CustomBtn } from "../CustomBtn";

// 컨테이너 스타일
const Container = styled.div`
  padding: 0.625rem 0rem;
  gap: 3.75rem; /* 60px */
  box-sizing: border-box;
  display: flex;
  width: 26.875rem;
  padding: 0.625rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 26.875rem;
  padding: 0.625rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
`

// 이미지 컨테이너 스타일
const ImgContainer = styled.img`
  width: 18.75rem; /* 300px */
  height: 18.75rem; /* 300px */
  object-fit: cover;
  border-radius: 0.9375rem; /* 15px */
  box-sizing: border-box;
  display: block;
  margin: 0 auto;


`;

// 패널티 체크 스타일
const PaneltyCheck = styled.div`
  width: 18.75rem; /* 300px */
  display: block;
  margin: 0 auto;
  border-radius: 0.5rem; /* 8px */
  border: 0.02rem solid #C9E0FD; /* 0.33px */
  background: var(--Primary-Light, #F4F9FF);
  display: flex;
  width: 18.75rem;
  padding: 1.9375rem 0rem 1.875rem 0rem;
  justify-content: center;
  align-items: center;
`;





export const MemberProfile = () =>{
    return(
        <Container>
         <ImgContainer src="https://image.bugsm.co.kr/album/images/500/40752/4075248.jpg" alt="Profile" /> 
         <PaneltyCheck>패널티</PaneltyCheck>
         <CustomBtn
            props={{
              text: '확인',
              border: '0.5px solid #509BF7',
              background: '#FFFFFF',
              link: '/sign-up',
            }}
          />
        </Container>

    )
}