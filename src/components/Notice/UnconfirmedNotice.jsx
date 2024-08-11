import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SpinButton } from '../../assets/images/spin_icon.svg';
import { UnconfirmedNoticeItem } from '../Notice/UnconfirmedNoticeItem';
import { useSelector } from 'react-redux';
import { setIsRotated } from '../../redux/Notice/NoticeActions';

export const UnconfirmedNotice = ({ dispatch, postData }) => {
  const isRotated = useSelector((state) => state.notice.isRotated);
  const [maxHeight, setMaxHeight] = useState('0');
  const containerRef = useRef(null);

  const handleButtonClick = () => {
    dispatch(setIsRotated(!isRotated));
  };

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.scrollHeight;
      setMaxHeight(isRotated ? `${height}px` : '0');
    }
  }, [isRotated]);

  return (
    <Container>
      <DropDown onClick={handleButtonClick}>
        <StyledSpinButton rotated={isRotated} />
        미확인 공지
      </DropDown>
      <UnconfirmedNoticeContainer
        ref={containerRef}
        isRotated={isRotated}
        maxHeight={maxHeight}
      >
        {postData.length > 0 ? (
          postData.map((post) => <UnconfirmedNoticeItem postData={post} />)
        ) : (
          <AllNoticeConfirmed>모든 공지를 확인했습니다 ☺️</AllNoticeConfirmed>
        )}
      </UnconfirmedNoticeContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const DropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-align: center;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
  cursor: pointer;
`;

const StyledSpinButton = styled(SpinButton)`
  width: 0.75rem;
  height: 0.75rem;
  transition: transform 0.3s;
  transform: ${({ rotated }) => (rotated ? 'rotate(90deg)' : 'rotate(0deg)')};
  cursor: pointer;
`;

const UnconfirmedNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  max-height: ${({ isRotated, maxHeight }) => (isRotated ? maxHeight : '0')};
  opacity: ${({ isRotated }) => (isRotated ? 1 : 0)};
  overflow: hidden;
  transition:
    max-height 0.5s ease,
    opacity 0.3s ease;
`;

const AllNoticeConfirmed = styled.div`
  display: flex;
  padding: 0.75rem 0rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  overflow: hidden;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.0175rem;
  border-bottom: 0.33px solid var(--GrayScale-gray5, #888);
`;
