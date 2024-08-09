import React from "react";
import styled from "styled-components";
import {SlideButton, CheckButton, XButton } from "../../assets/images/icons";
import { CheckListMap } from "./CheckListMap";
import { useState,useEffect } from "react";
import axios from "axios";
import { check } from "prettier";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setRequiredListCount } from "../../redux/CheckSlice";


const Container = styled.div`
    display: flex;
    width: 26.75rem;
    padding-right: 1rem;
    padding: 0.625rem 1rem;
    padding-right: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
`

const TotalContainer = styled.div`
    display: flex;
    width: 26.75rem;
    padding: 0.625rem 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
`


const MissionTogle = styled.div`
    display: flex;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 0.5rem;
`

const BarLeftContainer = styled.div`
    border-radius: 0.5rem 0 0 0.5rem; 
    border: 1px solid #BDBDBD;
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
    background:white;
    color: #509BF7;;
    
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
    background: var(--Primary-normal, #509BF7);
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
    border: 0.33px solid var(--Primary-light-active, #C9E0FD);
    background: var(--Primary-light, #F4F9FF);
    
`

const BoxContainer = styled.div`
    display: flex;
    padding-right: 2rem;
    padding-bottom: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 0.33px solid var(--Primary-light-active, #C9E0FD);
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1 0 0;
    align-self: stretch;
`
const TextContainer = styled.div`
      display: flex;
    flex-direction: column;
    justify-content: center;
`

const ProfileName = styled.span`
    align-self: stretch;
    color: var(--Text-default, var(--Grayscale-Gray7, #222));

    /* Pretendard/medium/16 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 1.2rem */
    letter-spacing: -0.02rem;
`

const ProfileInfo = styled.span`
    align-self: stretch;
    color: var(--Text-caption, var(--Grayscale-Gray5, #888));

    /* Pretendard/regular/12 */
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 0.75rem */
    letter-spacing: -0.015rem;
`

const ImgContainer = styled.img`
    display: flex;
    width: 2.25rem;
    height: 2.25rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.75rem;
`

const ContentContainer = styled.div`
    width: 24.875rem;
    height: 12.5rem;
    justify-content: flex-end; //슬라이드버튼을 오른쪽 끝에 오게 만든다.
    align-items: center; 
    display: flex;
`
const SecondButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 0.5rem;
    border: 0.33px solid var(--Primary-Light-active, #C9E0FD);
`

const YesButton = styled.button`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-right: 0.33px solid var(--Primary-light-active, #C9E0FD);
    background: var(--Primary-light, #F4F9FF);
    border: 0.33px solid #BDBDBD; /* 전체 경계선을 회색으로 설정 */
    border-radius:  0.5rem 0rem 0rem 0.5rem;

    
`

const NoButton = styled.button`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    border-right: 0.33px solid var(--Primary-light-active, #C9E0FD);
    background: var(--Primary-light, #F4F9FF);
    border: 0.33px solid #BDBDBD; /* 전체 경계선을 회색으로 설정 */
    border-radius: 0rem 0.5rem 0.5rem 0rem;
`


export const AcceptanceList = () =>{
    const [checklist,setCheckList] = useState([]);
    const keysCount = useSelector((state) => state.check.count); 
    const dispatch = useDispatch();
    const acceptedList = useSelector((state)=>state.check.acceptedList)

    console.log("승인목록 리스트",acceptedList);
    
    return(
        <div>
             <Container>
             <BoxContainer>    
          
                <MissionTogle>
                <BarLeftContainer>대기({keysCount})</BarLeftContainer>
                <BarRightContainer>승인완료</BarRightContainer>
                </MissionTogle>
                <h2>수락된 항목 목록</h2>
            {acceptedList.length === 0 ? (
                <p>수락된 항목이 없습니다.</p>
            ) : (
                acceptedList.map(item => (
                    <div key={item.submit_id}>
                        <p>{item.user_info.nickname}: {item.content}</p>
                    </div>
                ))
            )}
            </BoxContainer>
            </Container>
      

        </div>
    )
}