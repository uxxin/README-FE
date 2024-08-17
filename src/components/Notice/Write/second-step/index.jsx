import React, { useEffect, useState } from 'react';
import { ImgUpload } from '../ImgUpload';
import styled from 'styled-components';
import { ReactComponent as Tooltip } from '../../../../assets/svgs/help_icon.svg';
import FloatingBox from '../../../common/floating-box';
import FlexBox from '../../../common/flex-box';
import Button from '../../../common/button';
import Calendar from './calendar';

const SecondStep = ({
  handlePrevStep,
  handleNextStep,
  postData,
  handleUpdatePostData,
  isQuiz,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const disabled =
    !postData.startDate ||
    !postData.endDate ||
    !postData.question.length ||
    (isQuiz && !postData.answer.length);

  const handleImageUpload = (uploadedImages) => {
    handleUpdatePostData({ type: 'imageURLs', value: uploadedImages });
  };

  const handleOpenCalendar = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Container>
        <ImgUpload onUpload={handleImageUpload} />
        <div className="common-wrap">
          <span className={`text-wrap ${postData.startDate && 'activate'}`}>
            시작 기한
          </span>
          <button onClick={handleOpenCalendar}>
            {postData.startDate || 'YY.MM.DD'}
          </button>
        </div>
        <div className="common-wrap">
          <span className={`text-wrap ${postData.endDate && 'activate'}`}>
            마감 기한
          </span>
          <button onClick={handleOpenCalendar}>
            {postData.endDate || 'YY.MM.DD'}
          </button>
        </div>
        <div className="common-wrap">
          <div className="text-wrap">
            <span>퀴즈</span>
            <Tooltip />
          </div>
          <div className="input-wrap">
            <input placeholder="퀴즈를 입력하세요" />({postData.question.length}
            /20)
          </div>
        </div>
        {isQuiz && (
          <div className="common-wrap">
            <span className="text-wrap">정답</span>
            <div className="input-wrap">
              <input placeholder="정답을 입력하세요" />(
              {postData.question.length}
              /20)
            </div>
          </div>
        )}
      </Container>
      <FloatingBox>
        <FlexBox gap={0.625} calc={2}>
          <Button name="이전" type="outline" />
          <Button name="다음" disabled={disabled} />
        </FlexBox>
      </FloatingBox>
      {true && (
        <Calendar
          date={postData.startDate}
          setDate={setDate}
          open={isOpen}
          handleClose={handleNext}
        />
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 1rem;
  gap: 1rem;

  .common-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    button,
    .input-wrap {
      padding: 0.5rem;
    }

    button,
    .input-wrap {
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--color-primary-light-active);
      background-color: var(--color-primary-light);
    }

    button {
      flex: 1;
      text-align: start;
      color: var(--color-empty);

      &.activate {
        color: var(--color-primary-normal);
      }
    }

    .text-wrap {
      min-width: 4.75rem;
      display: flex;
      align-items: center;
      gap: 0.13rem;
    }

    .input-wrap {
      flex: 1;
      display: flex;
      justify-content: space-between;

      input {
        outline: none;
        border: none;
        background-color: transparent;
        color: var(--color-primary-normal);
      }
    }
  }
`;

export default SecondStep;
