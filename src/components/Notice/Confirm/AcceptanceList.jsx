import React from 'react';
import styled from 'styled-components';
import {
  SlideButton,
  CheckButton,
  XButton,
} from '../../../assets/images/icons';
import { CheckListMap } from './CheckListMap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { check } from 'prettier';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setRequiredListCount } from '../../../redux/CheckSlice';
import { AcceptanceListMap } from './AcceptanceListMap';
import Main from '../../../pages/Notice/Main';

const Container = styled.div`
  width: 100%;
  padding: 0.625rem 1rem;
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



export const AcceptanceList = () => {
  const [checklist, setCheckList] = useState([]);
  const keysCount = useSelector((state) => state.check.count);
  const requiredList = useSelector((state) => state.check.requiredList);
  const acceptanceList = useSelector((state) => state.check.acceptanceList);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('/mock/CheckList.json')
      .then((response) => {
        const data = response.data;
        setCheckList(response.data);
        console.log('Fetched data:', response.data);
        console.log('Fetched data length:', data.length);
        dispatch(
          setRequiredListCount({
            count: data.length,
            requiredList: data,
            acceptanceList: [],
          }),
        );
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  console.log('리스트 값:', checklist);
  console.log('대기요청개수', keysCount);
  console.log('수락확인된 요청 리스트', acceptanceList);

  return (
    <div>
      <Container>
        <BoxContainer>
        
          {requiredList.length === 0 ? (
            <CheckContainer>확인요청내역 없음</CheckContainer>
          ) : (
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
  );
};
