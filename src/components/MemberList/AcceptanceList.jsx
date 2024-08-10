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
import { Navigate, useNavigate } from "react-router-dom";
import {AcceptanceListMap} from './AcceptanceListMap'



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

const BarLeftContainer = styled.button`
    border-radius: 0.5rem 0 0 0.5rem; 
    border: 1px solid #BDBDBD;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    color:  #509BF7;
    display: flex;
    padding: 0.75rem 4.125rem;
    align-items: center;
    gap: 0.125rem;
    flex: 1 0 0;
    align-self: stretch;
    background: white;
`;

const BarRightContainer = styled.button`
    display: flex;
    color: white;
    padding: 0.75rem 4.125rem;
    justify-content: center;
    align-items: center;
    gap: 0.125rem;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    border: 0.33px solid #BDBDBD;
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

export const AcceptanceList = () =>{
    const [checklist,setCheckList] = useState([]);
    const keysCount = useSelector((state) => state.check.count); 
    const requiredList = useSelector((state) => state.check.requiredList); 
    const acceptanceList = useSelector((state) => state.check.acceptanceList);
    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    const handleWaitingList = () =>{
        navigate("/member/checklist")
    }


    
    useEffect(() => {
        axios
            .get('/mock/CheckList.json')
            .then((response) => {
                const data = response.data;
                setCheckList(response.data);
                console.log('Fetched data:', response.data);
                console.log('Fetched data length:', data.length);
                dispatch(setRequiredListCount({
                    count: data.length,
                    requiredList: data,
                    acceptanceList: []
                }));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [dispatch]);

    console.log("리스트 값:",checklist)
    console.log("대기요청개수",keysCount)
    console.log("수락확인된 요청 리스트",acceptanceList)
 



    return(
        <div>
             <Container>
             <BoxContainer>    
          
                <MissionTogle>
                <BarLeftContainer onClick={handleWaitingList}>대기({keysCount})</BarLeftContainer>
                <BarRightContainer >승인완료</BarRightContainer>
                </MissionTogle>
                {requiredList.length===0?(
            <CheckContainer>확인요청내역 없음</CheckContainer>):(
                    requiredList.map((item) => (
                        <AcceptanceListMap
                            key={item.submit_id} 
                            submit_id={item.submit_id}
                            user_info={item.user_info}
                            content={item.content}
                            image_URL={item.image_URL}
                        />
                    ))
             )}
            </BoxContainer>
            </Container>
      

        </div>
    )
}