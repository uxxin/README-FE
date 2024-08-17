import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import Post from '../../../components/Notice/Write/first-step';
import Preview from './Preview';
import { useParams } from 'react-router-dom';
import SecondStep from '../../../components/Notice/Write/second-step';
import ThirdStep from '../../../components/Notice/Write/third-step';

const Write = () => {
  const [step, setStep] = useState(1);
  const [postData, setPostData] = useState({
    type: 'QUIZ',
    title: '',
    content: '',
    imageURLs: [],
    startDate: '',
    endDate: '',
    question: '',
    answer: '',
  });
  const { roomId } = useParams();

  const handleUpdatePostData = ({ type, value }) => {
    setPostData((prev) => ({ ...prev, [type]: value }));
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleCreatePost = async () => {
    // 공지글 생성 API 호출
    window.location.replace(`/notice/${roomId}`);
  };

  return (
    <>
      <Header
        title="공지 작성"
        isSearch={false}
        url={`/notice/${roomId}`}
        write={true}
      />
      {step === 1 && (
        <Post
          handleNextStep={handleNextStep}
          postData={postData}
          handleUpdatePostData={handleUpdatePostData}
        />
      )}
      {step === 2 && (
        <SecondStep
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          postData={postData}
          handleUpdatePostData={handleUpdatePostData}
          isQuiz={postData.type === 'QUIZ'}
        />
      )}
      {step === 3 && (
        <ThirdStep
          handlePrevStep={handlePrevStep}
          postData={postData}
          handleUpdatePostData={handleUpdatePostData}
        />
      )}
    </>
  );
};

export default Write;
