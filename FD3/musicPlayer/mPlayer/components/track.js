import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mobileEvents } from './events';

import { changeInList } from "../redux/allSongsAC";
import './track.css';

class Track extends React.PureComponent {
    static propTypes = {
        workMode: PropTypes.string.isRequired, //передаю режим отображения крточки: "PlayList" или "allSongs"
        cardMode: PropTypes.string.isRequired,
        info: PropTypes.shape({
            code: PropTypes.number,
            groupName: PropTypes.string,
            songName: PropTypes.string,
            url: PropTypes.string,
            isInList: PropTypes.bool,
        }),
        lengthOfList: PropTypes.number,
        disab: PropTypes.bool,
        cbToAddSong: PropTypes.func,
        cbToDeleteSong: PropTypes.func,
    };
    state = {

        classNameIs1: "container_track",
        classNameIs2: "shortMode_track"
    }


    btnClickToAdd = () => {
        this.props.cbToAddSong(this.props.info.code);
    }
    btnClickToDelete = () => {
        this.setState({ classNameIs2: "shortMode_container_track", audioTag: false })
        setTimeout(() => {
            this.props.cbToDeleteSong(this.props.info.code);
        }, 900);
    }

    render() {
        // console.log("Track is render");

        let sr = "../pictures/vinyl-logo.png"
        return (

            <div className="container_track">
                {this.props.cardMode === "fullMode" && <div className="fullMode_track">
                    <div className="for_full_track">
                        <div className="for_span_track"> <div className="groupN">{this.props.info.groupName} </div>  <div className="songN">{this.props.info.songName}</div> </div>

                        <img src={sr} />
                        {this.props.workMode === "allSongs" && <div className="for_input_track">  <input type="button" value="add to my play-list" disabled={(this.props.disab)} onClick={this.btnClickToAdd} /></div>}
                        {this.props.workMode === "PlayList" && <div className="for_input_track"> <input type="button" value="delete" onClick={this.btnClickToDelete} /></div>}
                    </div>
                </div>}

                {this.props.cardMode === "shortMode" && <div className={this.state.classNameIs2}>
                    <div className="for_span_track"> <span className="songN">{this.props.info.groupName} {"-" + this.props.info.songName}</span> </div>
                    <div className="for_audio_track">   <audio
                        controls ref="audio"
                        src={this.props.info.url}>
                    </audio></div>

                    {this.props.workMode === "allSongs" && <div className="for_input_track">  <input type="button" value="добавить" disabled={(this.props.disab)} onClick={this.btnClickToAdd} /></div>}
                    {this.props.workMode === "PlayList" && <div className="for_input_track"> <input type="button" value="удалить" onClick={this.btnClickToDelete} /></div>}
                </div>}

            </div>
        )



    }
}

export default Track;