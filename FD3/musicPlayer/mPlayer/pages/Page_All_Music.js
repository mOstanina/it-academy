import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';

import {toAddSongInNewPL} from "../redux/playlistReducerAC"
import Track from '../components/track';

class All_Music extends React.PureComponent {

  static propTypes = {
    songs: PropTypes.array,
    status:PropTypes.number.isRequired
  };

  toAddSong= (code) => {
    console.log(code)
    this.props.dispatch( toAddSongInNewPL(code) );
  }


  render() {

    if (this.props.status !== 3) {
      return <div>крутёлка с загрузкой</div>
    } else {
      let listOfAllSongs = this.props.songs.map((song, i) => {
        return <Track key={song.code} info={song} workMode={"allSongs"} cbToAddSong={this.toAddSong}/>
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

  return {
    songs: state.allSongs.data,
    status: state.allSongs.status
  };
};


export default connect(mapStateToProps)(All_Music);
