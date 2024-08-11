import React from 'react';
import styled from 'styled-components';
import { CheckListMap } from './CheckListMap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setRequiredListCount } from '../../../redux/CheckSlice';

const Container = styled.div`
  display: flex;
  /* width: 26.75rem; */
  /* padding-right: 1rem; */
  /* padding: 0.625rem 1rem; */
  /* padding-right: 1rem; */
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const TotalContainer = styled.div`
  display: flex;
  /* width: 26.75rem; */
  /* padding: 0.625rem 1rem; */
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const CheckContainer = styled.div`
  display: flex;
  /* width: 22rem; */
  /* padding: 1.5rem 1.25rem; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
`;

const BoxContainer = styled.div`
  display: flex;
  /* padding-right: 2rem;
  padding-bottom: 1rem; */
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-bottom: 0.33px solid var(--Primary-light-active, #c9e0fd);
`;

export const CheckList = () => {
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
              <CheckListMap
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
