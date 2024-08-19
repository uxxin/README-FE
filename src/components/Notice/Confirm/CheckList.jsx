import React from 'react';
import styled from 'styled-components';
import { CheckListMap } from './CheckListMap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setRequiredListCount } from '../../../redux/CheckSlice';
import { getSubmitRequest } from '../../../api/Member/memberListCheck';
import { useParams } from 'react-router-dom';


export const CheckList = () => {
  const [checklist, setCheckList] = useState([]);
  const keysCount = useSelector((state) => state.check.count);
  const requiredList = useSelector((state) => state.check.requiredList);
  const acceptanceList = useSelector((state) => state.check.acceptanceList);
  const dispatch = useDispatch();
  const {roomId,postId} = useParams();



  useEffect(() => {
    const fetchCheckList = async () => {
      try {
        const response = await  getSubmitRequest(roomId,postId,"pending");  
        console.log('응답 데이터:', response.result); 
        const data = response.result
        console.log("이게 대기중인 리스트:",response.result);
          setCheckList(data);
          dispatch(
            setRequiredListCount({
              count: response.result.length,
              requiredList: response.result,
              acceptanceList: [],
            })
          )
      } catch (error) {
        console.error('Error fetching check list:', error);
      }
    };

    fetchCheckList();
  }, [dispatch, roomId,postId]);
  

  return (
    <div>
      <Container>
        <BoxContainer>
          {requiredList.length === 0 ? (
            <CheckContainer>확인요청내역 없음</CheckContainer>
          ) : (
            requiredList.map((item) => (
              <CheckListMap
                  key={item.submitId}
                  submitId = {item.submitId} 
                  images={item.images}
                  content = {item.content}
                  nickname={item.nickname}
                  profileImage={item.profileImage}
                  submitState={item.submitState}
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
