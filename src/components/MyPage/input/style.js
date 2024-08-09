import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.12rem;
  border: 0.0625rem solid var(--color-primary-light-active);
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.disabled ? 'var(--color-gray-2)' : 'var(--color-primary-light)'};

  input {
    border: none;
    outline: none;
    color: var(--color-primary-normal);
  }

  span {
    color: var(--color-caption);
  }
`;

export const Message = styled.span`
  &.danger {
    color: var(--color-danger);
  }
  &.success {
    color: var(--color-success);
  }
  &.warning {
    color: var(--color-warning);
  }
`;
