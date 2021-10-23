import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Cartao from '../../components/Cartao/Cartao';
import MusicaFaixa from '../../components/MusicaFaixa/MusicaFaixa';
import * as S from './Album.styles';
const Album = () => {
  const { artista } = useParams();
  const history = useHistory();

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
          <Cartao nomeAlbum='album teste' nomeArtista='joao das coves' />
        </div>
        <S.ContainerPlaylist>
          <ol>
            <MusicaFaixa nomeMusica={'faixa amarela'} tempo='1:12' />
            <MusicaFaixa nomeMusica={'faixa amarela'} tempo='1:12' />
            <MusicaFaixa nomeMusica={'faixa amarela'} tempo='1:12' />
            <MusicaFaixa nomeMusica={'faixa amarela'} tempo='1:12' />
          </ol>
        </S.ContainerPlaylist>
      </S.ContainerDivisao>
    </S.Container>
  );
};

export default Album;
