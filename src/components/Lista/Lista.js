import React from 'react';
import Cartao from '../Cartao/Cartao';
import * as S from './Lista.styles';

const Lista = ({ tituloLista }) => {
  const vetor = [
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'asd',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'tre',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'gdf',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'hgf',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'dfg',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'bvb',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'yjb',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'vwr',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'kiu',
    },
    {
      nomeAlbum: 'Joao das coves playlist',
      nomeArtista: 'Joao das coves',
      id: 'bvf',
    },
  ];

  return (
    <S.Container>
      <S.Titulo>{tituloLista}</S.Titulo>
      {vetor.map(v => (
        <Cartao
          nomeAlbum={v.nomeAlbum}
          nomeArtista={v.nomeArtista}
          key={v.id}
        />
      ))}
    </S.Container>
  );
};

export default Lista;
