import { GetAxiosInstance } from '../../axios/axios.method.js';

//내가 입장한 공지방들에 대해 확인요청내역 불러오기
export const getNoticeCheckRequests = async () => {
  const response = await GetAxiosInstance(`/user/join-room`);
  console.log(response.data);

  return response.data;
};

//확인요청내역 상세보기 불러오기
export const getRequestDatas = async (roomId) => {
  const response = await GetAxiosInstance(`/user/rooms/missions/${roomId}`);
  console.log(response.data);
  return response.data;
};
