import styled from 'styled-components';

export const FloatingButtonContainer = styled.section`
  position: fixed;
  bottom: 0rem;
  padding-bottom: 1.25rem;
  width: inherit;
  max-width: 429px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;

  button {
    width: calc(100% - 2rem);
    padding: 1rem 0;
    background-color: var(--color-primary-normal);
    color: var(--color-white);
    border-radius: 0.5rem;
    border: none;

    &.disabled {
      background-color: var(--color-disabled);
    }
  }
`;
