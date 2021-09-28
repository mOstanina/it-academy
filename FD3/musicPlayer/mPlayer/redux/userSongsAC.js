const USER_SONGS_LOADING = 'USER_SONGS_LOADING';
const USER_SONGS_ERROR = 'USER_SONGS_ERROR';
const USER_SONGS_SET = 'USER_SONGS_SET';

const userSongsLoadingAC = function () {
  return {
    type: USER_SONGS_LOADING,
  };
}

const userSongsErrorAC = function () {
  return {
    type: USER_SONGS_ERROR,
  };
}

const userSongsSetAC = function (playlist) {
  return {
    type: USER_SONGS_SET,
    playlist: playlist,
  };
}


export {
  userSongsLoadingAC, USER_SONGS_LOADING,
  userSongsErrorAC, USER_SONGS_ERROR,
  userSongsSetAC, USER_SONGS_SET,
}
