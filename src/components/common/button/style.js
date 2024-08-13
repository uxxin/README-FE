import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  padding: 1rem 0;
  align-self: stretch;
  align-items: center;
  width: calc(100% - 2rem);
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};

  &.small {
    width: 20%;
  }
`;
