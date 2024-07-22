import React from 'react';
import styled from 'styled-components';

export const Input = () => {
  return (
    <div>
      <Container>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          maxLength={20}
        />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 18.75rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.5px solid var(--Primary-normal, #509bf7);
`;

const TitleInput = styled.div`
  display: flex;
  padding: 0.75rem 1.125rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  background: var(--Primary-Normal, #509bf7);
`;
