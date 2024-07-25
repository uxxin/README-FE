import React from "react";
import styled from "styled-components";
import { CustomBtn } from "../CustomBtn";

// 컨테이너 스타일
const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 26.875rem; /* 430px */
  min-height: 20rem; /* 320px */
  top: 6.5rem; /* 104px */
  gap: 3.75rem; /* 60px */
  box-sizing: border-box;
`;

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
  height: 6.25rem; /* 100px */
  top: 30.0625rem; /* 481px */
  left: 4.0625rem; /* 65px */
  display: block;
  margin: 0 auto;
  padding: 1.9375rem 0; /* 31px 0px 30px 0px */
  border-radius: 0.5rem; /* 8px */
  border: 0.02rem solid #C9E0FD; /* 0.33px */
  margin-top: 10%;
  margin-bottom: 10%;
  background: var(--Primary-Light, #F4F9FF);
`;

// 체크 버튼 스타일
const CheckBtn = styled.button`
  width: 24.875rem; /* 398px */
  height: 3.1875rem; /* 51px */
  padding: 0;
  border-radius: 0.5rem; /* 8px */
  border: none;
  box-sizing: border-box;
  background: #509BF7;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1.25rem; /* 기본 위치는 컨테이너 하단에서 20px 위 */
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1.25rem;
  position: absolute;

  /* 축소된 화면에서 고정 위치 */
  @media (max-width: 25rem) { /* 400px */
    position: fixed;
    bottom: 1rem; /* 화면 하단에서 10% 위에 위치 */
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.25rem;
    box-sizing: border-box;
  }
`;

// 버튼 텍스트 스타일
const BtnText = styled.span`
  display: flex;
  justify-content: center;
  width: auto;
  height: 1.1875rem; /* 19px */
  font-family: Pretendard;
  font-size: 1rem; /* 16px */
  font-weight: 500;
  line-height: 1.2rem; /* 19.2px */
  letter-spacing: -0.02em;
  text-align: left;
  color: white;
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