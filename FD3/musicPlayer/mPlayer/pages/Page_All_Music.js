import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { toAddSongInNewPL } from "../redux/playlistReducerAC"
import Track from '../components/track';
import Loader from '../components/Loader'

class All_Music extends React.PureComponent {

  static propTypes = {
    songs: PropTypes.array,
    status: PropTypes.number.isRequired,
    userPlayList: PropTypes.array,
  };

  state = {
    songsList: [],
  };

  toAddSong = (code) => {
    this.props.dispatch(toAddSongInNewPL(code));
  }
  render() {

    if (this.props.status !== 3) {
      return <Loader />
    } else {
      let listOfAllSongs = this.props.songs.map((song, i) => {
        return <Track key={song.code} info={song} workMode={"allSongs"} cardMode={"shortMode"} userPlayList={this.props.userPlayList} disab={this.props.userPlayList.includes(song.code)} cbToAddSong={this.toAddSong} />
      })
      return (
        <div className="pageContainerOfMainPage">
          {listOfAllSongs}
        </div>
      );
    }
  };
}

const mapStateToProps = function (state) {
  console.log("All_Music");
  return {
    songs: state.allSongs.data,
    status: state.allSongs.status,
    userPlayList: state.playlist.userSongs,
  };
};


export default connect(mapStateToProps)(All_Music);
