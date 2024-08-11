import React from 'react';
import styled from 'styled-components';
import { PointerBtn } from '../../../assets/images/icons';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { NoticePreview } from '../NoticePreview';

const BoxContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  display: flex;
  width: 23.4125rem;
  padding: 0.625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
`;

const Title = styled.span`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  /* Pretendard/bold/18 */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 1.125rem */
  letter-spacing: -0.0225rem;
`;

const DueDate = styled.span`
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-bottom: 0.33px solid var(--Primary-Normal, #509bf7);
  color: #509bf7;
`;
const ContentFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const Content = styled.span`
  height: 3.75rem;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Pretendard/medium/16 */
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.02rem;
`;

const ContentImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.5rem;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const MiniBox = styled.button`
  width: Fill (64px) px;
  height: Hug (28px) px;
  padding: 6px 10px 6px 10px;
  gap: 8px;
  border-radius: 8px;
  border: none;
  opacity: 0px;
  background: #509bf7;
  margin-left: auto;
`;

const TextColor = styled.span`
  color: var(--Basic-White, var(--Basic-White, #fff));
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
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
      {/* <Container> */}
      {/* <ContentContainer>
          <Title>공지글의 예시제목</Title>
          <DueDate>yy.MM.dd HH:MM</DueDate>
          <ContentFrame>
            <Content>공지글의 예시내용입니다.</Content>
            <ContentImg></ContentImg>
          </ContentFrame>
          <MiniBox to={`/notice/${roomId}/confirm-list/${post.postId}`}>
            <PointerBtn />
            <TextColor>5건</TextColor>
          </MiniBox>
        </ContentContainer> */}
      {posts.map((post) => (
        <NoticePreview
          props={post}
          btnText={btnText}
          preview={true}
          onClick={handleClick}
        />
      ))}
      {/* </Container> */}
    </BoxContainer>
  );
};
