import React from 'react';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';


import Track from '../components/track';


class Your_PlayList extends React.PureComponent {
    static propTypes = {
        songs: PropTypes.array,
        status: PropTypes.number.isRequired
    };
    state = {
        songs: this.props.songs,
    }
    
    render() {
        if (this.props.status !== 3) {
            return <div>крутёлка с загрузкой</div>
        } else {

            let listOfAllSongs = [...this.props.songs]; // копия самого массива клиентов
            let newListOfAllSongs = listOfAllSongs.filter(function (i) {
                //console.log(i.isInList)
                return i.isInList === true
            })

            let EnewListOfAllSongs = newListOfAllSongs.map((song, i) => {
               // console.log(newListOfAllSongs)
                return (
                    <Track key={song.code} info={song} workMode={"PlayList"} />
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
        status: state.allSongs.status
    };
};


export default connect(mapStateToProps)(Your_PlayList);