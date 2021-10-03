import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_About from './Page_About';

class MainPageRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={Page_About} />
        <Route path="/:list" component={Page_About} />
      </div>
    );
    
  }

}
    
export default MainPageRouter;
    