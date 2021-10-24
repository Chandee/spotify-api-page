import React, { useEffect, useRef, useState } from 'react';
import * as S from './TocadorDeMusica.styles';
import { transformaMilisegundoEmMinuto } from '../../utils/formatador';
import Pause from '../../img/pause.svg';
import Play from '../../img/play.svg';
import { limpaMusica } from '../../redux/actions';
import { connect } from 'react-redux';

const TocadorDeMusica = ({ limpaMusica, musica, urlPreview }) => {
  const [tempoDeMusica, setTempoDeMusica] = useState(0);
  const [tocandoMusica, setTocandoMusica] = useState(false);
  const [nome, setNome] = useState('');
  const audioRef = useRef(new Audio());

  const { duration } = audioRef.current;

  useEffect(() => {
    onPause();
    setNome(musica);
    audioRef.current = new Audio(urlPreview);
  }, [musica]);

  useEffect(() => {
    limpaMusica();
    const atualizaTempo = e => {
      setTempoDeMusica(e.target.currentTime.toFixed(0));
    };

    const atualizaPlayer = () => {
      setTocandoMusica(false);
      audioRef.current.currentTime = 0;
    };
    audioRef.current.addEventListener('timeupdate', atualizaTempo);
    audioRef.current.addEventListener('ended', atualizaPlayer);
    return () => {
      audioRef.current.addEventListener('timeupdate', atualizaTempo);
      audioRef.current.addEventListener('ended', atualizaPlayer);
    };
  }, []);

  const onPause = () => {
    setTocandoMusica(false);
    audioRef.current.pause();
  };

  const onPlay = () => {
    setTocandoMusica(true);
    audioRef.current.play();
  };

  const tempoInit = tempo => {
    audioRef.current.currentTime = tempo;
  };

  if (nome) {
    return (
      <S.Footer>
        <S.TextoAnimado>
          <span>{nome}</span>
        </S.TextoAnimado>
        <S.ContainerMusicaBarra>
          <div>
            {tocandoMusica ? (
              <S.Botao onClick={() => onPause()}>
                <S.Icon src={Pause} />
              </S.Botao>
            ) : (
              <S.Botao onClick={() => onPlay()}>
                <S.Icon src={Play} />
              </S.Botao>
            )}
          </div>
          <S.ContainerBarra>
            <span> {transformaMilisegundoEmMinuto(tempoDeMusica * 1000)}</span>
            <S.Input
              type='range'
              value={tempoDeMusica}
              step='1'
              min='0'
              max={duration ? duration : `${duration}`}
              onChange={e => tempoInit(e.target.value)}
            />
            <span>
              {transformaMilisegundoEmMinuto((duration ? duration : 0) * 1000)}
            </span>
          </S.ContainerBarra>
        </S.ContainerMusicaBarra>
      </S.Footer>
    );
  } else {
    return null;
  }
};

const mapDispatchToProps = dispatch => {
  return {
    limpaMusica: v => dispatch(limpaMusica(v)),
  };
};

const mapStateToProps = state => {
  return {
    musica: state.musicaAtual.musicaNome,
    urlPreview: state.musicaAtual.urlPreview,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TocadorDeMusica);
