import React from 'react';
import styled from 'styled-components';
import { NoticeTitle } from './NoticeTitle';
export const NoticePreview = ({ props }) => {
  return (
    <>
      <Container>
        <NoticeTitle props={props} />
        <NoticeContainer>
          <NoticeContent>{props.postBody}</NoticeContent>
          {props.postImage !== null ? (
            <Thumbnail src={props.postImage} />
          ) : (
            <></>
          )}
        </NoticeContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Blue-light-active, #c9e0fd);
  background: var(--Blue-light, #f4f9ff);
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;

const NoticeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const NoticeContent = styled.div`
  height: 3.75rem;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const Thumbnail = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
`;
