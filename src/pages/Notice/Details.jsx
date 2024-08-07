import React from 'react';
import { NoticeItem } from '../../components/Notice/NoticeItem';
import styled from 'styled-components';
import NoticeCheck from '../../assets/images/notice_check.svg';

const NoticeDetails = () => {
  const isManager = true;
  const post = [
    {
      postId: 1,
      postType: 'Quiz',
      postTitle: 'TEST',
      postBody: 'TESTCONTENT',
      startDate: '24. 7. 25. 04:24',
      endDate: '24. 7. 25. 05:24',
      commentCount: 5,
      submitState: 'COMPLETE',
    },
  ];
  const imageURLs = ['url11.com', 'url12.com'];

  return (
    <Container>
      {post.length > 0 ? (
        post.map((data) => (
          <NoticeItem props={data} key={data.postId} imgs={imageURLs} />
        ))
      ) : (
        <></>
      )}

      <NoticeCheckButton>
        <NoticeCheckIcon src={NoticeCheck} /> 공지 확인
      </NoticeCheckButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const NoticeCheckButton = styled.div`
  display: flex;
  width: 6.1875rem;
  height: 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--Primary-Normal, #509bf7);
  color: var(--Basic-White, var(--Basic-White, #fff));
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
  margin-left: auto;
`;

const NoticeCheckIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;

export default NoticeDetails;
