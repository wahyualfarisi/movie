import Axios from 'axios';
import {POPULAR_LOADING, GET_POPULAR} from './types';

//GET_POPULAR
export const getPopularMovie = () => {
    return dispatch => {
        dispatch(setPopularLoading());
        Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=1')
            .then(res => {
                dispatch({
                    type: GET_POPULAR,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_POPULAR,
                    payload: {}
                })
            })
    }
}

export const getLoadMoreMovie = (page) => {
    return dispatch => {
        dispatch(setPopularLoading());
        Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page='+page)
        .then(res => {
            dispatch({
                type: GET_POPULAR,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_POPULAR,
                payload: {}
            })
        })
    }
}




export const setPopularLoading = () => {
    return {
        type: POPULAR_LOADING
    }
}