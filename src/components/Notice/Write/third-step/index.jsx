import styled from 'styled-components';
import Chip from '../../../common/chip';
import Button from '../../../common/button';

const ThirdStep = ({ handlePrevStep, postData, handleCreatePost }) => {
  return (
    <>
      <Container>
        <div className="content-wrap">
          <Chip theme={postData.type}>
            {postData.type === 'QUIZ' ? '퀴즈' : '미션'}
          </Chip>
          <span className="bold-18">{postData.title}</span>
          <span className="regular-12 date">
            {postData.start_date} - {postData.end_date}
          </span>
          <div className="medium-16 content">{postData.content}</div>
          {postData.imgURLs.length > 0 &&
            postData.imgURLs.map((url) => (
              <img key={url} src={url} alt="미리보기 사진" />
            ))}
        </div>
        <div className="question-answer">
          <span className="bold-18">Q.{postData.question}</span>
          {postData.type === 'QUIZ' && (
            <span className="medium-16">A.{postData.quiz_answer}</span>
          )}
        </div>
      </Container>
      <Floating>
        {/* <Button name="수정하기" type="outline" onClick={handlePrevStep} />
        <Button name="등록하기" onClick={handleCreatePost} /> */}
        <button className="medium-16 outline" onClick={handlePrevStep}>
          수정하기
        </button>
        <button className="medium-16" onClick={handleCreatePost}>
          등록하기
        </button>
      </Floating>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 1rem 8.9325rem;
  gap: 1rem;

  .content-wrap,
  .question-answer {
    background-color: var(--color-primary-light);
    border: 0.0625rem solid var(--color-primary-light-active);
    border-radius: 0.5rem;
  }

  .content-wrap {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.69rem;

    .date {
      color: var(--color-primary-normal);
      padding-bottom: 0.5rem;
      border-bottom: 0.0625rem solid var(--color-primary-normal);
    }

    .content {
      color: var(--color-caption);
      overflow-wrap: break-word;
    }
  }

  .question-answer {
    padding: 0.88rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    span {
      &:first-child {
        color: var(--color-primary-normal);
      }
      &:last-child {
        color: var(--color-default);
      }
    }
  }
`;

const Floating = styled.div`
  background-color: #ffffff;
  width: 100%;
  border-top: 0.0625rem solid var(--color-primary-light-active);
  display: flex;
  position: fixed;
  max-width: 429px;
  gap: 0.625rem;
  bottom: 0;
  padding: 1.25rem 0 3.37rem;

  button {
    border: none;
    background-color: var(--color-primary-normal);
    color: #ffffff;
    border-radius: 0.5rem;
    padding: 1rem 0;
    display: flex;
    flex: 1;
    justify-content: center;
    margin-right: 1rem;

    &.outline {
      border: 0.0625rem solid var(--color-primary-normal);
      color: var(--color-primary-normal);
      margin-right: 0;
      margin-left: 1rem;
      background-color: #ffffff;
    }
  }
`;

export default ThirdStep;
