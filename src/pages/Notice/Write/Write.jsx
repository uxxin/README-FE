import React, { useState } from 'react';
import { Header } from '../../../components/Header';
import { useParams } from 'react-router-dom';
import FirstStep from '../../../components/Notice/Write/first-step';
import SecondStep from '../../../components/Notice/Write/second-step';
import ThirdStep from '../../../components/Notice/Write/third-step';
import { PostAxiosInstance } from '../../../axios/axios.method';

const Write = () => {
  const [step, setStep] = useState(1);
  const { roomId } = useParams();
  const [postData, setPostData] = useState({
    room_id: roomId,
    type: 'QUIZ',
    title: '',
    content: '',
    imgURLs: [],
    start_date: '',
    end_date: '',
    question: '',
    quiz_answer: '',
  });

  const handleUpdatePostData = ({ type, value }) => {
    setPostData((prev) => ({ ...prev, [type]: value }));
  };

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      files.forEach((file) => {
        formData.append('file', file);
      });

      const s3Response = await PostAxiosInstance('/user/s3', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      handleUpdatePostData({
        type: 'imgURLs',
        value: [...postData.imgURLs, ...s3Response.data.result.images].slice(
          0,
          10,
        ),
      });
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleCreatePost = async () => {
    const response = await PostAxiosInstance(`/admin/post`, postData);
    if (response.data.isSuccess) window.location.replace(`/notice/${roomId}`);
    else console.error(response.data.message);
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
        <FirstStep
          handleNextStep={handleNextStep}
          postData={postData}
          handleUpdatePostData={handleUpdatePostData}
        />
      )}
      {step === 2 && (
        <SecondStep
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          handleImageUpload={handleImageUpload}
          postData={postData}
          handleUpdatePostData={handleUpdatePostData}
          isQuiz={postData.type === 'QUIZ'}
        />
      )}
      {step === 3 && (
        <ThirdStep
          handlePrevStep={handlePrevStep}
          postData={postData}
          handleCreatePost={handleCreatePost}
        />
      )}
    </>
  );
};

export default Write;
