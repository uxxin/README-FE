import React from 'react';
import { Header } from '../../components/Header';
import CustomInput from '../../components/CustomInput';
import { CustomBtn } from '../../components/CustomBtn';
import styled from 'styled-components';

const SignUp = () => {
  return (
    <SignUpContainer>
      <Header props={{ title: '회원가입', isSearch: false }} />
      <ProgressBar />
      {/*<Container>*/}
      {/*  <TextMySelf>이름을 입력해주세요</TextMySelf>*/}
      {/*  <CustomInput placeholder="입력하세요" />*/}
      {/*</Container>*/}
      <CustomBtn props={{
        text: '확인',
        border: 'none',
        // background: '#BDBDBD',
        link: '/confirmation' // 이 부분은 확인 버튼을 클릭했을 때 이동할 페이지 경로로 변경해주세요.
      }} />
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const TextMySelf = styled.div`
//   font-family: Pretendard;
//   font-size: 24px;
//   font-weight: 700;
// `;
//
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 60px;
// `;

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #509BF7;
`;

export default SignUp;