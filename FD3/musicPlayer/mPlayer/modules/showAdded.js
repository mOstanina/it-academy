"use strict";

function showAdded (songsArray, userPlayList){ //показать недобавленные в плей-лист (т.е. доступные к добавлению)
  let listOfAddedSongs =[...songsArray] //[...this.props.songs]
  let userPL =userPlayList//this.props.userPlayList
  listOfAddedSongs = listOfAddedSongs.filter(function (i) {
    //console.log(i.code)
    return !userPL.includes(i.code)
  })
  //this.setState({ songs: listOfAddedSongs });
  return listOfAddedSongs
}

export { showAdded };