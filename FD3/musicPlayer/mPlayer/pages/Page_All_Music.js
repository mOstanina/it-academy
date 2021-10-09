import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


import { toAddSongInNewPL } from "../redux/playlistReducerAC"
import Track from '../components/track';
import Loader from '../components/Loader'
import Page_All_Music_to_Render from '../components/Page_All_Music_to_Render'
 import "./Page_All_Music.css"

import { showAdded } from '../modules/showAdded';
import { showBlocked } from '../modules/showBlocked';

class All_Music extends React.PureComponent {

  static propTypes = {
    songs: PropTypes.array,
    status: PropTypes.number.isRequired,
    userPlayList: PropTypes.array,
  };

  state = {
    songs: this.props.songs,
    status: this.props.status,
    userPlayList: this.props.userPlayList,
    filtered: "",
  };

  componentWillReceiveProps = (newProps) => { // пришедшие из AJAX и REDUX пропсы, устанавливаю в стейт
    this.setState({
      songs: newProps.songs,
      status: newProps.status,
      userPlayList: newProps.userPlayList,
    });
    //console.log(this.state.songs)
  };
  toAddSong = (code) => { //показать все песни
    this.props.dispatch(toAddSongInNewPL(code));
  }
  showAll = () => {
    //console.log(this.props.songs)
    this.setState({ songs: this.props.songs });
  }

  setActiv = () => {// выбраны только активные клиенты
    let listBlockSongs = showAdded(this.props.songs, this.props.userPlayList)
    this.setState({ songs: listBlockSongs });
  };

  setBlock = () => {     // выбраны добавленные песни
    let listBlockSongs = showBlocked(this.props.songs, this.props.userPlayList) //передаю из пропсов все песни и массив песен из плей-листа пользователя
    this.setState({ songs: listBlockSongs });
  }

  processList = () => { // фильтрую список песен в зависимости от того, что введено в инпут
    let resultList = [...this.props.songs];
    if (this.state.filtered) {
      let userFilter = this.state.filtered.toUpperCase()
      resultList = resultList.filter(function (i) {
        // console.log(i.groupName)
        // console.log(userFilter)
        return i.groupName[0].indexOf(userFilter) != -1
      })
    } else {
      //console.log("22")
      resultList = this.props.songs.slice();
    }
    //console.log(resultList)
    this.setState({ songs: resultList });
  }
  filteredString = (EO) => { // получаю содержимое инпута
    this.setState({ filtered: EO.target.value }, this.processList);
  }
  clear = () => { // кнопка ОЧИСТИТЬ 
    this.setState({ filtered: "" });
    this.setState({ songs: this.props.songs });
  }
  render() {

    if (this.state.status !== 3) {
      return <Loader />
    } else {
      
      return (

        <div className="pageContainerOfMainPage">
          <Page_All_Music_to_Render
            listOfAllSongs={ this.state.songs}
            filteredString={this.filteredString }
            clear={ this.clear}
            showAll={this.showAll }
            setActiv={ this.setActiv}
            setBlock={ this.setBlock}
            filtered={this.state.filtered }
            workMode={ "allSongs"}
            cardMode={"shortMode" }
            userPlayList={ this.props.userPlayList}
            toAddSong={ this.toAddSong}
          />
        </div>
      );
    }
  };
}

const mapStateToProps = function (state) {
 // console.log("All_Music");
  return {
    songs: state.allSongs.data,
    status: state.allSongs.status,
    userPlayList: state.playlist.userSongs,
  };
};


export default connect(mapStateToProps)(All_Music);
