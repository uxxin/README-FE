import {
  PatchAxiosInstance,
  GetAxiosInstance,
  DeleteAxiosInstance,
} from '../../axios/axios.method';

//공지방 삭제
export const deleteNoticeRoom = async (roomId) => {
  const response = await DeleteAxiosInstance(`/admin/rooms/${roomId}`, {
    roomId,
  });

  return response.data;
};

export const editNoticeRoom = async (roomId, data) => {
  const response = await PatchAxiosInstance(`/admin/rooms/${roomId}`, data);

  return response.data;
};

//공지방 정보 불러오기
export const getNoticeRoomInfo = async (roomId) => {
  const response = await GetAxiosInstance(`/admin/rooms/${roomId}`);
  return response.data;
};
