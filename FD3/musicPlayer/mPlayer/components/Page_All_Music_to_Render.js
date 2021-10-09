//Page_All_Music_to_Render
import React from 'react';
import PropTypes, { func } from 'prop-types';

import Track from '../components/track';
//import "./Page_All_Music.css"


import "../pages/Page_All_Music.css"
class Page_All_Music_to_Render extends React.PureComponent {
    static propTypes = {
        listOfAllSongs: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.number.isRequired,
                isInList: PropTypes.bool.isRequired,
                groupName: PropTypes.string.isRequired,
                songName: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            })
        ),
        filteredString: PropTypes.func,
        clear: PropTypes.func,
        showAll: PropTypes.func,
        setActiv: PropTypes.func,
        setBlock: PropTypes.func,
        filtered: PropTypes.string,
        workMode: PropTypes.string,
        cardMode: PropTypes.string,
        userPlayList: PropTypes.array,
        disab: PropTypes.bool,
        toAddSong: PropTypes.func,
    };

    render() {

        let listAllSongs = this.props.listOfAllSongs.map((song, i) => {
            return <Track key={song.code} info={song} workMode={this.props.workMode} cardMode={this.props.cardMode} userPlayList={this.props.userPlayList} disab={this.props.userPlayList.includes(song.code)} cbToAddSong={this.props.toAddSong} />
        })
        return (

            <div className="pageContainerOfMainPage">
                <div className='btn_All_Music'>
                    <div className="input_text">
                        <input type="text" value={this.props.filtered} onChange={this.props.filteredString} />
                        <input type="button" value="очистить поиск" onClick={this.props.clear} />
                    </div>
                    <div className="input_btn">
                        <input type="button" value="показать все" onClick={this.props.showAll} />
                        <input type="button" value="показать недобавленные" onClick={this.props.setActiv} />
                        <input type="button" value="показать добавленные" onClick={this.props.setBlock} />
                    </div>
                </div>
                {listAllSongs}
            </div>
        );

    };
}
export default Page_All_Music_to_Render;