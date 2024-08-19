import React, { useEffect, useState } from 'react';
import { Header } from '../../../components/Header';
import { useParams } from 'react-router-dom';
import FirstStep from '../../../components/Notice/Write/first-step';
import SecondStep from '../../../components/Notice/Write/second-step';
import ThirdStep from '../../../components/Notice/Write/third-step';
import {
  GetAxiosInstance,
  PatchAxiosInstance,
  PostAxiosInstance,
} from '../../../axios/axios.method';
import { format } from 'date-fns';

const Edit = () => {
  const [step, setStep] = useState(1);
  const { roomId, postId } = useParams();
  const [deleteImgURLs, setDeleteImgURLs] = useState([]);
  const [editData, setPostData] = useState({
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
        value: [...editData.imgURLs, ...s3Response.data.result.images].slice(
          0,
          10,
        ),
      });
    }
  };

  const handleDeleteImage = async (url) => {
    handleUpdatePostData({
      type: 'imgURLs',
      value: editData.imgURLs.filter((img) => img !== url),
    });
    setDeleteImgURLs((prev) => [...prev, url]);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleEditPost = async () => {
    const sendData = {
      postData: {
        postTitle: editData.title,
        postContent: editData.content,
        endDate: editData.end_date,
        question: editData.question,
        quizAnswer: editData.quiz_answer,
      },
      addImgURLs: editData.imgURLs,
      deleteImgURLs,
    };
    const response = await PatchAxiosInstance(
      `/admin/post/${postId}`,
      sendData,
    );
    if (response.data.isSuccess)
      window.location.replace(`/notice/${roomId}/${postId}`);
    else console.error(response.data.message);
  };

  useEffect(() => {
    (async () => {
      const response = await GetAxiosInstance(`/admin/post/${postId}`);
      setPostData({
        type: response.data.result.type || 'QUIZ',
        title: response.data.result.title || '',
        content: response.data.result.content || '',
        imgURLs: response.data.result.imgURLs || [],
        start_date: format(response.data.result.startDate, 'yy.MM.dd') || '',
        end_date: format(response.data.result.endDate, 'yy.MM.dd') || '',
        quiz_answer: response.data.result.quizAnswer || '',
        question: response.data.result.question || '',
      });
    })();
  }, []);

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
          postData={editData}
          handleUpdatePostData={handleUpdatePostData}
          editMode
        />
      )}
      {step === 2 && (
        <SecondStep
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          handleImageUpload={handleImageUpload}
          handleDeleteImage={handleDeleteImage}
          postData={editData}
          handleUpdatePostData={handleUpdatePostData}
          isQuiz={editData.type === 'QUIZ'}
          editMode
        />
      )}
      {step === 3 && (
        <ThirdStep
          handlePrevStep={handlePrevStep}
          postData={editData}
          handlePost={handleEditPost}
          editMode
        />
      )}
    </>
  );
};

export default Edit;
