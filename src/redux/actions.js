import axios from 'axios';
import { requestAxios } from '../service/request';
import { retornoAlbuns } from '../utils/formatadorResposta';
import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
} from './constants';

export const fetchAlbum = pesquisa => {
  return dispatch => {
    dispatch(fetchAlbumRequest());
    requestAxios(
      `/search?q=${pesquisa}&type=album,track&market=from_token&limit=10`,
      {
        method: 'get',
      }
    )
      .then(res => {
        const albumFormatado = retornoAlbuns(res.data);
        dispatch(
          fetchAlbumSuccess({ dado: albumFormatado, ultimaPesquisa: pesquisa })
        );
      })
      .catch(err => {
        dispatch(fetchAlbumFailure(err.message));
      });
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
