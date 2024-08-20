import {
  GetAxiosInstance,
  PostAxiosInstance,
} from '../../axios/axios.method.js';

export const roomInfo = async (url) => {
  const response = await GetAxiosInstance(`/room/enter/${url}`);

  return response;
};

export const registerUser = async (nickname, roomId) => {
  const response = await PostAxiosInstance(`/room/enter/${roomId}`, {
    nickname,
  });

  return response;
};

export const passwordCheck = async (content, roomId) => {
  const response = await PostAxiosInstance(`/room/${roomId}/checkPassword`, {
    content,
  });

  return response;
};

export const nicknameCheck = async (nickname, roomId) => {
  const response = await PostAxiosInstance(`/user/profile/${roomId}/nickname`, {
    nickname,
  });

  return response;
};
