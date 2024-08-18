import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const code = params.get('code');
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    (async () => {
      const response = await axios.post(
        `${baseUrl}/user/login/kakao?code=${code}`,
      );
      localStorage.setItem('token', response.data.result.accessToken);
      navigate('/home');
    })();
  }, []);
  return <div>Redirecting...</div>;
};

export default Redirect;
