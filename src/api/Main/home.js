import {
  GetAxiosInstance,
  DeleteAxiosInstance,
} from '../../axios/axios.method.js';

//프로필 조회
export const getMyProfile = async () => {
  const response = await GetAxiosInstance(`/user`);
  console.log(response.data);

  return response.data;
};

//고정 공지글 조회
export const getFixedNotice = async () => {
  const response = await GetAxiosInstance(`/user/fixed`);
  console.log(response.data);

  return response.data;
};

//고정 공지글 삭제
export const deleteFixedNotice = async () => {
  const response = await DeleteAxiosInstance(`/room/fixPost`);
  console.log(response.data);

  return response.data;
};

//최근 공지글 조회
export const getRecentNotice = async (currentPage, ITEMS_PER_PAGE) => {
  const response = await GetAxiosInstance(
    `https://read-me.kro.kr/user/recent?page=${currentPage}&pageSize=${ITEMS_PER_PAGE}`,
  );
  console.log(response.data);
  return response.data;
};

//개설한 공지방 조회
export const getOpenedRoom = async (currentPage, ITEMS_PER_PAGE) => {
  const response = await GetAxiosInstance(
    `/user/create-room?page=${currentPage}&pageSize=${ITEMS_PER_PAGE}`,
  );
  console.log(response.data);
  return response.data;
};

//입장한 공지방 조회
export const getEnteredRoom = async (currentPage, ITEMS_PER_PAGE) => {
  const response = await GetAxiosInstance(
    `https://read-me.kro.kr/user/join-room?page=${currentPage}&pageSize=${ITEMS_PER_PAGE}`,
  );
  console.log(response.data);
  return response.data;
};
