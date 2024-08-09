import styled from 'styled-components';

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100dvw;
  height: 2.75rem;
  background-color: #ffffff;

  button {
    display: flex;
    position: absolute;
    border: none;
    background-color: #ffffff;
  }

  .left {
    left: 0;
    margin-left: 0.625rem;
  }

  .right {
    right: 0;
    margin-right: 0.625rem;
  }
`;
