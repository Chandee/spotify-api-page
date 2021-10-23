import React, { useEffect, useRef, useState } from 'react';
import { fetchAlbum } from '../../redux/actions';
import * as S from './InputPesquisa.styles';
import { connect } from 'react-redux';

const InputPesquisa = ({ fetchAlbum }) => {
  const [valor, setValor] = useState('');
  const fazChamda = useRef(false);

  useEffect(() => {
    if (fazChamda.current) {
      const timer = setTimeout(() => fetchAlbum(valor), 700);
      return () => clearTimeout(timer);
    } else {
      fazChamda.current = true;
    }
  }, [valor]);

  return (
    <S.Container>
      <S.Label>Busque por artistas, álbuns ou músicas</S.Label>
      <S.Input
        onChange={e => setValor(e.target.value)}
        value={valor}
        placeholder='Comece a escrever...'
      />
    </S.Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: v => dispatch(fetchAlbum(v)),
  };
};

export default connect(null, mapDispatchToProps)(InputPesquisa);
