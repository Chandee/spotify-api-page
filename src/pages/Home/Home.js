import React from 'react';
import Historico from '../../components/Historico/Historico';
import InputPesquisa from '../../components/InputPesquisa/InputPesquisa';
import Lista from '../../components/Lista/Lista';
import * as S from './Home.styles';

const Home = () => {
  return (
    <S.Container>
      <InputPesquisa />
      <Historico />
      <Lista />
    </S.Container>
  );
};

export default Home;
