import React from 'react';
import * as S from './MusicaFaixa.styles';

const MusicaFaixa = ({ nomeMusica, tempo }) => {
  return (
    <S.Li>
      {nomeMusica} <S.Span>{tempo}</S.Span>
    </S.Li>
  );
};

export default MusicaFaixa;
