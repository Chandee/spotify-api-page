import React from 'react';
import * as S from './InputPesquisa.styles';
const InputPesquisa = () => {
  return (
    <S.Container>
      <S.Label>Busque por artistas, álbuns ou músicas</S.Label>
      <S.Input placeholder='Comece a escrever...' />
    </S.Container>
  );
};

export default InputPesquisa;
