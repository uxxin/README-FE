import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import camera from '../../../assets/images/img_upload.svg';
import imgDelete from '../../../assets/images/img_delete.svg';

export const ImgUpload = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages].slice(0, 10));
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleDelete = (imageToDelete) => {
    setImages(images.filter((image) => image !== imageToDelete));
  };

  return (
    <UploadContainer>
      <Label>사진 ({images.length}/10)</Label>
      <ImagesContainer>
        {images.length < 10 && (
          <>
            <HiddenInput
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              id="fileInput"
            />
            <CameraIcon onClick={handleClick}>
              <img src={camera} alt="Upload" />
            </CameraIcon>
          </>
        )}
        {images.slice(0, 9).map((image, index) => (
          <ImagePreview key={index}>
            <Image src={image} alt={`Preview ${index + 1}`} />
            <ImageDelete
              src={imgDelete}
              alt="delete"
              onClick={() => handleDelete(image)}
            />
          </ImagePreview>
        ))}
      </ImagesContainer>
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  max-width: 430px;
  overflow-x: scroll;
  padding: 0 1rem;
`;

const Label = styled.label`
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1rem;
  font-weight: 700;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  overflow-x: scroll;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE 및 Edge용 */
  scrollbar-width: none; /* Firefox용 */
`;

const HiddenInput = styled.input`
  display: none;
`;

const CameraIcon = styled.div`
  display: flex;
  min-width: 6.25rem;
  min-height: 6.25rem;
  max-width: 6.25rem;
  max-height: 6.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  cursor: pointer;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ImagePreview = styled.div`
  display: flex;
  min-width: 6.25rem;
  min-height: 6.25rem;
  max-width: 6.25rem;
  max-height: 6.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const ImageDelete = styled.img`
  position: absolute;
  top: 0.37rem;
  right: 0.37rem;
  width: 0.75rem;
  height: 0.75rem;
  z-index: 1;
`;

export default ImgUpload;
