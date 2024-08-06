import React from 'react';

const Solve = ({ postType }) => {
  return (
    <div>{postType === 'Mission' ? <div>Mission</div> : <div>Quiz</div>}</div>
  );
};

export default Solve;
