import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';

import {toDeleteSongInNewPL} from "../redux/playlistReducerAC"
import Track from '../components/track';


class Your_PlayList extends React.PureComponent {
    static propTypes = {
        songs: PropTypes.array,
        status: PropTypes.number.isRequired,
        localPList: PropTypes.array,
    };
    toDeleteSong= (code) => {
       // console.log(code)
        this.props.dispatch( toDeleteSongInNewPL(code) );
      }
    render() {
        //console.log(this.props.localPList)
        if (this.props.status !== 3) {
            return <div>крутёлка с загрузкой</div>
        } if (this.props.localPList.length === 0 && this.props.status === 3) {
            return <div>добавьте песни из основного списка на вкладке "Все композиции"</div>
        } else {
            let vvv = [...this.props.localPList]
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
                    <Track key={song.code} info={song} workMode={"PlayList"} cbToDeleteSong={this.toDeleteSong}/>
                )
            })
            return (
                <div className="pageContainerOfMainPage">

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
        localPList: state.playlist.localPL,
    };
};


export default connect(mapStateToProps)(Your_PlayList);