import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import Post from '../../../components/Notice/Write/first-step';
import Preview from './Preview';
import { useParams } from 'react-router-dom';
import SecondStep from '../../../components/Notice/Write/second-step';

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

  // const [type, setType] = useState('');
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [imageURLs, setImageURLs] = useState([]);
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  // const [question, setQuestion] = useState('');
  // const [answer, setAnswer] = useState('');

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
    //   selectedType,
    //   inputTitle,
    //   inputContent,
    //   uploadImages,
    //   inputStartDate,
    //   inputEndDate,
    //   inputQuestion,
    //   inputAnswer,
    // ) => {
    //   setStep((prevState) => Math.max(prevState - 1, 1));
    //   setType(selectedType || type);
    //   setTitle(inputTitle || title);
    //   setContent(inputContent || content);
    //   setImageURLs(uploadImages || imageURLs);
    //   setStartDate(inputStartDate || startDate);
    //   setEndDate(inputEndDate || endDate);
    //   setQuestion(inputQuestion || question);
    //   setAnswer(inputAnswer || answer);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
    //   selectedType,
    //   inputTitle,
    //   inputContent,
    //   uploadImages,
    //   inputStartDate,
    //   inputEndDate,
    //   inputQuestion,
    //   inputAnswer,
    // ) => {
    //   setStep((prevState) => Math.min(prevState + 1, 3));
    //   setType(selectedType || type);
    //   setTitle(inputTitle || title);
    //   setContent(inputContent || content);
    //   setImageURLs(uploadImages || imageURLs);
    //   setStartDate(inputStartDate || startDate);
    //   setEndDate(inputEndDate || endDate);
    //   setQuestion(inputQuestion || question);
    //   setAnswer(inputAnswer || answer);
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
        // (postData.type === 'QUIZ' ? (
        //   <QuizType
        //     handlePrevStep={handlePrevStep}
        //     handleNextStep={handleNextStep}
        //     postData={postData}
        //     handleUpdatePostData={handleUpdatePostData}
        //   />
        // ) : (
        //   <MissionType
        // handlePrevStep={handlePrevStep}
        // handleNextStep={handleNextStep}
        // postData={postData}
        // handleUpdatePostData={handleUpdatePostData}
        //   />
        <SecondStep
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          postData={postData}
          handleUpdatePostData={handleUpdatePostData}
          isQuiz={postData.type === 'QUIZ'}
        />
      )}
      {step === 3 && (
        <Preview
          onPrevStep={handlePrevStep}
          postData={postData}
          handleUpdatePostData={handleUpdatePostData}
        />
      )}
    </>
  );
};

export default Write;
