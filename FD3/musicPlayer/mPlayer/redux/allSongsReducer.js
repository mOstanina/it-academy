﻿import { ALL_SONGS_LOADING, ALL_SONGS_ERROR, ALL_SONGS_SET } from './allSongsAC';

const initState={

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  data: null,

}

function allSongsLoadReducer(state=initState,action) {
  switch (action.type) {

    case ALL_SONGS_LOADING: {
      let newState={
        status:1,
        data:null,
      };
      return newState;
    }

    case ALL_SONGS_ERROR: {
      let newState={
        status:2,
        data:null,
      };
      return newState;
    }

    case ALL_SONGS_SET: {
      let newState={
        status:3,
        data:action.allSongs,
      };
      return newState;
    }
    
    default:
      return state;
  }
}

export default allSongsLoadReducer;
