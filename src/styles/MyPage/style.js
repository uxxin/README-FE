import styled from 'styled-components';

const CommonContainer = styled.main`
  padding: 2.75rem 0;
`;

export const MypageContainer = styled(CommonContainer)`
  .divider {
    height: 0.1875rem;
    background-color: var(--color-primary-normal);
  }

  .profiles {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: var(--color-caption);
    }

    .message {
      color: #000;
      border: 0.0625rem solid var(--color-primary-light-active);
      border-radius: 0.5rem;
      background-color: var(--color-primary-light);
      display: flex;
      justify-content: center;
      padding: 1.5rem 0;
    }

    .wrapper {
      margin: 0 -1rem;
    }
  }
`;
