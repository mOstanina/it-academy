import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


import { toAddSongInNewPL } from "../redux/playlistReducerAC"
import Track from '../components/track';
import Loader from '../components/Loader'
import "./Page_All_Music.css"


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
    console.log(this.state.songs)
  };
  toAddSong = (code) => { //показать все песни
    this.props.dispatch(toAddSongInNewPL(code));
  }
  showAll = () => {
    console.log(this.props.songs)
    this.setState({ songs: this.props.songs });
  }
  showAdded = () => { //показать недобавленные в плей-лист
    let listOfAddedSongs = [...this.props.songs]
    let userPL = this.props.userPlayList
    //console.log(userPL)
    listOfAddedSongs = listOfAddedSongs.filter(function (i) {
      console.log(i.code)
      return !userPL.includes(i.code)
    })
    //console.log(listOfAddedSongs)
    this.setState({ songs: listOfAddedSongs });
  }
  showBlocked = () => { // показать добавленные в плей-лист
    let listOfAddedSongs = [...this.props.songs]
    let userPL = this.props.userPlayList
    //console.log(userPL)
    listOfAddedSongs = listOfAddedSongs.filter(function (i) {
      console.log(i.code)
      return userPL.includes(i.code)
    })
    //console.log(listOfAddedSongs)
    this.setState({ songs: listOfAddedSongs });
  }

  processList = () => { // фильтрую список песен в зависимости от того, что введено в инпут
    let resultList = [...this.props.songs];
    if (this.state.filtered) {
      // console.log("11")
      // console.log(resultList)
      let userFilter = this.state.filtered.toUpperCase()
      resultList = resultList.filter(function (i) {
        console.log(i.groupName)
        console.log(userFilter)
        return i.groupName[0].indexOf(userFilter) != -1
      })

      // resultList = resultList.filter((r) => r.indexOf(this.state.filtered) != -1);
    } else {
      console.log("22")
      resultList = this.props.songs.slice();
    }
    // if (this.state.sorted) {
    //   resultList.sort();
    // }
    console.log(resultList)
    this.setState({ songs: resultList });
  }
  filteredString = (EO) => { // получаюсодержимое инпута
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
      let listOfAllSongs = this.state.songs.map((song, i) => {
        return <Track key={song.code} info={song} workMode={"allSongs"} cardMode={"shortMode"} userPlayList={this.props.userPlayList} disab={this.props.userPlayList.includes(song.code)} cbToAddSong={this.toAddSong} />
      })
      return (

        <div className="pageContainerOfMainPage">
          <div className='btn_All_Music'>
            <div className="input_text">
              <input type="text" value={this.state.filtered} onChange={this.filteredString} />
              <input type="button" value="очистить поиск" onClick={this.clear} />
            </div>
            <div className="input_btn">
              <input type="button" value="показать все" onClick={this.showAll} />
              <input type="button" value="показать недобавленные" onClick={this.showAdded} />
              <input type="button" value="показать добавленные" onClick={this.showBlocked} />
            </div>
          </div>
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
