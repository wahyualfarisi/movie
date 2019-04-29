import Axios from 'axios';
import { OVERVIEW_LOADING, GET_OVERVIEW_MOVIE, GET_SIMILIAR_MOVIE, VIDEO_LOADING, GET_VIDEOS, IS_LOAD, GET_RECOMENDATIONS } from './types';

export const getOverviewMovie = (movieId) => {
    return dispatch => {
        dispatch(setLoadingOverView())
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`)
            .then(res => {
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



export const getVideosofmovie = (movieId) => {
    return dispatch => {
        dispatch(setLoadingVideo());
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US`)
            .then(res => {
                dispatch({
                    type: GET_VIDEOS,
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_VIDEOS,
                    payload: {}
                })
            })
    }
}

export const getRecomendationsMovie = (movieId) => {
    return dispatch => {
        dispatch(setLoad())
        Axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=1`)
            .then(res => {
                dispatch({
                    type: GET_RECOMENDATIONS,
                    payload: res.data.results
                })
            })
            .catch(res => {
                dispatch({
                    type: GET_RECOMENDATIONS,
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

export const setLoadingVideo = () => {
    return {
        type: VIDEO_LOADING
    }
}

export const setLoad = () => {
    return {
        type: IS_LOAD
    }
}