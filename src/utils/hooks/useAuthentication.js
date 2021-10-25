import React, { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [autenticado, setAutenticado] = useState('');

  const pegaToken = () => {
    setAutenticado(sessionStorage.getItem('auth_token'));
  };

  useEffect(() => {
    pegaToken();
  }, []);

  return autenticado;
};

export default useAuthentication;
