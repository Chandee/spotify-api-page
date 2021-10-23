import React from 'react';
import Cartao from '../../components/Cartao/Cartao';
import InputPesquisa from '../../components/InputPesquisa/InputPesquisa';
import Lista from '../../components/Lista/Lista';
import * as S from './Home.styles';
const Home = () => {
  return (
    <S.Container>
      <InputPesquisa />
      <Lista />
    </S.Container>
  );
};

export default Home;
