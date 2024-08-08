import { PostAxiosInstance } from '../axios/axios.method.js';

export const login = async (email, password) => {
  const response = await PostAxiosInstance('/user/login', {
    email: email,
    password: password,
  });
  return response;
};

export const createCode = async (email) => {
  const response = await PostAxiosInstance('/user/create-code', {
    email: email,
  });
  return response;
};

export const confirmCode = async (email, code) => {
  const response = await PostAxiosInstance('/user/confirm-code', {
    email: email,
    code: code,
  });
  return response;
};

export const signup = async (name, nickname, email, password) => {
  const response = await PostAxiosInstance('/user/signup', {
    name: name,
    nickname: nickname,
    email: email,
    password: password,
  });
  return response;
};
