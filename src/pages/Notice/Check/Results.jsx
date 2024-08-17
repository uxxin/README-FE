import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RightAnswer } from '../../../assets/svgs/right_answer.svg';
import { ReactComponent as WrongAnswer } from '../../../assets/svgs/wrong_answer.svg';
import { useSelector, useDispatch } from 'react-redux';
const Results = () => {
  const submitState = useSelector((state) => state.notice.submitState);
  const noticeRoomTitle = useSelector((state) => state.notice.noticeRoomTitle);
  const params = useParams();
  return (
    <Container>
      <Header>공지방 이름</Header>
      <AnswerContainer>
        <ResponseText>정답 입니다.</ResponseText>
        <RightAnswer />
      </AnswerContainer>
      <ButtonContainer>
        <GoMainButton>메인으로</GoMainButton>
        <ReReadNoticeButton>공지 다시 읽기</ReReadNoticeButton>
      </ButtonContainer>
    </Container>
  );
};

export default Results;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.06rem, 0;
  position: relative;
  gap: 6.25rem;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 2.75rem;
  padding: 0.8125rem 0rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--color-gray-7);
  text-align: center;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
  position: absolute;
  top: 0;
  box-sizing: border-box;
`;

const AnswerContainer = styled.div`
  display: flex;
  width: 7.9375rem;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: center;
`;

const ResponseText = styled.div`
  display: flex;
  width: 105%;
  color: var(--color-gray-7);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.035rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 1rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 3.75rem;
`;

const GoMainButton = styled.button`
  display: flex;
  width: 100%;
  height: 3.1875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border: none;
  border-radius: 0.5rem;
  background: var(--Primary-Normal, #509bf7);
  color: var(--Basic-White, var(--Basic-White, #fff));
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const ReReadNoticeButton = styled.button`
  display: flex;
  width: 100%;
  height: 3.1875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.5px solid var(--Primary-Normal, #509bf7);
  background: var(--Basic-White, #fff);
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;
