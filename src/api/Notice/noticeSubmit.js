import { GetAxiosInstance, PostAxiosInstance } from '../../axios/axios.method';

export const getSubmitInfo = async (postId) => {
  const response = await GetAxiosInstance(`/room/post/${postId}/submit`);
  return response;
};

export const submitNotice = async (formData) => {
  const response = await PostAxiosInstance('/user/S3/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response;
};

export const submitAll = async (content, imageURLs, postId) => {
  const response = await PostAxiosInstance(`/room/post/${postId}/submit`, {
    content: content,
    imageURLs: imageURLs,
  });
  return response;
};
