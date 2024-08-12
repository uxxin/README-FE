import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://read-me.kro.kr' });

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      // 토큰이 없을 경우 로그아웃 처리
      throw new Error('토큰 없음');
    }

    config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyNDMsInByb3ZpZGVyIjoiUkVBRE1FIiwiaWF0IjoxNzIzNDcxODc2LCJleHAiOjE3MjM0ODI2NzZ9.t1hXq8GbXMuuYJlLW59q88VaZCFLIcS17le0__Ezzac`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 토큰 관련 에러 처리
axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },

  async (error) => {
    // 토큰 만료나 잘못된 토큰일 때 로그아웃 처리
    if (error.response?.data?.code === 'AUTH_001') {
      console.log('잘못된 토큰');
      localStorage.removeItem('token');
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
