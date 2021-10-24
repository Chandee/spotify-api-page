import React, { useEffect, useRef, useState } from 'react';
import { fetchAlbum } from '../../redux/actions';
import * as S from './InputPesquisa.styles';
import { connect } from 'react-redux';

const InputPesquisa = ({ fetchAlbum, pesquisa }) => {
  const [valor, setValor] = useState('' || pesquisa);
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
      <S.Label htmlFor='Pesquisar'>
        Busque por artistas, álbuns ou músicas
      </S.Label>
      <S.Input
        onChange={e => setValor(e.target.value)}
        value={valor}
        placeholder='Comece a escrever...'
        id='Pesquisar'
      />
    </S.Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbum: v => dispatch(fetchAlbum(v)),
  };
};

const mapStateToProps = state => {
  return {
    pesquisa: state.dadosGerais?.ultimaPesquisa,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputPesquisa);
