import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toAddSongInNewPL } from "../redux/playlistReducerAC"
import Track from '../components/track';
import { changeInList } from "../redux/allSongsAC";
import { withRouter } from 'react-router-dom';
import './Page_About.css';
import MainPageLinks from "./MainPageLinks"
import MainPageRouter from "./MainPageRouter"
import { BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Loader from '../components/Loader'

class Page_About extends React.Component {

  static propTypes = {
    songs: PropTypes.array,
    status: PropTypes.number.isRequired,
    userPlayList: PropTypes.array,
  };
  state = {
    listForRender: []
  }

 

  toAddSong = (code) => {
    this.props.dispatch(toAddSongInNewPL(code));
  }

  makeNewList = () => {

    console.log(this.props.match.params)

    var shortistOfAllSongs = this.props.songs
    if (this.props.match.params.list === undefined) {
      console.log(this.props.match.params.list)
      return shortistOfAllSongs
    } else if (this.props.match.params.list === "0") {
      console.log(this.props.match.params.list)
      console.log("!!!")
      shortistOfAllSongs = this.props.songs.slice(0, 9)
      console.log(shortistOfAllSongs)
    } else if (this.props.match.params.list === "10") {
      shortistOfAllSongs = this.props.songs.slice(10, 18)
      console.log(shortistOfAllSongs)
    } else if (this.props.match.params.list === "19") {
      shortistOfAllSongs = this.props.songs.slice(19, 27)
      console.log(shortistOfAllSongs)
    } else if (this.props.match.params.list === "28") {
      shortistOfAllSongs = this.props.songs.slice(28, 36)
      console.log(shortistOfAllSongs)
    } else if (this.props.match.params.list === "37") {
      shortistOfAllSongs = this.props.songs.slice(37, 45)
      console.log(shortistOfAllSongs)
    } else if (this.props.match.params.list === "46") {
      shortistOfAllSongs = this.props.songs.slice(46, 56)
      console.log(shortistOfAllSongs)
    } else {
      shortistOfAllSongs = this.props.songs
    }
    console.log(shortistOfAllSongs)
    this.setState({listForRender:shortistOfAllSongs})
    console.log("3333"+this.state.listForRender)
    // return shortistOfAllSongs

  }
  componentDidMount = () => {
    let list = this.props.match.params.list;
    console.log("this.props.match.params.list: " + list)
    console.log(this.props.match)
    // function List (){
    //   const{listNumber} =useParams()
    //   return <h1>{listNumber}</h1>
    // }
    this.makeNewList()
    console.log("3333"+this.state.listForRender)
  }

  render() {

    console.log("Page_About is render");
    if (this.props.status !== 3) {
      return <Loader />
    } else {

      let listOfAllSongs = this.makeNewList().map((song, i) => {
        return <Track key={song.code} info={song} workMode={"allSongs"} cardMode={"fullMode"} userPlayList={this.props.userPlayList} disab={this.props.userPlayList.includes(song.code)} cbToAddSong={this.toAddSong} />
      })
      return (


        <div className="pageContainerOfMainPageAboutUS">
          <h1>Hello + {this.props.match.params.list}!</h1>
          <MainPageLinks />
          {listOfAllSongs}
        </div>

      );
    }
  };

}


const mapStateToProps = function (state) {

  return {
    songs: state.allSongs.data,
    status: state.allSongs.status,
    userPlayList: state.playlist.userSongs,
  };
};


export default connect(mapStateToProps)(Page_About);
