import React, { useEffect, useState } from 'react';
import { NoticeItem } from '../../components/Notice/NoticeItem';
import styled from 'styled-components';
import { CommentItem } from '../../components/Notice/CommentItem';
import CommentWrite from '../../assets/svgs/comment_write.svg';
import { Header } from '../../components/Header';

const NoticeDetails = () => {
  const [width, setWidth] = useState(0);
  const isManager = true;
  const post = [
    {
      postId: 3,
      postType: 'Quiz',
      postTitle: 'test2',
      postBody: 'testcontent2',
      startDate: '24. 7. 28. 04:01',
      endDate: '24. 7. 28. 04:01',
      commentCount: 4,
      submitState: 'NOT_COMPLETE',
    },
  ];
  const imageURLs = [];
  const data = [
    {
      commentId: 1,
      commentAuthorNickname: 'kimroom1',
      commentBody: 'com.con.1',
      updatedAt: '24. 7. 27. 18:08',
    },
    {
      commentId: 3,
      commentAuthorNickname: 'parkroom1',
      commentBody: 'com.con.3',
      updatedAt: '24. 7. 27. 18:09',
    },
    {
      commentId: 4,
      commentAuthorNickname: 'leeroom1',
      commentBody: 'com.con.4',
      updatedAt: '24. 7. 27. 18:09',
    },
    {
      commentId: 5,
      commentAuthorNickname: null,
      commentBody: 'com.con.5',
      updatedAt: '24. 7. 27. 18:10',
    },
    // {
    //   commentId: 7,
    //   commentAuthorNickname: 'leeroom1',
    //   commentBody: 'com.con.7',
    //   updatedAt: '24. 7. 27. 18:11',
    // },
  ];

  useEffect(() => {
    setWidth(document.querySelector('.container')?.clientWidth);
  }, []);

  return (
    <div className="container">
      <Header title="공지방 이름" isSearch={false} />
      <Container>
        {post.length > 0 ? (
          post.map((data) => (
            <NoticeItem props={data} key={data.postId} imgs={imageURLs} />
          ))
        ) : (
          <></>
        )}

        <CommentList>
          {data.length > 0 ? (
            data.map((data) => (
              <CommentItem props={data} key={data.commentId} />
            ))
          ) : (
            <></>
          )}
        </CommentList>

        <CommentInputContainer width={width}>
          <CommentInputFrame>
            <CommentInput placeholder="입력하세요." />
            <CommentWriteIcon src={CommentWrite} alt="comment write" />
          </CommentInputFrame>
        </CommentInputContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0.625rem 1rem 5.8432rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const CommentList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const CommentInputContainer = styled.div`
  display: flex;
  width: ${(props) => (props.width - 8) / 16}rem;
  /* padding: 0.25rem; */
  padding-bottom: 2.34631rem;
  justify-content: center;
  align-items: center;
  background: var(--Basic-White, #fff);
  position: fixed;
  bottom: 0;
  z-index: 100;
`;

const CommentInputFrame = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const CommentInput = styled.input`
  display: flex;
  width: 100%;
  /* height: 2.77869rem; */
  padding: 0.75rem 0.875rem;
  justify-content: space-between;
  align-self: stretch;
  border: none;
  background: var(--Primary-Light, #f4f9ff);
  outline: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: #222;
  text-overflow: ellipsis;
  font-family: 'Pretendard';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
  ::placeholder {
    color: var(--Text-emtpy, var(--Grayscale-Gray4, #bdbdbd));
  }
`;

const CommentWriteIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export default NoticeDetails;
