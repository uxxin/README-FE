import React, { useState } from 'react';
import styled from 'styled-components';
import TypeCheck from '../../../components/Notice/Write/TypeCheck';
import { PostInput } from '../../../components/Notice/Write/PostInput';
import { OneButton } from '../../../components/Notice/Write/StepButton';

const Post = ({ onStepChange }) => {
  const [type, setType] = useState('Quiz');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTypeCheck = (selectedType) => {
    setType(selectedType);
  };

  const handleInputChange = (newTitle, newContent) => {
    setTitle(newTitle);
    setContent(newContent);
  };

  const handleNextClick = () => {
    onStepChange(type, title, content);
  };

  return (
    <Container>
      <TypeCheck onTypeChange={handleTypeCheck} />
      <PostInput onInputChange={handleInputChange} />
      <OneButton
        props={{
          text: '다음',
          border: 'none',
          background: title && content ? '#509BF7' : '#BDBDBD',
        }}
        onStepChange={handleNextClick}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Post;
