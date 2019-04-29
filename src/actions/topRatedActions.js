import { GET_TOPRATED, TOPRATED_LOAD  } from './types';
import Axios from 'axios';

export const getTopRated = (page) => {
    return dispatch => {
        dispatch(setLoading());
        Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=${page}`)
            .then(res => {
                dispatch({
                    type: GET_TOPRATED,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_TOPRATED,
                    payload: {}
                })
            })
    }
}

export const setLoading = () => {
    return {
        type: TOPRATED_LOAD
    }
}