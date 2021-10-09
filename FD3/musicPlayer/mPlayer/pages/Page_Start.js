import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toAddSongInNewPL } from "../redux/playlistReducerAC"
import Track from '../components/track';
import { changeInList } from "../redux/allSongsAC";
import { withRouter } from 'react-router-dom';
import './Page_Start.css';
import MainPageLinks from "./MainPageLinks"
import MainPageRouter from "./MainPageRouter"
import { BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Loader from '../components/Loader'

class Page_Start extends React.Component {

  static propTypes = {
    songs: PropTypes.array,
    status: PropTypes.number.isRequired,
    userPlayList: PropTypes.array,
  };




  render() {


    return (


      <div className="pageContainerOfMainPageAboutUS">
        <div className="div_Page_Start">
          <h1>Добро пожаловать на старницу нашего аудио-плеера !!!!!!</h1>
          <p>Вы можете создать собственный плей-лист из представленных композиций</p>
        </div>

      </div>

    );

  };

}


const mapStateToProps = function (state) {
  //console.log("Page_Start is render");
  return {
    songs: state.allSongs.data,
    status: state.allSongs.status,
    userPlayList: state.playlist.userSongs,
  };
};


export default withRouter(connect(mapStateToProps)(Page_Start));
