import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { SlideButton, CheckButton, XButton } from '../../../assets/svgs/icons';
import { useDispatch } from 'react-redux';
import { acceptance, rejection } from '../../../redux/CheckSlice';
import { useSelector } from 'react-redux';

const TotalContainer = styled.div`
  width: 100%;
  margin-bottom: 0.625rem;
`

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



const SecondButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 0.33px solid var(--Primary-Light-active, #c9e0fd);
  margin-bottom: 1rem;
`;

const YesButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-right: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  border: 0.3px solid #c9e0fd;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
`;

const NoButton = styled.button`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-right: 0.33px solid var(--Primary-light-active, #c9e0fd);
  background: var(--Primary-light, #f4f9ff);
  border: 0.3px solid #c9e0fd;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
`;


const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border: 0.33px;
  bottom: 0.625rem;
`;

const BorderContainer = styled.div`
    border-bottom: 0.33px solid var(--Primary-light-active, #c9e0fd);
`

export const AcceptanceListMap = ({
  submit_id,
  user_info,
  content,
  image_URL,
}) => {
  console.log('AcceptanceListMap rendered');
  const { nickname, profile_image } = user_info;
  const dispatch = useDispatch();
  const requiredList = useSelector((state) => state.check.requiredList);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const pageLimit = 1;

  
  useEffect(() => {
    setTotalPage(image_URL.length);
  }, [image_URL]);

  const lastPage = () => {
    setPage(totalPage);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };


  useEffect(() => {
    console.log('리렌더링:', requiredList);
  }, [requiredList]);

  return (
    <TotalContainer>
    <BorderContainer>
      <ProfileContainer>
        <ImgContainer src={profile_image} alt="Profile" />
        <TextContainer>
          <ProfileName>{nickname}</ProfileName>
          <ProfileInfo>{content}</ProfileInfo>
        </TextContainer>
      </ProfileContainer>
      <ContentContainer>
        <StyledImage src={image_URL[page - 1]} alt="Content" />
        <NextPageBtn onClick={nextPage}>
          <SlideButton />
        </NextPageBtn>
      </ContentContainer>
    </BorderContainer>
  </TotalContainer>
  );
};
