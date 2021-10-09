import { combineReducers } from 'redux';

import allSongsLoadReducer from "./allSongsReducer";
import playlistReducer from "./playlistReducer";
//import userSongsLoadReducer from './userSongsReducer'

let combinedReducer = combineReducers({
    allSongs: allSongsLoadReducer, // редьюсер allSongsReducer отвечает за раздел state под именем allSongs
    playlist: playlistReducer,
    // + другие редьюсеры
});

export default combinedReducer;
