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
import './MainComponent.css';
import { allSongsLoadingAC, allSongsErrorAC, allSongsSetAC, } from "../redux/allSongsAC";
import { userSongsLoadingAC, userSongsErrorAC, userSongsSetAC, } from "../redux/playlistReducerAC";


class MainComponent extends React.PureComponent {

    componentDidMount() {
        ///////// окно предупрежения об обновлении
        // window.addEventListener("beforeunload", (ev) => 
        // {  
        //     ev.preventDefault();
        //     return ev.returnValue = 'Are you sure you want to close?';
        // });
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
                // console.log(data)
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
                // console.log(userSongs)
                this.props.dispatch(userSongsSetAC(userSongs)); // переводим раздел countries стора в состояние "ошибка"
            })
            .catch((error) => {
                //console.error(error);
                this.props.dispatch(userSongsErrorAC()); // переводим раздел countries стора в состояние "ошибка"
            });
        // this.props.dispatch( local_PL_create() );
    }

    render() {
        //console.log("MainComponent is render");
        return (

            <BrowserRouter>
                <div className="mainComponent_container">
                    <PagesLinks />
                    <PagesRouter />
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
