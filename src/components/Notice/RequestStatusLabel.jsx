import React from 'react';
import styled from 'styled-components';

const STATUS_STYLES = {
  complete: {
    background: 'var(--system-success-light, #E3F2EF)',
    color: 'var(--system-success, var(--System-Success, #00A881))',
    text: '승인',
  },
  pending: {
    background: '#e9e9e9',
    color: '#999999',
    text: '검토중',
  },
  reject: {
    background: 'var(--system-danger-light, #FDD8DB)',
    color: 'var(--system-danger, var(--System-Danger, #F5535E))',
    text: '거절',
  },
  notComplete: {
    background: 'var(--GrayScale-gray2, #E9E9E9)',
    color: 'var(--Text-caption, var(--Grayscale-Gray5, #888))',
    text: '미제출',
  },
};

export const RequestStatusLabel = ({ requestStatus }) => {
  const { background, color, text } =
    STATUS_STYLES[requestStatus] || STATUS_STYLES.pending;

  return (
    <Label background={background} color={color}>
      {text}
    </Label>
  );
};

const Label = styled.div`
  display: flex;
  width: 100%;
  padding: 0.375rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 62.4375rem;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0175rem;
`;
