import React from "react";
import styled from "styled-components";
import { CustomBtn } from "../CustomBtn";
import { useLocation} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

// 컨테이너 스타일
const Container = styled.div`
  padding: 0.625rem 1rem;
  gap: 3.75rem;
  box-sizing: border-box;
  display: flex;
  width: 26.875rem;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 26.875rem;
  padding: 0.625rem 0rem;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
`

// 이미지 컨테이너 스타일
const ImgContainer = styled.img`
  width: 18.75rem; 
  height: 18.75rem; 
  object-fit: cover;
  border-radius: 0.9375rem; 
  box-sizing: border-box;
  display: block;
  margin: 0 auto;


`;

// 패널티 체크 스타일
const PaneltyCheck = styled.div`
  width: 18.75rem; 
  display: block;
  margin: 0 auto;
  border-radius: 0.5rem;
  border: 0.02rem solid #C9E0FD; 
  background: var(--Primary-Light, #F4F9FF);
  display: flex;
  width: 18.75rem;
  padding: 1.9375rem 0rem 1.875rem 0rem;
  justify-content: center;
  align-items: center;
`;





export const MemberProfile = (props) =>{
  const { nickname } = useParams(); 
//  const { userId } = useParams();
  const { penalty_count } = useParams(); 

  const location = useLocation();
  const { profile_image = "" } = location.state;
 // const imageUrl = profile_image.startsWith('http') ? profile_image : `/images/${profile_image}`;
  const [penaltyCount,setPenaltyCount] = useState(penalty_count);

  const [profile,setProfile] = useState({
      nickname: "",
      profile_image: "",
      penalty_count: ""
  });


  console.log('패널티 :', penalty_count);

  /*
  useEffect (() =>{
    const fetchProfileData = async() => {
      try {
        const option = {
          headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNDMsInByb3ZpZGVyIjoiUkVBRE1FIiwiaWF0IjoxNzIzMzk3NDUyLCJleHAiOjE3MjM0MDgyNTJ9.F0iwtu45hktDaFjLoBvbY8sQ_H9tDLo5VDA8eHl6i68`
        }
      };
        const response = await axios.get(`https://read-me.kro.kr/admin/profile?room-id=${room-id}&user-id=${user-id}`, option);
        console.log("프로필정보:",response.data) 
        setProfile(response.data.result)
    }catch(err){
      console.error("프로필 정보를 불러오는데 실패하였습니다.")
    }
  };
    fetchProfileData();
  }, [userId, profile_image, nickname]); 
*/
    
 
  

    return(
        <Container>
          <ImgContainer src={profile_image} alt={`${nickname}'s profile`} />
         <PaneltyCheck>패널티 {profile.penalty_count}</PaneltyCheck>
         
         <CustomBtn
            props={{
              text: '확인',
              border: '0.5px solid #509BF7',
              background: '#FFFFFF',
              link: '/sign-up',
            }}
          />
        </Container>

    )
}