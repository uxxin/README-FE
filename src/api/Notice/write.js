import { PostAxiosInstance } from '../../axios/axios.method.js';

export const createNotice = async (postData) => {
  return PostAxiosInstance(`/admin/post`, postData)
    .then((response) => response.data)
    .catch((error) => {
      console.error('공지글 작성 오류:', error);
      throw error;
    });
};
