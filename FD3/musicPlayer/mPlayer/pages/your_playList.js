import React from 'react';

//import MobileClientInfo from '../components/MobileClientInfo';

//import appData from '../appData';

class Your_PlayList extends React.PureComponent {

    render() {
        return (
            <div className="pageContainerOfMainPage">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>

                </ul>
                <audio
                    controls
                    src="../songs/The Beatles - Let It Be.mp3">
                </audio>



            </div>
        );


    }

}

export default Your_PlayList;