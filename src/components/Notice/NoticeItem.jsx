import React, { useEffect, useState } from 'react';
import { NoticeTitle } from './NoticeTitle';
import styled from 'styled-components';
import NoticeCheck from '../../assets/svgs/notice_check.svg';
import { useNavigate, useParams } from 'react-router-dom';

export const NoticeItem = ({ props, imgs, preview, isManager, chkActive }) => {
  const navigate = useNavigate();
  const { roomId, postId } = useParams();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (
      !chkActive ||
      props?.submitState === 'COMPLETE' ||
      props?.submitState === 'PENDING'
    ) {
      setDisabled(true);
    }
  }, [chkActive, props?.submitState]);

  return (
    <Container>
      <NoticeTitle
        {...props}
        preview={preview}
        isManager={isManager}
        roomId={roomId}
      />
      <NoticeContent>{props?.postBody}</NoticeContent>
      {imgs && imgs.map((img) => <Thumbnail key={img} src={img} />)}
      {!preview && !isManager && (
        <NoticeCheckButton
          disabled={disabled}
          onClick={() => navigate(`/notice/${roomId}/${postId}/solve`)}
        >
          <NoticeCheckIcon src={NoticeCheck} /> 공지 확인
        </NoticeCheckButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
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
  line-height: 120%;
  letter-spacing: -0.02rem;
  white-space: normal;
  overflow-wrap: break-word;
`;

const Thumbnail = styled.img`
  height: 12.5rem;
  align-self: stretch;
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
  white-space: nowrap;

  &:disabled {
    background: #bdbdbd;
  }
`;

const NoticeCheckIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;
