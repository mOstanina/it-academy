import React from 'react';
import PropTypes from 'prop-types';
import Track from '../components/track';
import { allSongsLoadingAC, allSongsErrorAC, allSongsSetAC } from "../redux/allSongsAC";
import { initializeApp } from "firebase/app";
//import appData from '../appData';
//let songs = require('../allSongs.json');

const firebaseConfig = {
  apiKey: "AIzaSyCXtjuPH_i6kW2dQum3zfpKz_MS9wZ1Y4g",
  authDomain: "mplayeros.firebaseapp.com",
  databaseURL: "https://mplayeros-default-rtdb.firebaseio.com",
  projectId: "mplayeros",
  storageBucket: "mplayeros.appspot.com",
  messagingSenderId: "455060078701",
  appId: "1:455060078701:web:f942f6a92ceca38295bf64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class All_Music extends React.PureComponent {

  static propTypes = {
    allSongs: PropTypes.array
  }
  componentDidMount() {

    this.props.dispatch(allSongsLoadingAC()); // переводим раздел allSongs стора в состояние "загружается"

    isoFetch("https://mplayeros-default-rtdb.firebaseio.com/allSongs.ison")
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
        this.props.dispatch(allSongsSetAC(data.rows)); // переводим раздел allSongs стора в состояние "ошибка"
      })
      .catch((error) => {
        console.error(error);
        this.props.dispatch(allSongsErrorAC()); // переводим раздел allSongs стора в состояние "ошибка"
      })
      ;

  }


  render() {

    if (this.props.allSongs.status <= 1)
      return "загрузка...";

    if (this.props.allSongs.status === 2)
      return "ошибка загрузки данных";


    let listOfAllSongs = this.state.songsList.map((song, i) => {
      return <Track key={song.code} info={song} />
    })
    return (

      <div className="pageContainerOfMainPage">
        {listOfAllSongs}
      </div>
    );

  }

}

  // state = {
  //   songsList: songs
  // };
  // render() {


  //   let listOfAllSongs = this.state.songsList.map((song, i) => {
  //     return <Track key={song.code} info={song} />
  //   })
  //   return (

  //     <div className="pageContainerOfMainPage">
  //       {listOfAllSongs}
  //     </div>
  //   );

  // }



export default All_Music;
