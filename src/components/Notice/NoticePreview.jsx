import React from 'react';
import styled from 'styled-components';
import { NoticeTitle } from './NoticeTitle';
import { Link } from 'react-router-dom';
export const NoticePreview = ({ props, isManager }) => {
  const previewProps = { ...props, isManager: isManager };
  return (
    <>
      <Container>
        <NoticeTitle props={previewProps} />
        <StyledLink to="details">
          <BottomContainer>
            <NoticeContent>{props.postBody}</NoticeContent>
            {props.postImage !== null ? (
              <Thumbnail src="/src/assets/images/defaultprofileimage.png" />
            ) : (
              <Thumbnail src={props.postImage} />
            )}
          </BottomContainer>
        </StyledLink>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Blue-light-active, #c9e0fd);
  background: var(--Blue-light, #f4f9ff);
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
`;

const BottomContainer = styled.div`
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
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const Thumbnail = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
`;

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;
