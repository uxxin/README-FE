import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { NoticeTitle } from "../NoticeTitle";
import axios from "axios";
import { PointerBtn } from "../../../assets/svgs/icons";
import { Link } from "react-router-dom";



export const ConfirmListMap = (props) =>{
//    const props = {title,start_date,end_date,content,room_image,pending_count};

    const roomId = 8;

  return(
   <BoxContainer>
        <Container>
            <ContentContainer>
                <TitleBox>
                    {props.title}
                </TitleBox>
                <DateBox>
                {props.start_date}-{props.end_date}
                </DateBox>
                <FrameBox>
                    <ContentBox>
                <ContentText>{props.content}</ContentText>    
                    </ContentBox>
                    {props.room_image>0 ?(
                        <>
                        <ImgBox src={props.room_image}/>
                        </>
                    ):(
                        <>
                         <ImgBox src='/src/assets/pngs/defaultprofileimage.png'/>
                        </>
                    )
                    }
                 
                </FrameBox>

                <BottonBox>
                    {props.pending_count>0 ?
                    (
                        <StyledLink to={`/notice/${roomId}/confirm-list/approval`}>
                    <BtnStyle><PointerBtn />{props.pending_count}</BtnStyle> 
                        </StyledLink>
                    ):(
                        <>
                        <PointerBtn/>요청없음
                        </>
                    )}
                </BottonBox>
            </ContentContainer>
        </Container>
        </BoxContainer>

  )

}

const BoxContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
    width:100%;
    height: 10.625rem; 
    padding: 0.625rem; 
    border-radius: 0.5rem;
    border: 0.020625rem 0 0 0; 
    background: var(--Primary-Light, #F4F9FF);
    box-sizing: border-box;
`;


const ContentContainer = styled.div`
    width: 100%;
    height: 9.375rem; 
`

const TitleBox = styled.div`
    width: 100%;
    height: 1.125rem; 
    font-size: 1.125rem; /* 18px */
    font-weight: 700;
    line-height: 1.125rem; /* 18px */
    letter-spacing: -0.02em;
    text-align: left;
    margin-bottom: 8px;
`;

const DateBox = styled.div`
    width: 100%;
    height:0.75rem;
    padding: 0 0 0.5rem 0; /* 8px */
    gap: 0.25rem; /* 4px */
    border: 0 0 0.020625rem 0; /* 0.33px */
    border-bottom: 0.020625rem solid var(--Primary-Normal, #509BF7); /* 0.33px */
    color: var(--Primary-Light,  #509BF7);
    font-size: 0.75rem; /* 12px */
    font-weight: 400;
    line-height: 0.75rem; /* 12px */
    letter-spacing: -0.02em;
    text-align: left;
    margin-bottom: 8px;
`;

const FrameBox = styled.div`
    width: 100%; 
    height: 3.75rem; 
    display: flex; 
    gap: 0.625rem; 
    align-items: center; 
`;

const ContentBox = styled.div`
    width: 100%; 
    height: 3.75rem; 
    gap: 0;
`;

const ContentText = styled.span`
 color: #888888;
    font-size: 1rem; /* 16px */
    font-weight: 500;
    line-height: 1.2rem; /* 19.2px */
    letter-spacing: -0.02em;
    text-align: left;

`


const ImgBox = styled.img`
    width: 3.75rem; 
    height: 3.75rem; 
    gap: 0;
    border-radius: 0.5rem; 
`;

const BottonBox = styled.button`
    margin-top: 0.5rem;
    display: flex;
   // width: 6.1875rem; 이거뭐지?
    height: 1.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
    border: none;
    border-radius: 0.5rem;
    background: var(--Primary-Normal, #509bf7);
    margin-left: auto;
    padding:6px 10px;
    color: white;
    box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* 상위 요소의 색상을 상속받도록 설정 */

  &:visited {
    color: inherit; /* 방문한 링크 색상 초기화 */
  }
`;




const BtnStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem; /* 아이콘과 텍스트 사이의 간격을 조절 */
    svg {
        vertical-align: middle; /* SVG의 기본 정렬을 중앙으로 조정 */
    }
`;

