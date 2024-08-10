import {
  GetAxiosInstance,
  PostAxiosInstance,
} from '../../axios/axios.method.js';

export const roomInfo = async (roomName, roomImage, admin_Nickname) => {
  const response = await GetAxiosInstance('/room/enter/{roomId}', {
    roomName: roomName,
    roomImage: roomImage,
    admin_Nickname: admin_Nickname,
  });

  return response;
};

export const registerUser = async (isSuccess) => {
  const response = await PostAxiosInstance('/room/enter/{roomId}', {
    isSuccess: isSuccess,
  });

  return response;
};

export const passwordCheck = async (isValid) => {
  const response = await PostAxiosInstance('/room/{roomId}/checkPassword', {
    isValid: isValid,
  });

  return response;
};

export const nicknameCheck = async (isDuplicate) => {
  const response = await PostAxiosInstance('/user/profile/{roomId}/nickname', {
    isDuplicate: isDuplicate,
  });

  return response;
};
