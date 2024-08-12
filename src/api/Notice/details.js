import { GetAxiosInstance } from '../../axios/axios.method';

export const getNoticedetails = async (postId) => {
  const response = await GetAxiosInstance(`/room/post/${postId}`);
  return response;
};
