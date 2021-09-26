import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';


import Track from '../components/track';
import songsThunkAC from '../redux/fetchThunk'
//import appData from '../appData';
//let songs = require('../allSongs.json');


class All_Music extends React.PureComponent {

  static propTypes = {
    playlist: PropTypes.object.isRequired,
  };

  // componentDidMount() {
  //   console.log("!!!")
  //   this.props.dispatch(songsThunkAC(this.props.dispatch));
  // }


  render() {
    if (this.props.playlist.status <= 1)
      return "загрузка...";

    if (this.props.playlist.status === 2)
      return "ошибка загрузки данных";

    let listOfAllSongs = this.props.allSongs.map((song, i) => {
      return <Track key={song.code} info={song} />
    })
    return (
      <div className="pageContainerOfMainPage">
        {listOfAllSongs}
      </div>
    );

  }
  // render() {
  //   console.log("Page_All_Music is render");
  //   console.log(this.state);
  //   //console.log(this.state.allSongs)
  //   let listOfAllSongs = this.props.allSongs.map((song, i) => {
  //     return <Track key={song.code} info={song} />
  //   })
  //   return (

  //     <div className="pageContainerOfMainPage">
  //       {listOfAllSongs}
  //     </div>
  //   );

  // }

}

const mapStateToProps = function (state) {
  console.log(state)
  return {
    playlist: state.playlist
  };
};


export default connect(mapStateToProps)(All_Music);
