import { GetAxiosInstance } from '../../axios/axios.method.js';

//페널티 있는 공지방 조회
export const getPenaltyRoom = async () => {
  const response = await GetAxiosInstance(`/user/join-room`);
  console.log(response.data);

  return response.data;
};

//공지방별 페널티 상세 조회
export const getPenaltyPosts = async (roomId) => {
  const response = await GetAxiosInstance(`/user/rooms/penalty/${roomId}`);
  console.log(response.data);

  return response.data;
};
