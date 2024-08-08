import React from 'react';
import { NoticeItem } from '../../../components/Notice/NoticeItem';
import styled from 'styled-components';
import { QuestionPreview } from '../../../components/Notice/Write/QuestionPreview';
import { TwoButton } from '../../../components/Notice/Write/StepButton';

const Preview = ({ postType }) => {
  const isManager = true;
  // const post = [
  //   {
  //     postId: 1,
  //     postType: 'Quiz',
  //     postTitle: 'TEST',
  //     postBody: 'TESTCONTENT',
  //     startDate: '24. 7. 25. 04:24',
  //     endDate: '24. 7. 25. 05:24',
  //   },
  // ];
  const imageURLs = ['url11.com', 'url12.com'];

  return (
    <Container>
      {/* {post.length > 0 ? (
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
      )} */}
      <QuestionPreview postType={postType} />
      <TwoButton
        props={{
          border1: '#509BF7',
          background1: '#FFFFFF',
          btn1: '수정하기',
          border2: 'none',
          background2: '#509BF7',
          btn2: '등록하기',
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Preview;
