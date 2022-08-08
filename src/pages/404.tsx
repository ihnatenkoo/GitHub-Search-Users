import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Page404: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="pt-14 text-center font-bold ">
      <div className="mb-4 text-404 text-white">404</div>
      <h3 className="mb-3 text-gray-500">Page not Found</h3>
      <span className="text-blue-500">Redirecting to home...</span>
      <div />
    </div>
  );
};
