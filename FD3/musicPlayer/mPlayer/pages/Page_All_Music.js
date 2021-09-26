import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';


import Track from '../components/track';
//import songsThunkAC from '../redux/fetchThunk'
//import appData from '../appData';
//let songs = require('../allSongs.json');

class All_Music extends React.PureComponent {

  static propTypes = {
    songs: PropTypes.array.isRequired,
  };

  // componentDidMount() {
  //   console.log("!!!")
  //   this.props.dispatch(songsThunkAC(this.props.dispatch));
  // }


  render() {
    let listOfAllSongs = this.props.songs.map((song, i) => {
      return <Track key={song.code} info={song} />
    })
    return (
      <div className="pageContainerOfMainPage">
        {listOfAllSongs}
      </div>
    );
  //  console.log(this.props.allSongs.data.palylist)
  //   let listOfAllSongs = this.props.allSongs.data.palylist.map((song, i) => {
  //     return <Track key={song.code} info={song} />
  //   })
  //   return (
  //     <div className="pageContainerOfMainPage">
  //       {listOfAllSongs}
  //     </div>
  //   );

  // return  <h1>hello</h1>

  //return <Track key={this.props.allSongs.data.palylist[1].code} info={this.props.allSongs.data.palylist[1]}/>
  };
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
 
  return {
    songs: state.allSongs.data
  };
};


export default connect(mapStateToProps)(All_Music);
