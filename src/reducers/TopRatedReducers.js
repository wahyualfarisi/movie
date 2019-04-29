import { GET_TOPRATED, TOPRATED_LOAD  } from '../actions/types';

const initialState = {
    isLoaded: false,
    toprated: null
}

export default function(state = initialState, action){
    switch(action.type){

        case TOPRATED_LOAD: 
        return { ...state, isLoaded: true }

        case GET_TOPRATED:
        return {
            ...state,
            toprated: action.payload,
            isLoaded: false
        }

        default:
        return state;
    }
}