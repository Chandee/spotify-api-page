import React from 'react';
import * as S from './MusicaFaixa.styles';

const MusicaFaixa = ({ nomeMusica, tempo, acao }) => {
  return (
    <S.Li onClick={acao}>
      <S.TextoSpan>{nomeMusica}</S.TextoSpan> <S.Span>{tempo}</S.Span>
    </S.Li>
  );
};

export default MusicaFaixa;
