import React from "react";
import styled from "styled-components";
import { PointerBtn } from "../../assets/images/icons";
import { Navigate, useNavigate } from "react-router-dom";

const BoxContainer = styled.div`
    display: flex;
    padding: 0.625rem 1rem 6.25rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const Container = styled.div`
    display: flex;
    width: 23.4125rem;
    padding: 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.5rem;
    border: 0.33px solid var(--Primary-Light-active, #C9E0FD);
    background: var(--Primary-Light, #F4F9FF);
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
`

const Title = styled.span`
    align-self: stretch;
    color: var(--Text-default, var(--Grayscale-Gray7, #222));
    /* Pretendard/bold/18 */
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 1.125rem */
    letter-spacing: -0.0225rem;
`

const DueDate = styled.span`
    display: flex;
    padding-bottom: 0.5rem;
    align-items: center;
    gap: 0.25rem;
    align-self: stretch;
    border-bottom: 0.33px solid var(--Primary-Normal, #509BF7);
    color: #509BF7;

`
const ContentFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
`

const Content = styled.span`
    height: 3.75rem;
    flex: 1 0 0;overflow: hidden;
    color: var(--Text-caption, var(--Grayscale-Gray5, #888));
    text-overflow: ellipsis;
    white-space: nowrap;

    /* Pretendard/medium/16 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 1.2rem */
    letter-spacing: -0.02rem;
`

const ContentImg = styled.img`
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 0.5rem;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`

const MiniBox = styled.button`
    width: Fill (64px)px;
    height: Hug (28px)px;
    padding: 6px 10px 6px 10px;
    gap: 8px;
    border-radius: 8px;
    border: none;
    opacity: 0px;
    background: #509BF7;
    margin-left: auto;
`

const TextColor = styled.span`
    color: var(--Basic-White, var(--Basic-White, #FFF));
margin-left: 0.5rem;
/* Pretendard/regular/16 */
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 1rem */
letter-spacing: -0.02rem;
`



export const NoticeList = () =>{

    const navigate =  useNavigate();

    const handleEnterPost = () =>{
        navigate("/member/checklist")
    }

    return(    
        <BoxContainer>
    <Container>
        <ContentContainer>
            <Title>공지글의 예시제목</Title>
            <DueDate>yy.MM.dd HH:MM</DueDate>
            <ContentFrame>
                <Content>
                    공지글의 예시내용입니다.
                </Content>
                <ContentImg></ContentImg>
            </ContentFrame>
            <MiniBox onClick={handleEnterPost} ><PointerBtn/><TextColor>5건</TextColor></MiniBox>
        </ContentContainer>
    
    </Container>
    </BoxContainer>
    )
}