import { combineReducers  } from 'redux';
import PopularReducers from './PopularReducers';
import OverviewReducers from './OverviewReducers';
import NowPlayingReducers from './NowPlayingReducers';
import TopRatedReducers from './TopRatedReducers';
import SearchReducers from './SearchReducers';
import genreReducers from './GenreReducers';

export default combineReducers({
    popular: PopularReducers,
    overview: OverviewReducers,
    nowplaying: NowPlayingReducers,
    toprated: TopRatedReducers,
    searchResult: SearchReducers,
    genre: genreReducers
});