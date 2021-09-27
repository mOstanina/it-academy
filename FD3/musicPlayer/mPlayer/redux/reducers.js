import { combineReducers } from 'redux';

import allSongsLoadReducer from "./allSongsReducer";
import playlistReducer from "./playlistReducer";


let combinedReducer = combineReducers({
    allSongs: allSongsLoadReducer, // редьюсер allSongsReducer отвечает за раздел state под именем allSongs
    playlist: playlistReducer,
    // allSongs: addToListReduser,
    // + другие редьюсеры
});

export default combinedReducer;
