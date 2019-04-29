import { SEARCH_LOAD, SEARCH_MOVIE } from './types';
import Axios from 'axios';

export const searchMovie = (keyword, history) => {
    return dispatch => {
        dispatch(setLoad())
        Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=222e7bb2f5b52cf29c95ea61cc204128&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(res => {
                dispatch({
                    type: SEARCH_MOVIE,
                    payload: res.data
                })
                history.push('/search?q='+keyword)
            })
            .catch(err => {
                dispatch({
                    type: SEARCH_MOVIE,
                    payload: {}
                })
                history.push('/search/'+keyword)
            })
    }
}



export const setLoad = () => {
    return {
        type: SEARCH_LOAD
    }
}
