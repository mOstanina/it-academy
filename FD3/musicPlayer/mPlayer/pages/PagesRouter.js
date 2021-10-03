import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_About from './Page_About';
import All_Music from './Page_All_Music';
import Your_PlayList from './your_playList'
import MainPageRouter from './MainPageRouter'
class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={MainPageRouter} />
        <Route path="/allMusic" component={All_Music} />
        <Route path="/playList" component={Your_PlayList} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    