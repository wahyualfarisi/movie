import Axios from 'axios';
import { OVERVIEW_LOADING, GET_OVERVIEW_MOVIE, GET_SIMILIAR_MOVIE } from './types';

export const getOverviewMovie = (movieId) => {
    return dispatch => {
        dispatch(setLoadingOverView())
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`)
            .then(res => {
                console.log(res)
                dispatch({
                    type: GET_OVERVIEW_MOVIE,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_OVERVIEW_MOVIE,
                    payload: {}
                })
            })
    }
}

export const getSimiliarMovies = (movieId) => {
    return dispatch => {
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=1`)
            .then(res => {
                console.log(res);
                dispatch({
                    type: GET_SIMILIAR_MOVIE,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_SIMILIAR_MOVIE,
                    payload: {}
                })
            })
    }
}


export const setLoadingOverView = () => {
    return {
        type: OVERVIEW_LOADING
    }
}