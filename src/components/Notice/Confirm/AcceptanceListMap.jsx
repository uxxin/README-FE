import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { SlideButton, CheckButton, XButton } from '../../../assets/svgs/icons';
import { useDispatch } from 'react-redux';
import { acceptance, rejection } from '../../../redux/CheckSlice';
import { useSelector } from 'react-redux';
import { PrevPageBtn } from '../../../assets/svgs/icons';

export const AcceptanceListMap = ({
  profileImage,
  nickname,
  images,
  content,
  submitId,
}) => {
  const dispatch = useDispatch();
  const requiredList = useSelector((state) => state.check.requiredList);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const pageLimit = 1;

  useEffect(() => {
    if (Array.isArray(images)) {
      setTotalPage(images.length);
      console.log('페이지:', images);
    } else {
      setTotalPage(1);
    }
  }, [images]);

  const lastPage = () => setPage(totalPage);
  const prevPage = () => setPage(page > 1 ? page - 1 : page);
  const nextPage = () => setPage(page < totalPage ? page + 1 : page);

  const currentImage =
    Array.isArray(images) && images.length > 0
      ? images[page - 1]
      : '/src/assets/pngs/defaultprofileimage.png';

  return (
    <TotalContainer>
      <BorderContainer>
        <ProfileContainer>
          <ImgContainer src={profileImage} alt="Profile" />
          <TextContainer>
            <ProfileName>{nickname}</ProfileName>
            <ProfileInfo>{content}</ProfileInfo>
          </TextContainer>
        </ProfileContainer>
        <ContentContainer>
          <StyledImage src={currentImage} alt="Content" />
          <PrevPageContainer onClick={prevPage}>
            <PrevPageBtn />
          </PrevPageContainer>
          <NextPageBtn onClick={nextPage}>
            <SlideButton />
          </NextPageBtn>
        </ContentContainer>
      </BorderContainer>
    </TotalContainer>
  );
};

const TotalContainer = styled.div`
  width: 100%;
  margin-bottom: 0.625rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 0 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.span`
  align-self: stretch;
  color: var(--Text-default, var(--Grayscale-Gray7, #222));
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.02rem;
`;

const ProfileInfo = styled.span`
  align-self: stretch;
  color: var(--Text-caption, var(--Grayscale-Gray5, #888));
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.015rem;
`;

const ImgContainer = styled.img`
  display: flex;
  width: 2.25rem;
  height: 2.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
`;

const ContentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 12.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  margin-bottom: 0.625rem;
  margin-top: 0.625rem;
`;

const NextPageBtn = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  right: 0.625rem;
  transform: translateY(-50%);
  padding: 0;
  gap: 0;
  border-radius: 50%;
  opacity: 0.8;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;

const PrevPageContainer = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  left: 0.625rem;
  transform: translateY(-50%);
  padding: 0;
  gap: 0;
  border-radius: 50%;
  opacity: 0.8;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border: 0.33px;
  bottom: 0.625rem;
`;

const BorderContainer = styled.div`
  border-bottom: 0.33px solid var(--Primary-light-active, #c9e0fd);
`;
