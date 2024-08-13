import React, { useState } from 'react';
import styled from 'styled-components';
import TypeCheck from '../../../components/Notice/Write/TypeCheck';
import { PostInput } from '../../../components/Notice/Write/PostInput';
import { OneButton } from '../../../components/Notice/Write/StepButton';

const Post = ({ onNextStep, postType, postTitle, postContent }) => {
  const [type, setType] = useState(postType || 'Quiz');
  const [title, setTitle] = useState(postTitle || '');
  const [content, setContent] = useState(postContent || '');
  const [imageURLs, setImageURLs] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleTypeCheck = (selectedType) => {
    setType(selectedType);
  };

  const handleInputChange = (newTitle, newContent) => {
    setTitle(newTitle);
    setContent(newContent);
  };

  const handleNextClick = () => {
    onNextStep(
      type,
      title,
      content,
      imageURLs,
      startDate,
      endDate,
      question,
      answer,
    );
  };

  return (
    <Container>
      <TypeCheck onTypeChange={handleTypeCheck} postType={postType} />
      <PostInput
        onInputChange={handleInputChange}
        postTitle={postTitle}
        postContent={postContent}
      />
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
