import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { NoticePreview } from '../NoticePreview';

const BoxContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ConfirmList = () => {
  const navigate = useNavigate();
  const { roomId, postId } = useParams();

  const handleClick = () => {
    navigate(`/notice/${roomId}/confirm-list/approval`);
  };

  const posts = [
    {
      postId: 3,
      postTitle: 'test3',
      postBody: 'testcontent3',
      postImage: 'url31.com',
      startDate: '24. 7. 27. 19:05',
      endDate: '24. 7. 27. 19:05',
      submitNum: 200,
    },
    {
      postId: 2,
      postTitle: 'test2',
      postBody: 'testcontent2',
      postImage: null,
      startDate: '24. 7. 27. 19:01',
      endDate: '24. 7. 27. 19:01',
      submitNum: 0,
    },
    {
      postId: 1,
      postTitle: 'TEST',
      postBody: 'TESTCONTENT',
      postImage: 'url11.com',
      startDate: '24. 7. 25. 04:24',
      endDate: '24. 7. 25. 05:24',
      submitNum: 6,
    },
  ];
  const btnText = posts.submitNum > 0 ? `${posts.submitNum}건` : '요청 없음';

  return (
    <BoxContainer>
      {posts.map((post) => (
        <NoticePreview
          props={post}
          btnText={btnText}
          preview={true}
          onClick={handleClick}
        />
      ))}
    </BoxContainer>
  );
};
