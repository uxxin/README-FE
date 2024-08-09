import { PostAxiosInstance, GetAxiosInstance } from '../axios/axios.method.js';

//공지방 생성
export const postNoticeRoom = async (RoomData) => {
  const response = await PostAxiosInstance(`/admin/rooms`, RoomData);
  console.log(response.data);
  return response.data;
};

export const postNoticeRoomImage = async (RoomImage) => {
  const response = await PostAxiosInstance(`/user/s3/upload`, RoomImage);
  console.log(response.data);
  return response.data;
};
