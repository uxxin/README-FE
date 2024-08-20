import React, { useCallback, useEffect, useState } from 'react';
import { ImgUpload } from '../ImgUpload';
import styled from 'styled-components';
import { ReactComponent as Tooltip } from '../../../../assets/svgs/help_icon.svg';
import FloatingBox from '../../../common/floating-box';
import FlexBox from '../../../common/flex-box';
import Button from '../../../common/button';
import Calendar from './calendar';
import { format } from 'date-fns';
import useOutsideClick from '../../../../hooks/use-outside-click';

const SecondStep = ({
  handlePrevStep,
  handleNextStep,
  postData,
  handleUpdatePostData,
  handleImageUpload,
  handleDeleteImage,
  isQuiz,
}) => {
  const [calendar, setCalendar] = useState({ type: '', isOpen: false });
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipRef] = useOutsideClick(() => setIsTooltipOpen(false));
  const disabled =
    !postData.start_date ||
    !postData.end_date ||
    !postData.question.length ||
    (isQuiz && !postData.quiz_answer.length);
  const questionType = isQuiz ? '퀴즈' : '미션';

  const tooltipMessage = useCallback(
    () =>
      isQuiz ? (
        <>
          예시
          <br />
          1. 우리 팀 회장의 이름은?
          <br />
          2. 이번 모임 장소는 ㅇㅇ역이다.
        </>
      ) : (
        <>
          예시
          <br />
          1. 닉네임 변경 인증 사진을 남겨주세요.
          <br />
          2. 입금 확인증을 올려주세요.
        </>
      ),
    [isQuiz],
  );

  const handleInput = (e, type) => {
    const { value } = e.target;
    handleUpdatePostData({ type, value });
  };

  const handleOpenCalendar = (e, type) => {
    e.stopPropagation();
    setCalendar({ type, isOpen: true });
  };

  const handleCloseCalendar = () => {
    setCalendar((prev) => ({ type: prev.type, isOpen: false }));
  };

  const handleUpdateDate = (date) => {
    handleUpdatePostData({
      type: [calendar.type],
      value: format(date, 'yy.MM.dd'),
    });
  };

  const handleOpenTooltip = (e) => {
    e.stopPropagation();
    setIsTooltipOpen((prev) => !prev);
  };

  return (
    <>
      <Container>
        <ImgUpload
          handleImageUpload={handleImageUpload}
          handleDeleteImage={handleDeleteImage}
          imgURLs={postData.imgURLs}
        />
        <div className="common-wrap">
          <span className="text-wrap">시작 기한</span>
          <button
            onClick={(e) => handleOpenCalendar(e, 'start_date')}
            className={`medium-16 date-button ${postData.start_date && 'activate'}`}
          >
            {postData.start_date || 'YY.MM.DD'}
          </button>
        </div>
        <div className="common-wrap">
          <span className="text-wrap">마감 기한</span>
          <button
            onClick={(e) => handleOpenCalendar(e, 'end_date')}
            className={`medium-16 date-button ${postData.end_date && 'activate'}`}
          >
            {postData.end_date || 'YY.MM.DD'}
          </button>
        </div>
        <div className="common-wrap">
          <div className="text-wrap">
            <span>{questionType}</span>
            <button className="tooltip" onClick={handleOpenTooltip}>
              <Tooltip />
              {isTooltipOpen && (
                <div className="tooltip-wrap" ref={tooltipRef}>
                  <div className="content regular-10">{tooltipMessage()}</div>
                  <div className="tip" />
                </div>
              )}
            </button>
          </div>
          <div className="input-wrap">
            <input
              placeholder={`${questionType}를 입력하세요`}
              value={postData.question}
              onChange={(e) => handleInput(e, 'question')}
              className="medium-16"
            />
            ({postData.question.length}
            /20)
          </div>
        </div>
        {isQuiz && (
          <div className="common-wrap">
            <span className="text-wrap">정답</span>
            <div className="input-wrap">
              <input
                placeholder="정답을 입력하세요"
                value={postData.quiz_answer}
                onChange={(e) => handleInput(e, 'quiz_answer')}
                className="medium-16"
              />
              ({postData.quiz_answer.length}
              /20)
            </div>
          </div>
        )}
      </Container>
      <FloatingBox>
        <FlexBox gap={0.625} calc={2}>
          <Button name="이전" type="outline" onClick={handlePrevStep} />
          <Button name="다음" disabled={disabled} onClick={handleNextStep} />
        </FlexBox>
      </FloatingBox>
      <Calendar
        date={postData}
        type={calendar.type}
        setDate={handleUpdateDate}
        open={calendar.isOpen}
        handleClose={handleCloseCalendar}
      />
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
      border-radius: 0.5rem;
      border: 0.0625rem solid var(--color-primary-light-active);
      background-color: var(--color-primary-light);
      outline: none;
    }

    .date-button {
      flex: 1;
      text-align: start;
      color: var(--color-empty);

      &.activate {
        color: var(--color-primary-normal);
      }
    }

    .tooltip {
      border: none;
      background-color: #ffffff;
      padding: 0;
      display: flex;
      position: relative;

      .tooltip-wrap {
        position: absolute;
        bottom: 1.5rem;
        text-align: start;
        width: max-content;

        .content {
          border-radius: 0.5rem;
          padding: 0.625rem;
          background-color: var(--color-gray-1);
          position: relative;
          right: 1.6rem;
          color: var(--color-default);
        }

        .tip {
          width: 0;
          height: 0;
          border-width: 0.625rem 0.625rem 0;
          border-style: solid;
          border-color: #ffffff;
          border-top: 0.625rem solid var(--color-gray-1);
          position: relative;
        }
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
