import React, { useEffect } from 'react';
import styled from 'styled-components';

export const UnconfirmedPeopleItem = ({ props }) => {
  return (
    <Container>
      {props.profile_image !== null ? (
        <Thumbnail src="/src/assets/images/defaultprofileimage.png" />
      ) : (
        <Thumbnail src={props.profile_image} />
      )}
      <UserName>{props.nickname}</UserName>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 3.125rem;
  padding: 0rem 0.5rem;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
  border-bottom: 0.5px solid var(--Grayscale-Gray4, #bdbdbd);

  background: var(--Basic-White, #fff);
`;

const Thumbnail = styled.img`
  display: flex;
  width: 1.875rem;
  height: 1.875rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
const UserName = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;
  /* Pretendard/regular/16 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;
