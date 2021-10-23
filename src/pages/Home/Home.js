import React from 'react';
import Cartao from '../../components/Cartao/Cartao';
import * as S from './Home.styles';
const Home = () => {
  return (
    <S.Container>
      <Cartao
        nomeAlbum='Joao das coves playlist'
        nomeArtista='Joao das coves'
      />
    </S.Container>
  );
};

export default Home;
