import React, { useState, useEffect } from 'react';

export const useLogin = () => {
  const [urlFinal, setUrlFinal] = useState('');
  const gerarStringRandomica = length => {
    return Math.random().toString(16).substr(2, length);
  };

  const funcaoLogin = () => {
    var client_id = process.env.CLIENT_ID; //trocar para env
    var redirect_uri = 'http://localhost:3000/callback';
    var state = gerarStringRandomica(16);
    var scope = 'user-read-private user-read-email';
    var url = process.env.SERVER_AUTH;

    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    setUrlFinal(url);
  };

  useEffect(() => {
    funcaoLogin();
  }, []);

  return urlFinal;
};
