import {
  GET_GENRE,
  GENRE_LOAD,
  GET_LIST_GENRE_LOAD,
  GET_LIST_GENRE,
  SAVE_GENRE
} from "./types";
import Axios from "axios";

export const getGenre = () => {
  return dispatch => {
    dispatch(setLoad());
    Axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`
    )
      .then(res => {
        dispatch({
          type: GET_GENRE,
          payload: res.data.genres
        });
      })
      .catch(err => {
        dispatch({
          type: GET_GENRE,
          payload: {}
        });
      });
  };
};

export const getListbygenre = (id, name, history) => {
  return dispatch => {
    dispatch(setLoadList());
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
    )
      .then(res => {
        dispatch({
          type: GET_LIST_GENRE,
          payload: res.data
        });

        dispatch({
          type: SAVE_GENRE,
          payload: name
        });

        history.push("/genre/" + id);
      })
      .catch(err => {
        dispatch({
          type: GET_LIST_GENRE,
          payload: {}
        });
      });
  };
};

export const getListbygenre2 = (id, page) => {
  return dispatch => {
    dispatch(setLoadList());
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`
    )
      .then(res => {
        dispatch({
          type: GET_LIST_GENRE,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_LIST_GENRE,
          payload: {}
        });
      });
  };
};

export const setLoad = () => {
  return {
    type: GENRE_LOAD
  };
};

export const setLoadList = () => {
  return {
    type: GET_LIST_GENRE_LOAD
  };
};
