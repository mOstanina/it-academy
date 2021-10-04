import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Page_About from './Page_About';
import All_Music from './Page_All_Music';
import Your_PlayList from './your_playList'
import Page_Start from './Page_Start'
//import MainPageRouter from './MainPageRouter'
class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_Start} />
        <Route path="/mainPlayList" exact component={Page_About} />
        <Route path="/allMusic" component={All_Music} />
        <Route path="/playList" component={Your_PlayList} />

        <Route path="/mainPlayList/:list" render={(props) => <Page_About {...props}/>} />
       
      </div>
    );
  
  }
}
    // <Redirect to="/"/>
export default withRouter(PagesRouter);
    