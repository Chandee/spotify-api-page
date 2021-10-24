import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Cartao from '../../components/Cartao/Cartao';
import MusicaFaixa from '../../components/MusicaFaixa/MusicaFaixa';
import Playlist from '../../components/Playlist/Playlist';
import { fetchMusicas } from '../../redux/actions';
import * as S from './Album.styles';
const Album = ({ fetchMusicas, musicas, album }) => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchMusicas(id);
  }, []);

  return (
    <S.Container>
      <div>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          voltar
        </button>
      </div>
      <S.ContainerDivisao>
        <div>
          <Cartao
            nomeAlbum={album.nomeAlbum}
            nomeArtista={album.artistas}
            imagem={album.imagem?.url}
            noHover
          />
        </div>
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
  };
};

const mapStateToProps = state => {
  return {
    musicas: state.dadosMusica.musicas,
    album: state.dadosMusica.album,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
