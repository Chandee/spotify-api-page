import React from 'react';
import { connect } from 'react-redux';
import MusicaFaixa from '../MusicaFaixa/MusicaFaixa';

const Playlist = ({ musicas }) => {
  return (
    <ol>
      {musicas.map(m => (
        <MusicaFaixa nomeMusica={m.nomeMusica} tempo={m.duracao} key={m.id} />
      ))}
    </ol>
  );
};

const mapStateToProps = state => {
  return {
    musicas: state.dadosMusica.musicas,
  };
};

export default connect(mapStateToProps)(Playlist);
