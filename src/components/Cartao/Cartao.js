import React from 'react';
import * as S from './Cartao.styles';

const Cartao = ({ nomeAlbum, nomeArtista, imagem }) => {
  //fazer o click do botao mandar para o /albuns/nomeartista
  return (
    <S.Container>
      <S.Imagem src={imagem} />
      <S.EstiloAlbum>{nomeAlbum}</S.EstiloAlbum>
      <S.EstiloArtista>{nomeArtista}</S.EstiloArtista>
    </S.Container>
  );
};

export default Cartao;
