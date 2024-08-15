import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UnconfirmedPeopleItem } from './UnconfirmedPeopleItem';
import { ReactComponent as SmallIcon } from '../../../assets/svgs/small_icon.svg';
import { getUnconfirmedPeople } from '../../../api/Notice/noticeMain';

export const UnconfirmedPeopleModal = ({
  postId,
  unconfirmedCount,
  onClose,
}) => {
  const [peopleData, setPeopleData] = useState([]);
  useEffect(() => {
    const unconfirmedPeopleData = async () => {
      try {
        const response = await getUnconfirmedPeople(postId);
        setPeopleData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    unconfirmedPeopleData();
  }, []);
  return (
    <Container>
      <Modal>
        <Header>
          <LeftContainer>
            <StyledSmallIcon />
            {unconfirmedCount}
          </LeftContainer>
          <RightContainer onClick={onClose}>닫기</RightContainer>
        </Header>
        <ItemsContainer>
          {peopleData.map((people) => (
            <UnconfirmedPeopleItem props={people} />
          ))}
        </ItemsContainer>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  max-width: 429px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Background-dimmed60, rgba(34, 34, 34, 0.6));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Modal = styled.div`
  width: 80%;
  height: 70%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;

  background: var(--Basic-White, #fff);
`;

const Header = styled.div`
  display: flex;
  padding: 0.5rem 0.625rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: var(--Primary-Normal, #509bf7);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  margin-top: -0.33px;
  color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
  /* Pretendard/regular/14 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.0175rem;
`;
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
const RightContainer = styled.div`
  color: var(--Basic-White, var(--Basic-White, #fff));
  /* Pretendard/bold/14 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 0.875rem */
  letter-spacing: -0.0175rem;
  cursor: pointer;
`;

const StyledSmallIcon = styled(SmallIcon)`
  width: 0.75rem;
  height: 0.75rem;
`;

const ItemsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
