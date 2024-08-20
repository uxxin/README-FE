import React, { useEffect, useState } from 'react';
import { NoticeItem } from '../../components/Notice/NoticeItem';
import styled from 'styled-components';
import { CommentItem } from '../../components/Notice/CommentItem';
import CommentWrite from '../../assets/svgs/comment_write.svg';
import { Header } from '../../components/Header';
import {
  createNoticeComment,
  getNoticeComments,
  getNoticedetails,
} from '../../api/Notice/details';
import { useParams } from 'react-router-dom';

const NoticeDetails = () => {
  const { postId } = useParams();
  const [width, setWidth] = useState(0);
  const [post, setPost] = useState();
  const [imageURLs, setImageURLs] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const getNoticeDetailData = async () => {
    try {
      const response = await getNoticedetails(postId);
      setPost(response.data.result.post[0]);
      setImageURLs(response.data.result.imageURLs);
    } catch (error) {
      console.log(error);
    }
  };

  const getNoticeCommentData = async () => {
    try {
      const response = await getNoticeComments(postId);
      setComments(response.data.result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async () => {
    try {
      await createNoticeComment(postId, comment);
      setComment('');
      await Promise.all([getNoticeDetailData(), getNoticeCommentData()]);
    } catch (error) {
      console.error('댓글 작성 오류:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleComment();
    }
  };

  const handleDeleteComment = async () => {
    await Promise.all([getNoticeDetailData(), getNoticeCommentData()]);
  };

  useEffect(() => {
    setWidth(document.querySelector('.container')?.clientWidth);
  }, []);

  useEffect(() => {
    Promise.all([getNoticeDetailData(), getNoticeCommentData()]);
  }, []);

  return (
    <div className="container">
      <Header title="공지방 이름" isSearch={false} />
      <Container>
        <NoticeItem props={post} imgs={imageURLs} />

        <CommentList>
          {comments.length > 0 ? (
            comments.map((data) => (
              <CommentItem
                props={data}
                key={data.commentId}
                onDelete={handleDeleteComment}
              />
            ))
          ) : (
            <></>
          )}
        </CommentList>

        <CommentInputContainer width={width}>
          <CommentInputFrame>
            <CommentInput
              placeholder="입력하세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <CommentWriteIcon
              src={CommentWrite}
              alt="comment write"
              onClick={handleComment}
            />
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
`;

const CommentWriteIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export default NoticeDetails;
