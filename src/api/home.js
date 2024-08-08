import { GetAxiosInstance } from '../axios/axios.method.js';

export const getMyProfile = async () => {
  const response = await GetAxiosInstance(`/user`);
  console.log(response.data);

  return response.data;
};
