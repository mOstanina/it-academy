import React from 'react';
import Track from '../components/track';
//import MobileClientInfo from '../components/MobileClientInfo';

//import appData from '../appData';
let songs = require('../allSongs.json');

class All_Music extends React.PureComponent {
  state = {
    songsList: songs
  };
  render() {

    // var clientsCode = this.state.clientsForRender.map(client => {
    //   return <MobileClient key={client.id} id={client.id} info={client} />;
    // }
    // );

    let listOfAllSongs = this.state.songsList.map((song, i) => {
      return <Track key={song.code} info={song} />
    })
    return (

      <div className="pageContainerOfMainPage">
        {listOfAllSongs}
      </div>
    );
    // // раз написано <Route path="/client/:clid" component={Page_Client} />
    // // значит Page_Client получит то что в УРЛе после /client/ под именем props.match.params.clid в виде строки
    // let clientId=parseInt(this.props.match.params.clid);

    // let clientData=appData.clientsArr.find( c => c.id==clientId );

    // return (
    //   <MobileClientInfo
    //     info={clientData}
    //   />
    // );

  }

}

export default All_Music;
