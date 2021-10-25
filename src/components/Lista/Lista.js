import React from 'react';
import Cartao from '../Cartao/Cartao';
import * as S from './Lista.styles';
import { connect } from 'react-redux';
import { listaArtistas } from '../../utils/formatador';
import { useHistory } from 'react-router-dom';
import { guardaUltimaPesquisa } from '../../redux/actions';

const Lista = ({ dadosAlbum, pesquisa, guardaUltimaPesquisa }) => {
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
          clique={() => {
            guardaUltimaPesquisa({
              nomeAlbum: v.nomeAlbum,
              artistas: v.artistas,
              id: v.id,
              imagem: v.imagem,
            });
            history.push(`/album/${v.id}`);
          }}
        />
      ))}
      {!ExisteDado() && <S.Titulo>Nenhum dado encontrado</S.Titulo>}
    </S.Container>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    guardaUltimaPesquisa: v => dispatch(guardaUltimaPesquisa(v)),
  };
};

const mapStateToProps = state => {
  return {
    dadosAlbum: state.dadosGerais.dados,
    pesquisa: state.dadosGerais.ultimaPesquisa,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lista);
