import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Cartao from '../../components/Cartao/Cartao';
import Playlist from '../../components/Playlist/Playlist';
import { fetchMusicas, limpaMusica } from '../../redux/actions';
import * as S from './Album.styles';
const Album = ({ fetchMusicas, album, limpaMusica }) => {
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
            limpaMusica();
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
    limpaMusica: v => dispatch(limpaMusica(v)),
  };
};

const mapStateToProps = state => {
  return {
    album: state.dadosMusica.album,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
