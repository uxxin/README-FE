import React from 'react';
import styled from 'styled-components';
import CustomInput from '../../components/CustomInput'; // CustomInput의 경로에 맞게 수정

const CreateNoticeRoom = () => {
  return (
    <Container>
      <Header>헤더 영역 불러오기</Header>
      <Scroll>
        <NoticeRoomProfileImage>Profile Image</NoticeRoomProfileImage>
        <Info>
          <OrganizationInfo>
            <OrganizationInfoTitle>단체 정보</OrganizationInfoTitle>
            <CustomInput placeholder="단체 대표자 이름" />
          </OrganizationInfo>
          <NoticeRoomSetting>
            <NoticeRoomSettingTitle>공지방 설정</NoticeRoomSettingTitle>
            <CustomInput placeholder="공지방 이름" />
            <CustomInput placeholder="비밀번호" />
            <CustomInput placeholder="패널티 개수" />
          </NoticeRoomSetting>
        </Info>
      </Scroll>
    </Container>
  );
};

export default CreateNoticeRoom;

const Container = styled.div`
  display: flex;
  width: 26.875rem;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Header = styled.div`
  font-size: 16px;
  color: #333;
`;

const Scroll = styled.div`
  display: flex;
  width: 26.875rem;
  padding: 0.625rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border: 0.0625rem solid blue;
`;

const NoticeRoomProfileImage = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  flex-shrink: 0;
  border-radius: 1.125rem;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const Info = styled.div`
  display: flex;
  width: 24.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
`;

const OrganizationInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const OrganizationInfoTitle = styled.div`
  color: #222;
  font-size: 1.125rem;
  font-weight: 700;
`;

const NoticeRoomSetting = styled.div`
  display: flex;
  width: 24.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
`;

const NoticeRoomSettingTitle = styled.div`
  color: #222;
  font-size: 1.125rem;
  font-weight: 700;
`;
