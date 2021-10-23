import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { requestAxios } from '../service/request';

const Callback = () => {
  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    console.log('verifica hash', hashParams);
    sessionStorage.setItem('auth_token', hashParams.access_token);
    requestAxios('/search?q=zeca&type=album,track&market=from_token', {
      method: 'get',
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getHashParams();
  }, []);

  return <div>Autorizando</div>;
};

export default Callback;
