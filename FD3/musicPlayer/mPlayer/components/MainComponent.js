import React from 'react';
import PropTypes, { func } from 'prop-types';
//import Track from '../components/track';
import { allSongsLoadingAC, allSongsErrorAC, allSongsSetAC } from "../redux/allSongsAC";

class MainComponent extends React.PureComponent {

    state = {
        allSongs: []
    };

    fetchSuccess = (loadedData) => {
        console.log(loadedData);
        this.setState({
            allSongs: loadedData
        });
    };
    componentDidMount() {
        function sendReques(method, url) {
            const headers = {
                "Content-Tyre": "application/json"
            }

            return fetch(url, {
                method: method,
                headers: headers
            }).then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(error => {
                        const err = new Error(error)
                        err.data = error
                        throw err
                    })
                }
            })
        }

        sendReques("get", "http://localhost:3000/playlist")
            .then(data => {
                this.fetchSuccess(data);
            })
            .catch(err => console.log(err))

    }


    render() {

        return (

            <div></div>
        );

    }

}



export default MainComponent;
