import React from 'react';
import styled from 'styled-components';

const STATUS_STYLES = {
  COMPLETE: {
    background: 'var(--system-success-light, #E3F2EF)',
    color: 'var(--system-success, var(--System-Success, #00A881))',
    text: '승인',
  },
  PENDING: {
    background: 'var(--GrayScale-gray2, #E9E9E9)',
    color: 'var(--Text-default, var(--Grayscale-Gray7, #222))',
    text: '검토중',
  },
  REJECT: {
    background: 'var(--system-danger-light, #FDD8DB)',
    color: 'var(--system-danger, var(--System-Danger, #F5535E))',
    text: '거절',
  },
  NOT_COMPLETE: {
    background: 'var(--GrayScale-gray2, #E9E9E9)',
    color: 'var(--Text-caption, var(--Grayscale-Gray5, #888))',
    text: '미제출',
  },
};

export const RequestStatusLabel = (submitState) => {
  const { background, color, text } = STATUS_STYLES[submitState.requestStatus];

  return (
    <Label background={background} color={color}>
      {text}
    </Label>
  );
};

const Label = styled.div`
  display: flex;
  width: 3.75rem;
  height: 1.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 62.4375rem;
  border: 2px solid ${({ background }) => background};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0175rem;
  text-align: center;
`;
