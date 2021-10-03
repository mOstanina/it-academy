import {USER_SONGS_LOADING,USER_SONGS_ERROR, USER_SONGS_SET } from './userSongsAC';

const initState = {

  status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
  userSongs: null,

}

function userSongsLoadReducer(state = initState, action) {
  switch (action.type) {

    case USER_SONGS_LOADING: {
      let newState = {
        status: 1,
        userSongs: null,
      };
      return newState;
    }

    case USER_SONGS_ERROR: {
      let newState = {
        ...state,
        status: 2,
        userSongs: null,
      };
      return newState;
    }

    case USER_SONGS_SET: {
      let newState = {
        ...state,
        status: 3,
        userSongs: action.playlist,
      };
      return newState;
    }
   
    default:
      return state;
  }
}

export default userSongsLoadReducer;
