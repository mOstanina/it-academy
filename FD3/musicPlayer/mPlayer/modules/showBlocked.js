"use strict";

function showBlocked (songsArray, userPlayList) { // показать добавленные в плей-лист
    let listOfAddedSongs = [...songsArray]
    let userPL = userPlayList//this.props.userPlayList
    listOfAddedSongs = listOfAddedSongs.filter(function (i) {
      return userPL.includes(i.code)
    })
    return listOfAddedSongs
  }

export { showBlocked };