import React, { useEffect, useState } from 'react';
import { useLogin } from '../../utils/hooks/useLogin';
import * as S from './Login.styles';

const Login = () => {
  const url = useLogin();

  return (
    <div>
      <S.Titulo>Seja bem vindo</S.Titulo>
      <S.Botao href={url}>Login</S.Botao>
    </div>
  );
};

export default Login;
