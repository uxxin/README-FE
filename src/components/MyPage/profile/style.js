import styled from 'styled-components';

export const ProfileContainer = styled.section`
  margin: 0 1rem;
  padding: 0.625rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.0625rem solid var(--color-primary-light-active);

  .profile {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #888;

    .profile-image {
      width: 3.375rem;
      height: 3.375rem;
    }

    .nickname {
      color: #000;
    }
  }

  button {
    border: none;
    background-color: #ffffff;
  }
`;
