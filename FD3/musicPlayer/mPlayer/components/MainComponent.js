import React from 'react';
import PropTypes, { func } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import isoFetch from 'isomorphic-fetch';

import PagesRouter from '../pages/PagesRouter';
import PagesLinks from '../pages/PagesLinks';
import combinedReducer from '../redux/reducers'

import { allSongsLoadingAC, allSongsErrorAC, allSongsSetAC, } from "../redux/allSongsAC";
import { userSongsLoadingAC, userSongsErrorAC, userSongsSetAC, } from "../redux/playlistReducerAC";
//import {local_PL_create} from "../redux/playlistReducerAC"
// let store = createStore(combinedReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// //

class MainComponent extends React.PureComponent {

    componentDidMount() {
        //console.log("!!!")
        this.props.dispatch(allSongsLoadingAC()); // переводим раздел countries стора в состояние "загружается"

        isoFetch("http://localhost:3000/playlist", {
            method: 'get',
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
            .then((data) => {
                console.log(data)
                this.props.dispatch(allSongsSetAC(data)); // переводим раздел countries стора в состояние "ошибка"
            })
            .catch((error) => {
                console.error(error);
                this.props.dispatch(allSongsErrorAC()); // переводим раздел countries стора в состояние "ошибка"
            });
            //this.props.dispatch( local_PL_create() );
///////////////
        this.props.dispatch(userSongsLoadingAC()); // переводим раздел countries стора в состояние "загружается"

        isoFetch("http://localhost:3000/userPlaylist", {
            method: 'get',
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
            .then((userSongs) => {
                console.log(userSongs)
                this.props.dispatch(userSongsSetAC(userSongs)); // переводим раздел countries стора в состояние "ошибка"
            })
            .catch((error) => {
                console.error(error);
                this.props.dispatch(userSongsErrorAC()); // переводим раздел countries стора в состояние "ошибка"
            });
           // this.props.dispatch( local_PL_create() );
            }

    // oooooo = () => {
    //     let list={ 
    //         "playlist":[
    //         {"code": 1, "isInList":true, "groupName": "4 Non Blondes","songName": "What's Up",  "url":"../songs/4 Non Blondes - What's Up.mp3"},
    //         {"code": 2, "isInList":true, "groupName": "Aerosmith","songName": "Amazing",  "url":"../songs/Aerosmith - Amazing.mp3"},
    //         {"code": 3, "isInList":true, "groupName": "Aerosmith","songName": "Pink",  "url":"../songs/Aerosmith - Pink.mp3"},
    //         {"code": 4, "isInList":true, "groupName": "Billy Joel","songName": "We Didn't Start The Fire",  "url":"../songs/Billy Joel - We Didn't Start The Fire.mp3"},
    //         {"code": 5, "isInList":true, "groupName": "Bruce Springsteen","songName": "Streets Of Philadelphia",  "url":"../songs/Bruce Springsteen - Streets Of Philadelphia.mp3"},
    //         {"code": 6, "isInList":true, "groupName": "Caesars","songName": "Jerk It Out",  "url":"../songs/Caesars - Jerk It Out (Original Mix).mp3"},
    //         {"code": 7, "isInList":true, "groupName": "Chris Rea","songName": "Looking For The Summer",  "url":"../songs/Chris Rea - Looking For The Summer.mp3"},
    //         {"code": 8, "isInList":true, "groupName": "Chris Rea","songName": "The Road To Hell",  "url":"../songs/Chris Rea - The Road To Hell.mp3"},
    //         {"code": 9, "isInList":true, "groupName": "Crowded House","songName": "Don't Dream It's Over",  "url":"../songs/Crowded House - Don't Dream It's Over.mp3"},
    //         {"code": 10, "isInList":true, "groupName": "David Bowie","songName": "Let's Dance (Single Version)",  "url":"../songs/David Bowie - Let's Dance (Single Version).mp3"},
    //         {"code": 11, "isInList":true, "groupName": "Depeche Mode","songName": "Enjoy The Silence",  "url":"../songs/Depeche Mode - Enjoy The Silence (Single Version).mp3"},
    //         {"code": 12, "isInList":true, "groupName": "Eagle-Eye","songName": "Save Tonight",  "url":"../songs/Eagle-Eye Cherry - Save Tonight.mp3"},
    //         {"code": 13, "isInList":true, "groupName": "Eric Clapton","songName": "Change The World ",  "url":"../songs/Eric Clapton - Change The World.mp3"},
    //         {"code": 15, "isInList":true, "groupName": "Eric Clapton","songName": "Layla",  "url":"../songs/Eric Clapton - Layla (Unplugged Version).mp3"},
    //         {"code": 16, "isInList":true, "groupName": "Europe","songName": "Carrie",  "url":"../songs/Europe - Carrie.mp3"},
    //         {"code": 17, "isInList":true, "groupName": "Europe","songName": "Rock The Night",  "url":"../songs/Europe - Rock The Night.mp3"},
    //         {"code": 18, "isInList":true, "groupName": "Foreigner","songName": "Cold As Ice",  "url":"../songs/Foreigner - Cold As Ice.mp3"},
    //         {"code": 19, "isInList":true, "groupName": "Genesis","songName": "I Can't Dance",  "url":"../songs/Genesis - I Can't Dance.mp3"},
    //         {"code": 20, "isInList":true, "groupName": "Guns'n'roses","songName": "November Rain",  "url":"../songs/Guns N Roses - November Rain.mp3"},
    //         {"code": 21, "isInList":true, "groupName": "Guns'n'roses","songName": "Don't You Cry",  "url":"../songs/Guns'n'roses - Don't You Cry.mp3"},
    //         {"code": 22, "isInList":true, "groupName": "Kansas","songName": "Dust In The Wind",  "url":"../songs/Kansas - Dust In The Wind.mp3"},
    //         {"code": 23, "isInList":true, "groupName": "Kiss","songName": "I Was Made For Lovin' You",  "url":"../songs/Kiss - I Was Made For Lovin' You.mp3"},
    //         {"code": 24, "isInList":true, "groupName": "Muse","songName": "Undisclosed Desires",  "url":"../songs/Muse - Undisclosed Desires.mp3"},
    //         {"code": 25, "isInList":true, "groupName": "Muse","songName": "Supermassive Black Hole",  "url":"../songs/Muse - Supermassive Black Hole.mp3"},
    //         {"code": 26, "isInList":true, "groupName": "Nickelback","songName": "If Everyone Cared",  "url":"../songs/Nickelback - If Everyone Cared.mp3"},
    //         {"code": 27, "isInList":true, "groupName": "Nickelback","songName": "Rockstar",  "url":"../songs/Nickelback - Rockstar.mp3"},
    //         {"code": 28, "isInList":true, "groupName": "Nickelback","songName": "Savin' Me",  "url":"../songs/Nickelback - Savin' Me.mp3"},
    //         {"code": 29, "isInList":true, "groupName": "Oasis","songName": "Wonderwall",  "url":"../songs/Oasis - Wonderwall.mp3"},
    //         {"code": 30, "isInList":true, "groupName": "Ozzy Osbourne","songName": "Mama, I'm Coming Home",  "url":"../songs/Ozzy Osbourne - Mama, I'm Coming Home.mp3"},
    //         {"code": 31, "isInList":true, "groupName": "Paul McCartney","songName": "Mrs Vandebilt",  "url":"../songs/Paul McCartney - Mrs Vandebilt.mp3"},
    //         {"code": 32, "isInList":true, "groupName": "Phil Collins","songName": "In The Air Tonight",  "url":"../songs/Phil Collins - In The Air Tonight.mp3"},
    //         {"code": 33, "isInList":true, "groupName": "Queen","songName": "Killer Queen",  "url":"../songs/Queen - Killer Queen.mp3"},
    //         {"code": 34, "isInList":true, "groupName": "R.E.M.","songName": "Losing My Religion",  "url":"../songs/R.E.M. - Losing My Religion.mp3"},
    //         {"code": 35, "isInList":true, "groupName": "Radiohead","songName": "Creep",  "url":"../songs/Radiohead - Creep.mp3"},
    //         {"code": 36, "isInList":true, "groupName": "Radiohead","songName": "Karma Police",  "url":"../songs/Radiohead - Karma Police.mp3"},
    //         {"code": 37, "isInList":true, "groupName": "Red Hot Chili Peppers","songName": "Road Tripping",  "url":"../songs/Red Hot Chili Peppers - Road Tripping.mp3"},  
    //         {"code": 38, "isInList":true, "groupName": "Red Hot Chili Peppers","songName": "Scar Tissue",  "url":"../songs/Red Hot Chili Peppers - Scar Tissue.mp3"},
    //         {"code": 39, "isInList":true, "groupName": "Scorpions","songName": "White Dove",  "url":"../songs/Scorpions - White Dove.mp3"},
    //         {"code": 40, "isInList":true, "groupName": "Scorpions","songName": "Send Me An Angel",  "url":"../songs/Scorpions - Send Me An Angel.mp3"},
    //         {"code": 41, "isInList":true, "groupName": "Smokie","songName": "Have You Ever Seen The Rain",  "url":"../songs/Smokie - Have You Ever Seen The Rain.mp3"},
    //         {"code": 42, "isInList":true, "groupName": "Soul Asylum","songName": "Runaway Train",  "url":"../songs/Soul Asylum - Runaway Train.mp3"},
    //         {"code": 43, "isInList":true, "groupName": "Spin Doctors","songName": "Two Princes",  "url":"../songs/Spin Doctors - Two Princes.mp3"},
    //         {"code": 44, "isInList":true, "groupName": "Status Quo","songName": "In The Army Now",  "url":"../songs/Status Quo - In The Army Now.mp3"},
    //         {"code": 45, "isInList":true, "groupName": "Stereophonics","songName": "Maybe Tomorrow",  "url":"../songs/Stereophonics - Maybe Tomorrow.mp3"},
    //         {"code": 46, "isInList":true, "groupName": "System Of A Dow","songName": "Lonely Day",  "url":"../songs/System Of A Down - Lonely Day.mp3"},
    //         {"code": 47, "isInList":true, "groupName": "The Beatles","songName": "Come Together",  "url":"../songs/The Beatles - Come Together.mp3"},
    //         {"code": 48, "isInList":true, "groupName": "The Beatles","songName": "Yesterday",  "url":"../songs/The Beatles - Yesterday.mp3"},
    //         {"code": 49, "isInList":true, "groupName": "The Beatles","songName": "Let It Be", "url":"../songs/The Beatles - Let It Be.mp3"},
    //         {"code": 50, "isInList":true, "groupName": "The Cranberries","songName": "Animal Instinct",  "url":"../songs/The Cranberries - Animal Instinct.mp3"},
    //         {"code": 51, "isInList":true, "groupName": "The Offspring","songName": "You're Gonna Go Far, Kid",  "url":"../songs/The Offspring - You're Gonna Go Far, Kid.mp3"},
    //         {"code": 52, "isInList":true, "groupName": "The Rolling Stones","songName": "Anybody Seen My Baby",  "url":"../songs/The Rolling Stones - Anybody Seen My Baby.mp3"},
    //         {"code": 53, "isInList":true, "groupName": "The Stranglers","songName": "Golden Brown",  "url":"../songs/The Stranglers - Golden Brown.mp3"},
    //         {"code": 54, "isInList":true, "groupName": "U2","songName": "Beautiful Day",  "url":"../songs/U2 - Beautiful Day.mp3"},
    //         {"code": 55, "isInList":true, "groupName": "Ufo","songName": "Belladonna",  "url":"../songs/Ufo - Belladonna.mp3"},
    //         {"code": 56, "isInList":true, "groupName": "Van Halen","songName": "Can't stop lovin you",  "url":"../songs/Van Halen - Can't stop lovin you.mp3"}
    //     ]
    //     }
    //     this.props.dispatch(allSongsSetAC(list));
    // }

    render() {
        //console.log("MainComponent is render");
        return (

            <BrowserRouter>
                <div>
                    <PagesLinks />
                    <PagesRouter />
                    {/* <input type='button' value='ooooo' onClick={this.oooooo} /> */}
                </div>
            </BrowserRouter>

        );

    }

}

const mapStateToProps = function (state) {
    //console.log(state)
    return {
        state
    };
};

export default connect(mapStateToProps)(MainComponent);
