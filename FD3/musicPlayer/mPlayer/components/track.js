import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from './events';

class Track extends React.PureComponent {
    static propTypes = {
        // workMode: PropTypes.number.isRequired, //передаю режим отображения крточки: редактирование / добавление
        info: PropTypes.shape({
            code: PropTypes.number,
            groupName: PropTypes.string,
            songName: PropTypes.string,
            url: PropTypes.string,
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

    render() {
        console.log("Track is render");
        return (
            <div>
                <div className="songName"> <span className="songN">{this.props.info.groupName} {"-" + this.props.info.songName}</span> 
                    <audio
                        controls
                        src={this.props.info.url}>
                    </audio>
                </div>

            </div>
        )

    }
}
export default Track;