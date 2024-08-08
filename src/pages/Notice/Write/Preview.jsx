import React from 'react';
import { NoticeItem } from '../../../components/Notice/NoticeItem';
import { Header } from '../../../components/Header';
import styled from 'styled-components';
import { QuestionPreview } from '../../../components/Notice/Write/QuestionPreview';
import { TwoButton } from '../../../components/Notice/Write/TwoButton';

const Preview = () => {
  const isManager = true;
  const post = [
    {
      postId: 1,
      postType: 'Quiz',
      postTitle: 'TEST',
      postBody: 'TESTCONTENT',
      startDate: '24. 7. 25. 04:24',
      endDate: '24. 7. 25. 05:24',
    },
  ];
  const imageURLs = ['url11.com', 'url12.com'];

  return (
    <div>
      <Header props={{ title: '공지 작성', isSearch: false }} />
      <Container>
        {post.length > 0 ? (
          post.map((data) => (
            <NoticeItem
              props={data}
              key={data.postId}
              imgs={imageURLs}
              preview={true}
            />
          ))
        ) : (
          <></>
        )}
        <QuestionPreview postType={post.postType} />
        <TwoButton isButtonEnabled={true} btn1="수정하기" btn2="등록하기" />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default Preview;
