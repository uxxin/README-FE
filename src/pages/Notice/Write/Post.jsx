import React from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { TypeCheck } from '../../../components/Notice/Write/TypeCheck';
import { Input } from '../../../components/Notice/Write/Input';

const Post = () => {
  return (
    <div>
      <Header props={{ title: '공지 작성', isSearch: false }} />
      <Container>
        <TypeCheck />
        <Input />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export default Post;
