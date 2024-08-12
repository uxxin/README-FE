import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  padding: 1rem 0;
  align-self: stretch;
  align-items: center;
  width: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};

  &.small {
    width: 25%;
  }
`;
