import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NoticeTitle } from '../NoticeTitle';
import axios from 'axios';
import { PointerBtn } from '../../../assets/svgs/icons';
import { Link, useParams } from 'react-router-dom';

export const ConfirmListMap = (props) => {
  const { roomId } = useParams();

  return (
    <BoxContainer>
      <Container>
        <ContentContainer>
          <TitleBox>{props.title}</TitleBox>
          <DateBox>
            {props.startDate} - {props.endDate}
          </DateBox>
          <FrameBox>
            <ContentBox>
              <ContentText>{props.content}</ContentText>
            </ContentBox>
            {props.image > 0 ? (
              <>
                <ImgBox src={props.image} />
              </>
            ) : (
              <>
                <ImgBox src="/src/assets/pngs/defaultprofileimage.png" />
              </>
            )}
          </FrameBox>

          <BottonBox>
            {props.pendingCount > 0 ? (
              <StyledLink
                to={`/notice/${roomId}/confirm-list/${props.postId}/approval`}
              >
                <BtnStyle>
                  <PointerBtn />
                  {props.pendingCount}
                </BtnStyle>
              </StyledLink>
            ) : (
              <StyledLink
                to={`/notice/${roomId}/confirm-list/${props.postId}/approval`}
              >
                <BtnStyle>
                  <PointerBtn />
                  요청없음
                </BtnStyle>
              </StyledLink>
            )}
          </BottonBox>
        </ContentContainer>
      </Container>
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  width: 100%;
  height: 10.625rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  border: 0.020625rem 0 0 0;
  background: var(--Primary-Light, #f4f9ff);
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 9.375rem;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 1.125rem;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 8px;
`;

const DateBox = styled.div`
  width: 100%;
  height: 0.75rem;
  padding: 0 0 0.5rem 0;
  gap: 0.25rem;
  border: 0 0 0.020625rem 0;
  border-bottom: 0.020625rem solid var(--Primary-Normal, #509bf7);
  color: var(--Primary-Light, #509bf7);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.75rem;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 8px;
`;

const FrameBox = styled.div`
  width: 100%;
  height: 3.75rem;
  display: flex;
  gap: 0.625rem;
  align-items: center;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 3.75rem;
  gap: 0;
`;

const ContentText = styled.span`
  color: #888888;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  letter-spacing: -0.02em;
  text-align: left;
`;

const ImgBox = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  gap: 0;
  border-radius: 0.5rem;
`;

const BottonBox = styled.button`
  margin-top: 0.5rem;
  display: flex;
  height: 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border: none;
  border-radius: 0.5rem;
  background: var(--Primary-Normal, #509bf7);
  margin-left: auto;
  padding: 6px 10px;
  color: white;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

const BtnStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  svg {
    vertical-align: middle;
  }
`;
