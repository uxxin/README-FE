import React from 'react';
import styled from 'styled-components';
import { NoticeTitle } from './NoticeTitle';
import { Link } from 'react-router-dom';
import NoticeCheck from '../../assets/svgs/notice_check.svg';

export const NoticePreview = ({
  props,
  isManager,
  roomId,
  btnText,
  preview,
  onClick,
}) => {
  return (
    <Container>
      <NoticeTitle {...props} isManager={isManager} preview={preview} />
      <StyledLink to={`/notice/${roomId}/details`}>
        <BottomContainer>
          <NoticeContent>{props.postBody}</NoticeContent>
          {props.postImage !== null ? (
            <Thumbnail src={props.postImage} />
          ) : (
            <Thumbnail src="/src/assets/pngs/defaultprofileimage.png" />
          )}
        </BottomContainer>
      </StyledLink>
      {btnText && (
        <NoticeCheckButton onClick={onClick}>
          <NoticeCheckIcon src={NoticeCheck} /> {btnText}
        </NoticeCheckButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
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

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  margin-top: 0.5rem;
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

const NoticeCheckButton = styled.button`
  display: flex;
  width: 6.1875rem;
  height: 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border: none;
  border-radius: 0.5rem;
  background: var(--Primary-Normal, #509bf7);
  color: var(--Basic-White, var(--Basic-White, #fff));
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
  margin-left: auto;
`;

const NoticeCheckIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
