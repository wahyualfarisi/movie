import { combineReducers  } from 'redux';
import PopularReducers from './PopularReducers';
import OverviewReducers from './OverviewReducers';
import NowPlayingReducers from './NowPlayingReducers';

export default combineReducers({
    popular: PopularReducers,
    overview: OverviewReducers,
    nowplaying: NowPlayingReducers 
});