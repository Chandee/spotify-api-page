import React, { useEffect, useState } from 'react';

const useAuthentication = () => {
  const [autenticado, setAutenticado] = useState('');

  const pegaToken = () => {
    console.log('time tiking', sessionStorage);

    console.log('entrou e pegou chave', sessionStorage.getItem('auth_token'));
    setAutenticado(sessionStorage.getItem('auth_token'));
  };

  useEffect(() => {
    pegaToken();
  }, []);

  return autenticado;
};

export default useAuthentication;
