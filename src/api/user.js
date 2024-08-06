import { PostAxiosInstance } from '../axios/axios.method.js';

export const login = async (email, password) => {
  const response = await PostAxiosInstance('/user/login', {
    email: email,
    password: password,
  });
  return response;
};
