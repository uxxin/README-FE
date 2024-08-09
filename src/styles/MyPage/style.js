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

export const DefaultProfileEditContainer = styled(CommonContainer)`
  .image-email {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 0.625rem 0 1.25rem;

    .image {
      position: relative;

      button {
        border: none;
        background-color: var(--color-primary-normal);
        border-radius: 100%;
        display: flex;
        align-items: center;
        height: 2.25rem;
        width: 2.25rem;
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 0.5rem;
      }
      input {
        display: none;
      }
    }
    > span {
      color: var(--color-caption);
    }
  }

  .input-nickname {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 0 1rem;

    .input-wrap {
      display: flex;
      flex-direction: column;
      padding: 0.625rem 0;
      gap: 0.625rem;
    }

    .link {
      color: var(--color-caption);
    }
  }
`;

export const EditPasswordContainer = styled(CommonContainer)`
  section {
    padding: 0.625rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .divider {
      height: 0.0625rem;
      background-color: var(--color-primary-normal);
    }
  }
`;
