import { PostAxiosInstance } from '../axios/axios.method.js';

export const roomIdCheck = async (roomName, roomImage, admin_Nickname) => {
  const response = await PostAxiosInstance('/room/enter/{roomId}', {
    roomName: roomName,
    roomImage: roomImage,
    admin_Nickname: admin_Nickname,
  });

  return response;
};
