import axios from 'axios';
import { requestAxios } from '../service/request';
import { retornoAlbuns, retornoMusicas } from '../utils/formatador';
import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
  FETCH_MUSICA_REQUEST,
  FETCH_MUSICA_SUCCESS,
  FETCH_MUSICA_FAILURE,
  SAVE_MUSIC,
  CLEAR_MUSIC,
  GUARDA_HISTORICO,
} from './constants';

export const fetchAlbum = pesquisa => {
  return dispatch => {
    dispatch(fetchAlbumRequest());
    if (pesquisa) {
      requestAxios(
        `/search?q=${pesquisa}&type=album,track&market=from_token&limit=10`,
        {
          method: 'get',
        }
      )
        .then(res => {
          const albumFormatado = retornoAlbuns(res.data);
          dispatch(
            fetchAlbumSuccess({
              dado: albumFormatado,
              ultimaPesquisa: pesquisa,
            })
          );
        })
        .catch(err => {
          dispatch(fetchAlbumFailure(err.message));
        });
    } else {
      dispatch(
        fetchAlbumSuccess({
          dado: [],
          ultimaPesquisa: '',
        })
      );
    }
  };
};

const fetchAlbumRequest = () => {
  return {
    type: FETCH_ALBUM_REQUEST,
  };
};

const fetchAlbumSuccess = payload => {
  return {
    type: FETCH_ALBUM_SUCCESS,
    payload: payload,
  };
};

const fetchAlbumFailure = error => {
  return {
    type: FETCH_ALBUM_FAILURE,
    payload: error,
  };
};

export const fetchMusicas = id => {
  return dispatch => {
    dispatch(fetchMusicaRequest());
    requestAxios(`/albums/${id}`, {
      method: 'get',
    })
      .then(res => {
        const musicaFormatada = retornoMusicas(res.data);
        dispatch(
          fetchMusicaSuccess({
            musicas: musicaFormatada.musicas,
            album: {
              nomeAlbum: musicaFormatada.nomeAlbum,
              artistas: musicaFormatada.artistas,
              imagem: musicaFormatada.imagem,
            },
          })
        );
      })
      .catch(err => {
        dispatch(fetchMusicaFailure(err.message));
      });
  };
};

const fetchMusicaRequest = () => {
  return {
    type: FETCH_MUSICA_REQUEST,
  };
};

const fetchMusicaSuccess = payload => {
  return {
    type: FETCH_MUSICA_SUCCESS,
    payload: payload,
  };
};

const fetchMusicaFailure = error => {
  return {
    type: FETCH_MUSICA_FAILURE,
    payload: error,
  };
};

export const salvaMusica = payload => {
  return {
    type: SAVE_MUSIC,
    payload: payload,
  };
};

export const limpaMusica = payload => {
  return {
    type: CLEAR_MUSIC,
    payload: payload,
  };
};

export const guardaUltimaPesquisa = payload => {
  return {
    type: GUARDA_HISTORICO,
    payload: payload,
  };
};
