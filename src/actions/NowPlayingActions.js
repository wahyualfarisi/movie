import Axios from 'axios';
import { GET_NOWPLAYING, NOWPLAYING_LOAD  } from './types';

export const getNowPlaying = (page) => {

    return dispatch => {
        dispatch(setNowPlayLoad())
        Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&page=${page}`)
            .then(res => {
                dispatch({
                    type: GET_NOWPLAYING,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_NOWPLAYING,
                    payload: {}
                })
            })
    }


}

export const setNowPlayLoad = () => {
    return {
        type: NOWPLAYING_LOAD
    }
}