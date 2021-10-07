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
    state={
        
        classNameIs1:"container_track",
        classNameIs2:"shortMode_track"
    }

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

    // addToPL = () => {
    //     this.props.dispatch(changeInList(this.props.info.code));
    // }

    btnClickToAdd = () => {
        //console.log(this.props.info.code)
        this.props.cbToAddSong(this.props.info.code);
    }
    btnClickToDelete = () => {
        //console.log(this.props.info.code)
        // this.setState({classNameIs:"to_delete_track"})
        //this.setState({classNameIs1:"to_delete_track"})
        this.setState({classNameIs2:"shortMode_container_track", audioTag:false})



        setTimeout(() => {
            this.props.cbToDeleteSong(this.props.info.code);
        },900);

    }

    render() {
        console.log("Track is render");
       // console.log(this.props.lengthOfList);
        //console.log(this.props.disab);
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
                        controls
                        src={this.props.info.url}>
                    </audio></div>

                    {this.props.workMode === "allSongs" && <div className="for_input_track">  <input type="button" value="add to my play-list" disabled={(this.props.disab)} onClick={this.btnClickToAdd} /></div>}
                    {this.props.workMode === "PlayList" && <div className="for_input_track"> <input type="button" value="delete" onClick={this.btnClickToDelete} /></div>}
                </div>}

            </div>
        )



    }
}
// const mapStateToProps = function (state) {
//     return {

//     };
//   };
export default Track;