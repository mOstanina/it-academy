import { combineReducers } from 'redux';

import allSongsLoadReducer from "./allSongsReducer";

let combinedReducer = combineReducers({
    allSongs: allSongsLoadReducer, // редьюсер allSongsReducer отвечает за раздел state под именем allSongs
    // + другие редьюсеры
});

export default combinedReducer;
