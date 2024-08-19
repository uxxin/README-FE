import {
  PatchAxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
} from '../../axios/axios.method';

//공지방 삭제
export const deleteNoticeRoom = async (roomId) => {
  const response = await PatchAxiosInstance(`/admin/rooms/${roomId}`, {
    roomId: roomId,
  });
  console.log(response.data);

  return response.data;
};

export const editNoticeRoom = async (roomId, data) => {
  const response = await PatchAxiosInstance(`/admin/rooms/${roomId}`, {
    admin_nickname: data.admin_nickname,
    room_name: data.room_name,
    room_password: data.room_password,
    room_image: data.room_image,
    max_penalty: data.max_penalty,
  });

  console.log(response.data);

  return response.data;
};

//공지방 정보 불러오기
export const getNoticeRoomInfo = async (roomId) => {
  const response = await GetAxiosInstance(`/admin/rooms/${roomId}`);
  console.log(response.data);

  return response.data;
};
