import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import { toDeleteSongInNewPL, toSaveUserPLInAjax } from "../redux/playlistReducerAC"
import Track from '../components/track';
import Loader from '../components/Loader'

class Your_PlayList extends React.PureComponent {
    static propTypes = {
        songs: PropTypes.array,
        status: PropTypes.number.isRequired,
        userPlaylist: PropTypes.array,
        userPlaylistStatus: PropTypes.number.isRequired,
    };
    toDeleteSong = (code) => {
        // console.log(code)
        this.props.dispatch(toDeleteSongInNewPL(code));
    }
    toSave = () => {
        console.log("!!!!")
        console.log("!!!!"+this.props.userPlaylist)
        this.props.dispatch(toSaveUserPLInAjax(this.props.userPlaylist));
  
        isoFetch("http://localhost:3000/userPlaylist/", {
          method: 'post',
          body: JSON.stringify(this.props.userPlaylist),
          headers: {
            "Content-Type": "application/json",
          },
      })
          .then((response) => { // response - HTTP-ответ
              if (!response.ok) {
                  let Err = new Error("fetch error " + response.status);
                  Err.userMessage = "Ошибка связи";
                  throw Err;
              }
              else
                  return response.json();
          })
        //   .then((userSongs) => {
        //       console.log(userSongs)
        //       this.props.dispatch(userSongsSetAC(userSongs)); // переводим раздел countries стора в состояние "ошибка"
        //   })
        //   .catch((error) => {
        //       console.error(error);
        //       this.props.dispatch(userSongsErrorAC()); // переводим раздел countries стора в состояние "ошибка"
        //   });
    
      }
    render() {
        //console.log(this.props.userPlaylist)
        if (this.props.userPlaylistStatus !== 3) {
            return <Loader/>
        } if (this.props.userPlaylist.length === 0 && this.props.userPlaylistStatus === 3) {
            return <div>добавьте песни из основного списка на вкладке "Все композиции"</div>
        } else {
            let vvv = [...this.props.userPlaylist]
            let ttt = [...this.props.songs]
            let ddd = []
            ttt.forEach(function (item, i, arr) {
                if (vvv.includes(item.code)) {
                    ddd = [...ddd, item]
                }
            })
            //console.log(ddd)

            let EnewListOfAllSongs = ddd.map((song, i) => {
                return (
                    <Track key={song.code} info={song} workMode={"PlayList"} cardMode={"shortMode"} cbToDeleteSong={this.toDeleteSong} />
                )
            })
            return (
                <div className="pageContainerOfMainPage">
                    
                    <div className="save_btn"> <input type="button" value="save my play-list" onClick={this.toSave} /></div>
                    {EnewListOfAllSongs}
                </div>
            );
        }
    };
}

const mapStateToProps = function (state) {

    return {
        songs: state.allSongs.data,
        status: state.allSongs.status,
        userPlaylist: state.playlist.userSongs,
        userPlaylistStatus: state.playlist.status,
    };
};


export default connect(mapStateToProps)(Your_PlayList);