import React from 'react';
import Cartao from '../Cartao/Cartao';
import * as S from './Lista.styles';
import { connect } from 'react-redux';
import { listaArtistas } from '../../utils/formatador';
import { useHistory } from 'react-router-dom';

const Lista = ({ dadosAlbum, pesquisa }) => {
  const history = useHistory();
  const ExisteDado = () => {
    return dadosAlbum.length > 0 ? true : false;
  };

  return (
    <S.Container>
      {ExisteDado() && (
        <S.Titulo>Resultados encontrados para "{pesquisa}"</S.Titulo>
      )}
      {dadosAlbum.map(v => (
        <Cartao
          nomeAlbum={v.nomeAlbum}
          nomeArtista={listaArtistas(v.artistas)}
          key={v.id}
          imagem={v.imagem.url}
          clique={() => history.push(`/album/${v.id}`)}
        />
      ))}
      {!ExisteDado() && <S.Titulo>Nenhum dado encontrado</S.Titulo>}
    </S.Container>
  );
};

const mapStateToProps = state => {
  return {
    dadosAlbum: state.dadosGerais.dados,
    pesquisa: state.dadosGerais.ultimaPesquisa,
  };
};

export default connect(mapStateToProps)(Lista);
