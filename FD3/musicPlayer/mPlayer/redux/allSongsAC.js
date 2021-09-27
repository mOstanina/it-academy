﻿const ALL_SONGS_LOADING = 'ALL_SONGS_LOADING';
const ALL_SONGS_ERROR = 'ALL_SONGS_ERROR';
const ALL_SONGS_SET = 'ALL_SONGS_SET';
//
const CANGE_IN_LIST = 'CANGE_IN_LIST';
//
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
//
const changeInList =function(codeOfSong){
  // let newAllSongs
  return {
    type: CANGE_IN_LIST,
    allSongs: newAllSongs
  };
}
//

export {
  allSongsLoadingAC, ALL_SONGS_LOADING,
  allSongsErrorAC, ALL_SONGS_ERROR,
  allSongsSetAC, ALL_SONGS_SET,
  //
  changeInList, CANGE_IN_LIST,
  //
}
