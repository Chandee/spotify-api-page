import React from 'react';
import { connect } from 'react-redux';
import { salvaMusica } from '../../redux/actions';
import MusicaFaixa from '../MusicaFaixa/MusicaFaixa';

const Playlist = ({ musicas, salvaMusica }) => {
  return (
    <ol>
      {musicas.map(m => (
        <MusicaFaixa
          nomeMusica={m.nomeMusica}
          tempo={m.duracao}
          key={m.id}
          acao={() =>
            salvaMusica({
              musicaNome: m.nomeMusica,
              urlPreview: m.preview,
            })
          }
        />
      ))}
    </ol>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    salvaMusica: v => dispatch(salvaMusica(v)),
  };
};

const mapStateToProps = state => {
  return {
    musicas: state.dadosMusica.musicas,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
