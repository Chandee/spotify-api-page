import React from 'react';
import Cartao from '../Cartao/Cartao';
import * as S from './Lista.styles';
import { connect } from 'react-redux';

const Lista = ({ dadosAlbum, pesquisa }) => {
  const listaArtistas = todosArtistas => {
    return todosArtistas.reduce((acumulador, atual, index) => {
      if (index === 0) {
        return (acumulador = acumulador + atual);
      } else {
        return (acumulador = acumulador + ', ' + atual);
      }
    }, '');
  };

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
