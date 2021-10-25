import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Cartao from '../../components/Cartao/Cartao';
import Playlist from '../../components/Playlist/Playlist';
import { fetchMusicas, limpaMusica } from '../../redux/actions';
import * as S from './Album.styles';
import Voltar from '../../img/voltar.svg';
const Album = ({ fetchMusicas, album, limpaMusica }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchMusicas(id);
  }, []);

  return (
    <S.Container>
      <div>
        <S.BotaoVoltar
          onClick={() => {
            limpaMusica();
            history.goBack();
          }}
        >
          <img alt='botao voltar' src={Voltar} />
          <span>voltar</span>
        </S.BotaoVoltar>
      </div>
      <S.ContainerDivisao>
        <S.ImagemContainer>
          <Cartao
            nomeAlbum={album.nomeAlbum}
            nomeArtista={album.artistas}
            imagem={album.imagem?.url}
            noHover
          />
        </S.ImagemContainer>
        <S.ContainerPlaylist>
          <Playlist />
        </S.ContainerPlaylist>
      </S.ContainerDivisao>
    </S.Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMusicas: v => dispatch(fetchMusicas(v)),
    limpaMusica: v => dispatch(limpaMusica(v)),
  };
};

const mapStateToProps = state => {
  return {
    album: state.dadosMusica.album,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
