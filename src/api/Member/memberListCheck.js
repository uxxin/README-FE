import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PatchAxiosInstance,
} from '../../axios/axios.method.js';
import { nicknameCheck, roomInfo } from '../Auth/authEnter.js';

export const getMemberList = async (searchInput, roomId) => {
  try {
    const response = await GetAxiosInstance(`/admin/users`, {
      params: {
        nickname: searchInput,
        roomId: roomId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching member list:', error);
    throw error;
  }
};

export const getMemberInvitation = async (roomId) => {
  const response = await GetAxiosInstance(`/admin/invitation/${roomId}`);
  return response.data;
};

export const getMyInfo = async () => {
  const response = await GetAxiosInstance(`/user/profile`);
  return response.data;
};

export const getMemberBan = async ({ userId, roomId }) => {
  try {
    const response = await DeleteAxiosInstance(`/admin/user-ban`, {
      data: {
        userId: userId,
        roomId: roomId,
      },
    });
    return response.data.result;
  } catch (error) {
    console.error('Error banning member:', error);
    throw error;
  }
};

export const getPenalty = async ({ roomId, userId }) => {
  const response = await GetAxiosInstance(`/admin/profile`, {
    params: {
      roomId: roomId,
      userId: userId,
    },
  });
  return response.data;
};

export const getSubmitList = async ({ roomId }) => {
  const response = await GetAxiosInstance(`/admin/posts/${roomId}`);
  return response.data;
};

export const getSubmitRequest = async ({ roomId, postId, status }) => {
  const response = await GetAxiosInstance(
    `/admin/submit/${roomId}/${postId}?state=${status}`,
  );
  return response.data;
};

export const patchSubmitRequest = async ({ submitId, type }) => {
  const response = await PatchAxiosInstance(`/admin/submit/${submitId}`, {
    type: type,
  });
  console.log('거절할지 수락할지 정하기:', response.data);
  return response.data;
};

export const getAdminProfile = async ({ roomId, userId }) => {
  const response = await GetAxiosInstance(`/admin/profile`, {
    params: {
      roomId: roomId,
      userId: userId,
    },
  });
  return response.data;
};
