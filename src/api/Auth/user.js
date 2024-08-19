import axios from 'axios';

export const login = async (user) => {
  const response = await axios.post('https://read-me.kro.kr/user/login', user);
  return response;
};

export const createCode = async (email) => {
  const response = await axios.post('https://read-me.kro.kr/user/create-code', {
    email: email,
  });
  return response;
};

export const confirmCode = async (email, code) => {
  const response = await axios.post(
    'https://read-me.kro.kr/user/confirm-code',
    {
      email: email,
      code: code,
    },
  );
  return response;
};

export const signup = async (name, nickname, email, password) => {
  const response = await axios.post('https://read-me.kro.kr/user/signup', {
    name: name,
    nickname: nickname,
    email: email,
    password: password,
  });
  return response;
};
