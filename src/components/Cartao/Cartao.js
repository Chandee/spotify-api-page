import React from 'react';
import * as S from './Cartao.styles';

const Cartao = ({ nomeAlbum, nomeArtista, imagem, clique, noHover }) => {
  //fazer o click do botao mandar para o /albuns/nomeartista
  return (
    <S.Container onClick={clique} noHover={noHover}>
      <S.Imagem src={imagem} alt={`Capa do album ${nomeAlbum}`} />
      <S.EstiloAlbum>{nomeAlbum}</S.EstiloAlbum>
      <S.EstiloArtista>{nomeArtista}</S.EstiloArtista>
    </S.Container>
  );
};

export default Cartao;
