import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../CustomBtn';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { getPenalty } from '../../api/Member/memberListCheck';
import Penalty from '../../pages/Main/Penalty';


export const MemberProfile = () => {


  const {roomId} = useParams();
  const {userId} = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const { profile_image = '' } = location.state;
  const {nickname} = location.state;
  console.log("넘어오는 닉네임",nickname)
  // const imageUrl = profile_image.startsWith('http') ? profile_image : `/images/${profile_image}`;
  const [penaltyData, setPenaltyData] = useState("")

  

  console.log("파라미터로 넘어오는값1:",nickname)
  console.log("파라미터로 넘어오는값2:",roomId)
  console.log("파라미터로 넘어오는값3:",userId)

  const handleClick = () => {
    navigate('/sign-up');
  };


  useEffect(() => {
    const fetchPenalty = async () => {
      try {
        const response = await getPenalty(roomId, userId);
        console.log("패널티 데이터:", response);
        setPenaltyData(response.result); 
      } catch (err) {
        console.error("패널티 데이터 조회 실패", err);
      }
    };
    fetchPenalty();
  }, [roomId, userId]);



  return (
    <Container>
      <ImgWrapper>
      <ImgContainer src={profile_image} alt={`${nickname}'s profile`} />
      </ImgWrapper>
      <PaneltyCheck>패널티 <PenaltyNum><PenaltyColor>{penaltyData.penalty_count}</PenaltyColor><MaxPenaltyColor>/</MaxPenaltyColor><MaxPenaltyColorSpace>{penaltyData.max_penalty}</MaxPenaltyColorSpace></PenaltyNum></PaneltyCheck>
      <CustomBtn
        text="확인"
        border="0.5px solid #509BF7"
        background="#FFFFFF"
        onClick={handleClick}
      />
    </Container>
  );
};


// 컨테이너 스타일
const Container = styled.div`
  width: 100%;
  padding: 0.625rem 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  padding: 0.625rem 4.0625rem;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
`;

// 이미지 컨테이너 스타일
const ImgContainer = styled.img`
  height: 18.75rem;
  object-fit: cover;
  border-radius: 0.9375rem;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  margin-top: 3.5625rem;
`;

const PaneltyWrapper = styled.div`
  width: 100%;
  padding: 3rem;
`

// 패널티 체크 스타일
const PaneltyCheck = styled.div`
  width: calc(100% - 2 * 4rem); 
  display: block;
  margin: 0 auto;
  border-radius: 0.5rem;
  border: 0.02rem solid #c9e0fd;
  background: var(--Primary-Light, #f4f9ff);
  display: flex;
  padding: 1.9375rem 0rem 1.875rem 0rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PenaltyNum = styled.div`
margin-top: 4px;
`


const PenaltyColor = styled.span`
  color: var(--System-Danger, #F5535E); /* 경고 색상 또는 기본 빨간색 */
  margin-right: 5px; /* 오른쪽 여백 */
  font-size: 1rem; /* 폰트 크기 */
  font-weight: 700; /* 굵은 글씨 */
  line-height: 1rem; /* 줄 높이 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const MaxPenaltyColor = styled.span`
  color: var(--Grayscale-Gray5, #888888); /* 회색 */
  font-size: 1rem; /* 폰트 크기 */
  font-weight: 700; /* 굵은 글씨 */
  line-height: 1rem; /* 줄 높이 */
  margin-right:5px; /* 글자 간격 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

const MaxPenaltyColorSpace = styled.span`
  color: var(--Grayscale-Gray5, #888888); /* 회색 */
  font-size: 1rem; /* 폰트 크기 */
  font-weight: 700; /* 굵은 글씨 */
  line-height: 1rem; /* 줄 높이 */
  text-align: center; /* 텍스트 중앙 정렬 */
`;

