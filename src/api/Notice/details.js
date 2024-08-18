import { GetAxiosInstance, PostAxiosInstance } from '../../axios/axios.method';

export const getNoticedetails = async (postId) => {
  const response = await GetAxiosInstance(`/room/post/${postId}`);
  return response;
};

export const getNoticeComments = async (postId) => {
  const response = await GetAxiosInstance(`/room/post/${postId}/comment`);
  return response;
};

export const createNoticeComment = async (postId, content) => {
  return await PostAxiosInstance(`/room/post/${postId}/comment`, { content })
    .then((response) => response.data)
    .catch((error) => {
      console.error('댓글 작성 오류:', error);
      throw error;
    });
};
