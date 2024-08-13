import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = window.location;
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (pathname === '/' || pathname === '/sign-up') && navigate('/home');
    } else {
      navigate('/');
    }
  }, []);
  return <Outlet />;
}
