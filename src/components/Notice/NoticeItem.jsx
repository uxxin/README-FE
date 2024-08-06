import React from 'react';
import { NoticeTitle } from './NoticeTitle';
import styled from 'styled-components';

export const NoticeItem = ({ props, imgs, preview }) => {
  console.log(props);
  return (
    <Container>
      <NoticeTitle props={props} preview={preview} />
      <NoticeContent>{props.postBody}</NoticeContent>
      {props.postImage !== null ? <Thumbnail src={imgs[0]} /> : <></>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const NoticeContent = styled.div`
  align-self: stretch;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
`;

const Thumbnail = styled.img`
  height: 12.5rem;
  align-self: stretch;
`;
