import React from 'react';
import styled from 'styled-components';

const ProgressBar = ({ progress }) => {
  return (
    <ProgressContainer>
      <Progress progress={progress} />
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  //margin-bottom: 30px;
`;

const Progress = styled.div`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: #509BF7;
`;

export default ProgressBar;
