import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { TypeCheck } from '../../../components/Notice/Write/TypeCheck';
import { Input } from '../../../components/Notice/Write/Input';
import { CustomBtn } from '../../../components/CustomBtn';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleInputChange = (newTitle, newContent) => {
    setTitle(newTitle);
    setContent(newContent);
  };

  return (
    <div>
      <Header props={{ title: '공지 작성', isSearch: false }} />
      <Container>
        <TypeCheck />
        <Input onInputChange={handleInputChange} />
        <CustomBtn
          props={{
            text: '다음',
            border: 'none',
            background: title && content ? '#509BF7' : '#BDBDBD',
            link: '/notice/write/mission',
          }}
        />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  gap: 1rem;
`;

export default Post;
