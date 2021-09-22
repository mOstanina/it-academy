import { combineReducers } from 'redux';

import allSongsReducer from "./allSongsReducer";

let combinedReducer=combineReducers({
    allSongs: allSongsReducer, // редьюсер allSongsReducer отвечает за раздел state под именем allSongs
    // + другие редьюсеры
});

export default combinedReducer;
