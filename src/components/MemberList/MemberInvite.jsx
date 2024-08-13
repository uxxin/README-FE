import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CustomBtn } from '../CustomBtn';
import axios from 'axios';
import { createRoutesFromChildren, useParams } from 'react-router-dom';
import { getMemberInvitation } from '../../api/Member/memberListCheck';

const TotalContainer = styled.div`
`;

const Container = styled.div`
  padding: 0.625rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const AddContainer = styled.div`
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
  border-radius: 0.5rem;
  border: 0.02rem solid #509bf7;
  background: #f4f9ff;
  box-sizing: border-box;
`;

const ContainerHead = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0.5rem 0.8125rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: #509bf7;
  color: #ffffff;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  width: 100%;

  margin-top: 11.25rem;
  color: black;
  box-sizing: border-box;
  padding: 0.625rem;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 2.1875rem;
  color: black;
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  white-space: nowrap;
  position: relative;
  margin-bottom: 0.375rem;
`;

const TextLastContainer = styled.div`
  width: 100%;
  height: 2.1875rem;
  color: black;
  box-sizing: border-box;
  display: flex;
  padding: 0.625rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  white-space: nowrap;
  position: relative;
`;

const TextColor = styled.span`
  width: 3.75rem;
  height: 1rem;
  gap: 0;
  opacity: 1;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: -0.02em;
  text-align: left;
  color: #3c74b9;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.81rem;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  box-sizing: border-box;
`;

const InfoText = styled.span`
  margin-left:0.625rem;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  text-align: left;
  color: var(--Basic-Black, #000000);
`;

const CopyBtn = styled.button`
  position: absolute;
  right: 0; 
  background-color: transparent;
  border: none;
  cursor: pointer;
 `

export const MemberInvite = () => {
  const { roomId } = useParams();

  const [invite, setInvite] = useState({
    room_image: '',
    room_invite_url: '',
    room_name: '',
    room_password: '',
    admin_nickname: '',
  });

  const handleGoMemberList = () => {
    navigate(`/notice/${roomId}/member`);
  };

  const handleGoNotice = () => {
    navigate(`/notice/${roomId}`);
  };

  const handleCopyClipBoard = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      console.log(url)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchInvite = async () => {
        const response = await getMemberInvitation(roomId)
        
        console.log('전체응답', response);
        const inviteData = response.result;
        console.log('URL 정보:', inviteData);
        setInvite(inviteData);
    };
    fetchInvite();
  }, [roomId]);

  return (
    <TotalContainer>
      <Container>
        <AddContainer>
          <ContainerHead>리드미</ContainerHead>
          <InfoContainer>
            <TextContainer>
              <TextColor>
                초대 url <InfoText>{invite.room_invite_url}</InfoText><CopyBtn onClick={() => handleCopyClipBoard(invite.room_invite_url)}>🔍</CopyBtn>
              </TextColor>
            </TextContainer>
            <TextContainer>
              <TextColor>
                공지방 이름 <InfoText>{invite.room_name}</InfoText>{' '}
              </TextColor>
            </TextContainer>
            <TextContainer>
              <TextColor>
                비밀번호 <InfoText>{invite.room_password}</InfoText>{' '}
              </TextColor>
            </TextContainer>
            <TextLastContainer>
              <TextColor>
                대표자 <InfoText>{invite.admin_nickname}</InfoText>
              </TextColor>
            </TextLastContainer>
          </InfoContainer>
        </AddContainer>
      <ButtonWrapper>
          <CustomBtn
            text="멤버목록으로 이동"
            border="none"
            background="#509BF7"
            onClick={handleGoMemberList}
          />

          <CustomBtn
            text="공지방으로 이동"
            border="0.5px solid #509BF7"
            background="#FFFFFF"
            onClick={handleGoNotice}
          />
   </ButtonWrapper>
      </Container>
    </TotalContainer>
  );
};
