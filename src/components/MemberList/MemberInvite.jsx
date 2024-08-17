import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { getMemberInvitation } from '../../api/Member/memberListCheck';
import KakaoLoginButton from '../common/kakao-login';
import { ReactComponent as CopyIcon } from '../../assets/svgs/copy_icon.svg';
import FloatingBox from '../common/floating-box';
import Button from '../common/button';

export const MemberInvite = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const roomBaseUrl = import.meta.env.VITE_PROD_BASE_URL;

  const [invite, setInvite] = useState({
    room_image: '',
    room_invite_url: '',
    room_name: '',
    room_password: '',
    admin_nickname: '',
  });

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${roomBaseUrl}/notice/entry/${invite.room_invite_url}`,
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleNavToNoticeRoom = () => {
    navigate(`/notice/${roomId}`);
  };

  const handleShareUrl = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'READ.ME',
        description: `${invite.room_name} 공지방에 참여하세요!\n비밀번호는 ${invite.room_password} 입니다.`,
        imageUrl: invite.room_image || '',
        link: {
          mobileWebUrl: `${roomBaseUrl}/notice/entry/${invite.room_invite_url}`,
          webUrl: `${roomBaseUrl}/notice/entry/${invite.room_invite_url}`,
        },
      },
    });
  };

  useEffect(() => {
    const fetchInvite = async () => {
      const response = await getMemberInvitation(roomId);
      const inviteData = response.result;
      setInvite(inviteData);
    };
    fetchInvite();
  }, [roomId]);

  return (
    <>
      <Container>
        <span className="bold-16 room-name">{invite.room_name}</span>
        <div className="room-info-wrap">
          <img src={invite.room_image || ''} alt="공지방 대표 이미지" />
          <div className="room-info">
            <div className="infos">
              <span className="bold-16 url">초대 URL</span>
              <span className="regular-12 invite-url">
                {roomBaseUrl}/{invite.room_invite_url}
              </span>
              <button onClick={handleCopyClipBoard}>
                <CopyIcon />
              </button>
            </div>
            <div className="infos">
              <span className="bold-16 url">공지방 이름</span>
              <span className="regular-12 invite-url">{invite.room_name}</span>
            </div>
            <div className="infos">
              <span className="bold-16 url">비밀번호</span>
              <span className="regular-12 invite-url">
                {invite.room_password}
              </span>
            </div>
            <div className="infos">
              <span className="bold-16 url">대표자</span>
              <span className="regular-12 invite-url">
                {invite.admin_nickname}
              </span>
            </div>
          </div>
        </div>
      </Container>
      <FloatingBox>
        <KakaoLoginButton onClick={handleShareUrl}>
          카카오톡으로 공유하기
        </KakaoLoginButton>
        <Button
          type="outline"
          name="공지방으로 이동"
          onClick={handleNavToNoticeRoom}
        />
      </FloatingBox>
    </>
  );
};

const Container = styled.section`
  padding: 0.625rem 1rem;
  display: flex;
  flex-direction: column;

  .room-name {
    padding: 0.5rem 0.81rem;
    background-color: var(--color-primary-normal);
    color: #ffffff;
    border-radius: 0.5rem 0.5rem 0 0;
    border: 0.0625rem solid var(--color-primary-normal);
  }

  .room-info-wrap {
    padding: 0.625rem;
    background-color: var(--color-primary-light);
    border-radius: 0 0 0.5rem 0.5rem;
    border: 0.0625rem solid var(--color-primary-normal);
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    img {
      width: 12.5rem;
      height: 12.5rem;
      border-radius: 0.5rem;
      margin: 0 auto;
    }

    .room-info {
      display: flex;
      flex-direction: column;
      gap: 0.38rem;

      .infos {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        padding: 0.625rem;

        .url {
          color: var(--color-primary-dark);
          white-space: nowrap;
        }

        .invite-url {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        button {
          border: none;
          background-color: transparent;
        }
      }
    }
  }
`;
