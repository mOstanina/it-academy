import { combineReducers } from 'redux';

import allSongsLoadReducer from "./allSongsReducer";
//import addToListReduser from "./addToListReduser";


let combinedReducer = combineReducers({
    allSongs: allSongsLoadReducer, // редьюсер allSongsReducer отвечает за раздел state под именем allSongs
   // allSongs: addToListReduser,
    // + другие редьюсеры
});

export default combinedReducer;
