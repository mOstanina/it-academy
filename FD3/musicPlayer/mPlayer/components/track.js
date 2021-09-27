import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mobileEvents } from './events';

import './track.css';

class Track extends React.PureComponent {
    static propTypes = {
        workMode: PropTypes.string.isRequired, //передаю режим отображения крточки: "PlayList" или "allSongs"
        info: PropTypes.shape({
            code: PropTypes.number,
            groupName: PropTypes.string,
            songName: PropTypes.string,
            url: PropTypes.string,
            isInList: PropTypes.bool,
        })
    };

    // newFamRef = null;
    // setNewFamRef = (ref) => {
    //     this.newFamRef = ref;
    // };

    // newImRef = null;
    // setNewImRef = (ref) => {
    //     this.newImRef = ref;
    // };

    // newOtchRef = null;
    // setNewOtchRef = (ref) => {
    //     this.newOtchRef = ref;
    // };

    // newBalanceRef = null;
    // setNewBalanceRef = (ref) => {
    //     this.newBalanceRef = ref;
    // };

    // setNewInfo = () => {
    //     let newInfCl = {
    //         id: this.props.info.id,
    //         fam: this.newFamRef.value,
    //         im: this.newImRef.value,
    //         otch: this.newOtchRef.value,
    //         balance: Number(this.newBalanceRef.value),
    //     }
    //     mobileEvents.emit('SaveClient', newInfCl);
    // };
    // cancel = () => {
    //     mobileEvents.emit('Cancel');
    // }

    // {this.props.isInList === true && <input type="button" value="добавить нового клиента" onClick={this.addClient} />}

    addToPL = () => {
        this.props.dispatch(changeInList(this.props.info.code));
    }

    render() {
        console.log("Track is render");

        return (

            <div>
                <div className="songName_track">
                    <div className="for_span_track"> <span className="songN">{this.props.info.groupName} {"-" + this.props.info.songName}</span> </div>
                    <div className="for_audio_track"> <audio
                        controls
                        src={this.props.info.url}>
                    </audio></div>

                    {this.props.workMode === "allSongs" && <div className="for_input_track"> <input type="button" value="add to my play-list" onClick={this.addToPL} /></div>}
                    {this.props.workMode === "PlayList" && <div className="for_input_track"> <input type="button" value="delete" /></div>}
                </div>

            </div>
        )



    }
}
const mapStateToProps = function (state) {
    return {
       
    };
  };
export default connect(mapStateToProps)(Track);