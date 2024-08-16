import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../../components/Header';
import { ReactComponent as SmallCamera } from '../../../assets/svgs/small_camera.svg';
import { ReactComponent as DeletePhoto } from '../../../assets/svgs/delete_photo.svg';
import { ReactComponent as AddPhoto } from '../../../assets/svgs/add_photo.svg';
import {
  getSubmitInfo,
  submitAll,
  submitImage,
} from '../../../api/Notice/noticeSubmit';
const Solve = () => {
  const headerProps = {
    title: '공지방 이름',
    isSearch: false,
  };
  const { postId } = useParams();
  const [submitData, setSubmitData] = useState();
  const [sendData, setSendData] = useState([]);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [content, setContent] = useState('');
  const [submitState, setSubmitState] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleUploadImage = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setSendData((prevSendData) => [...prevSendData, ...files]);

      const newImages = files.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            resolve(reader.result);
          };
        });
      });

      const loadedImages = await Promise.all(newImages);
      setImages((prevImages) => [...prevImages, ...loadedImages]);
    }
  };

  const handleTextChange = (e) => {
    setContent(e.target.value);
  };

  const submitImages = async () => {
    const newImageURLs = [];
    for (let i = 0; i < sendData.length; i++) {
      const formData = new FormData();
      formData.append('file', sendData[i]);
      try {
        const response = await submitImage(formData);
        newImageURLs.push(response.data.result.image);
      } catch (error) {
        console.error(`Error uploading image ${i + 1}:`, error);
      }
    }
    const updatedImageURLs = [...imageURLs, ...newImageURLs];
    setImageURLs(updatedImageURLs);
    return updatedImageURLs;
  };

  const submitAllData = async () => {
    try {
      const finalImageURLs = await submitImages();
      const response = await submitAll(content, finalImageURLs, postId);
      setSubmitState(response.data.result.submitState);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePhoto = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setSendData((prevSendData) => prevSendData.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (submitData && submitData.type === 'QUIZ') {
      if (content.length > 0) setIsButtonDisabled(false);
      else setIsButtonDisabled(true);
    } else {
      if (content.length > 0 && images.length > 0) setIsButtonDisabled(false);
      else setIsButtonDisabled(true);
    }
  }, [images, content]);

  useEffect(() => {
    const getSubmit = async () => {
      try {
        const response = await getSubmitInfo(postId);
        setSubmitData(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    getSubmit();
  }, []);
  return (
    <>
      <Header props={headerProps} />
      <Container>
        {submitData && submitData.type === 'QUIZ' ? (
          <TopContainer>
            <Question>
              Q.
              <br />
              {submitData.question}
            </Question>
            <Answer>
              A.
              <br />
              <Input type="text" onChange={handleTextChange} maxLength={20} />
            </Answer>
          </TopContainer>
        ) : (
          <>
            <MissionTopContainer>
              <Question>
                Q.
                <br />
                {submitData ? submitData.question : '질문이 없습니다.'}
              </Question>
              <SubmitPhotoContainer></SubmitPhotoContainer>
            </MissionTopContainer>
            <PhotoContainer>
              <SubmitNotice>
                인증 사진 제출 &#40;{images.length}/5&#41;
              </SubmitNotice>
              {images.length === 0 && (
                <SubmitPhoto>
                  <label>
                    <PhotoSubmitInput
                      type="file"
                      accept="image/*"
                      onChange={handleUploadImage}
                      multiple
                    />
                    <StyledSmallCamera />
                  </label>
                </SubmitPhoto>
              )}
              {images.map((image, index) => (
                <PhotoFrame>
                  <StyledDeletePhoto onClick={() => deletePhoto(index)} />
                  <PhotoImage
                    key={index}
                    src={image}
                    alt={`Uploaded ${index}`}
                  />
                </PhotoFrame>
              ))}
              {images.length > 0 && images.length < 5 && (
                <label>
                  <PhotoSubmitInput
                    type="file"
                    accept="image/*"
                    onChange={handleUploadImage}
                    multiple
                  />
                  <AddPhoto />
                </label>
              )}
            </PhotoContainer>
            <OthersContainer>
              <Others>기타 사항</Others>
              <OthersInputContainer>
                <Input type="text" onChange={handleTextChange} maxLength={50} />
                <MaxLetterCount>&#40;{content.length}/50&#41;</MaxLetterCount>
              </OthersInputContainer>
            </OthersContainer>
          </>
        )}
        <SubmitButtonContainer>
          <Submit onClick={submitAllData} disabled={isButtonDisabled}>
            제출
          </Submit>
        </SubmitButtonContainer>
      </Container>
    </>
  );
};

export default Solve;

const Container = styled.div`
  height: calc(100% - 2.75rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 1rem;
  flex-shrink: 0;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  align-self: stretch;
`;
const MissionTopContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.75rem;
`;

const SubmitPhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
`;

const SubmitNotice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.03rem;
`;

const SubmitPhoto = styled.div`
  display: flex;
  height: 12.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  background: var(--Primary-Light, #f4f9ff);
`;
const PhotoSubmitInput = styled.input`
  display: none;
`;

const StyledSmallCamera = styled(SmallCamera)`
  width: 1.5rem;
  height: 1.5rem;
`;

const Question = styled.div`
  width: 100%;
  color: var(--Text-default, #222);
  font-size: 2rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.04rem;
`;

const Answer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  color: var(--Primary-normal, #509bf7);
  font-size: 2rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.04rem;
`;

const Input = styled.input`
  width: 100%;
  display: flex;
  padding: 1.25rem 1.125rem;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  box-sizing: border-box;
  color: var(--Primary-normal, var(--Primary-Normal, #509bf7));
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.0225rem;
  &:focus {
    outline: none;
  }
`;
const SubmitButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 1rem;
  width: 100%;

  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;
const Submit = styled.button`
  display: flex;
  width: 100%;
  padding: 1rem 0rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  background: var(--Primary-Normal, #509bf7);
  color: var(--Basic-White, var(--Basic-White, #fff));
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
  cursor: pointer;
  &:disabled {
    background: var(--Grayscale-Gray4, #bdbdbd);
    cursor: none;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
  margin-bottom: 6rem;
`;

const PhotoFrame = styled.div`
  display: flex;
  height: 15.25rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  position: relative;
`;
const PhotoImage = styled.img`
  height: 15.25rem;
  width: 100%;
  border-radius: 0.5rem;
`;

const StyledDeletePhoto = styled(DeletePhoto)`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
`;

const Others = styled.div`
  color: var(--GrayScale-gray6, var(--Grayscale-Gray6, #444));
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.025rem;
  width: 100%;
`;

const OthersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 10rem;
`;

const MaxLetterCount = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
`;

const OthersInputContainer = styled.div`
  position: relative;
`;
