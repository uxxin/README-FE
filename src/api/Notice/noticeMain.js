import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PatchAxiosInstance,
} from '../../axios/axios.method';

export const getNotices = async (roomId) => {
  const response = await GetAxiosInstance(`/room/${roomId}/all`);
  return response;
};

export const getUnconfirmedNotices = async (roomId) => {
  const response = await GetAxiosInstance(`/room/${roomId}/notChecked`, {
    params: {
      size: 10,
    },
  });
  return response;
};

export const patchFixNotice = async (postId) => {
  const response = await PatchAxiosInstance(`/room/fixPost`, {
    postId: postId,
  });
  return response;
};

export const getUnconfirmedPeople = async (postId) => {
  const response = await GetAxiosInstance(`/admin/post/${postId}/unread`);
  return response;
};

export const deleteNotice = async (postId) => {
  const response = await PatchAxiosInstance('/admin/post', {
    id: postId,
  });
  return response;
};

export const checkPenalty = async (roomId) => {
  const response = await PatchAxiosInstance(`/room/${roomId}/check-penalty`);
  return response;
};

export const bannedRoom = async (roomId) => {
  const response = await DeleteAxiosInstance(`/room/${roomId}/exited`);
  return response;
};
