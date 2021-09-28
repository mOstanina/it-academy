const ALL_SONGS_LOADING = 'USER_SONGS_LOADING';
const ALL_SONGS_ERROR = 'ALL_SONGS_ERROR';
const ALL_SONGS_SET = 'ALL_SONGS_SET';

const allSongsLoadingAC = function () {
  return {
    type: ALL_SONGS_LOADING,
  };
}

const allSongsErrorAC = function () {
  return {
    type: ALL_SONGS_ERROR,
  };
}

const allSongsSetAC = function (allSongs) {
  return {
    type: ALL_SONGS_SET,
    allSongs: allSongs,
  };
}


export {
  allSongsLoadingAC, ALL_SONGS_LOADING,
  allSongsErrorAC, ALL_SONGS_ERROR,
  allSongsSetAC, ALL_SONGS_SET,
  
}
