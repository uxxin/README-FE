import { PostAxiosInstance, GetAxiosInstance } from '../axios/axios.method.js';

//공지방 생성
export const postNoticeRoom = async (RoomData) => {
  const response = await PostAxiosInstance(`/admin/rooms`, RoomData);
  console.log(response.data);
  return response.data;
};

export const postNoticeRoomImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const response = await PostAxiosInstance(`/user/s3/upload`, formData, config);
  console.log(response.data);
  return response.data;
};
