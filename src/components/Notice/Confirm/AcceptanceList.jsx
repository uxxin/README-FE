import React from 'react';
import styled from 'styled-components';
import { SlideButton, CheckButton, XButton } from '../../../assets/svgs/icons';
import { CheckListMap } from './CheckListMap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { check } from 'prettier';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setRequiredListCount } from '../../../redux/CheckSlice';
import { AcceptanceListMap } from './AcceptanceListMap';
import Main from '../../../pages/Notice/Main';
import { getSubmitList } from '../../../api/Member/memberListCheck';
import { useParams } from 'react-router-dom';


export const AcceptanceList = () => {
  const [checklist, setCheckList] = useState([]);
  const keysCount = useSelector((state) => state.check.count);
  const requiredList = useSelector((state) => state.check.requiredList);
  const acceptanceList = useSelector((state) => state.check.acceptanceList);

  

//  const {roomId} = useParams();
  const roomId =8;

  const dispatch = useDispatch();

  console.log("어쎕리스트의 키카운트 제발넘어와라:", keysCount)

  
  useEffect(() => {
    const fetchCheckList = async () => {
      try {
        const response = await getSubmitList(roomId);  
     
        console.log('응답 데이터:', response.result); 
        const data = response.result.completeStates
        console.log("이게 필요한 데이터야",data);
          setCheckList(data);
          dispatch(
            setRequiredListCount({
              count: response.result.pendingStates.length,
              requiredList: response.result.completeStates,
              acceptanceList: [],
            })
          )
      } catch (error) {
        console.error('Error fetching check list:', error);
      }
    };

    fetchCheckList();
  }, [dispatch, roomId]);



  console.log('리스트 값:', checklist);
 //console.log('대기요청개수', keysCount);
  console.log('수락확인된 요청 리스트', acceptanceList);

  return (
    <div>
      <Container>
        <BoxContainer>
        
          {requiredList.length === 0 ? (
            <CheckContainer>승인완료된 요청이 없습니다</CheckContainer>
          ) : (
            requiredList.map((item) => (
              
              <AcceptanceListMap
                key={item.submit_id}
                submit_id={item.submit_id}
                nickname={item.nickname}
                user_info={item.user_info}
                content={item.content}
                image_URL={item.image_URL}
              />
             
            ))
          )}
         
        </BoxContainer>
      </Container>
    </div>
  );
};



const Container = styled.div`
  width: 100%;
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`;

const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  flex-grow: 1; 
  flex-shrink: 1; 
  height: 4.188rem;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

