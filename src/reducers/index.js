import { combineReducers  } from 'redux';
import PopularReducers from './PopularReducers';

export default combineReducers({
    popular: PopularReducers
});