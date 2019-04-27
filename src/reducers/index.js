import { combineReducers  } from 'redux';
import PopularReducers from './PopularReducers';
import OverviewReducers from './OverviewReducers';

export default combineReducers({
    popular: PopularReducers,
    overview: OverviewReducers
});