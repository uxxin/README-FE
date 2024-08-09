import styled from 'styled-components';

export const ImageStyled = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
  border-radius: 0.75rem;
  width: 8.75rem;
  height: 8.75rem;
`;
