import React from 'react';
import Cartao from '../Cartao/Cartao';
import * as S from './Historico.styles';
import { connect } from 'react-redux';
import { listaArtistas } from '../../utils/formatador';
import { useHistory } from 'react-router-dom';

export const Historico = ({ dadosHistorico }) => {
  const history = useHistory();
  const ExisteDado = () => {
    return dadosHistorico.length > 0 ? true : false;
  };

  if (ExisteDado()) {
    return (
      <S.Container>
        <S.Titulo>Historico de pesquisa</S.Titulo>
        {dadosHistorico.reverse().map(v => (
          <Cartao
            nomeAlbum={v.nomeAlbum}
            nomeArtista={listaArtistas(v.artistas)}
            key={v.id}
            imagem={v.imagem.url}
            clique={() => history.push(`/album/${v.id}`)}
          />
        ))}
      </S.Container>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    dadosHistorico: state.historicoPesquisa.historico,
  };
};

export default connect(mapStateToProps)(Historico);
