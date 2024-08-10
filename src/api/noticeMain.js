import { GetAxiosInstance } from '../axios/axios.method';

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
