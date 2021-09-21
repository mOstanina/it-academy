import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <div className="pageContainer">
        <span>__mPlayer__</span>
        <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink>
        <NavLink to="/allMusic" className="PageLink" activeClassName="ActivePageLink">Все композиции</NavLink>
        <NavLink to="/playList" className="PageLink" activeClassName="ActivePageLink">Ваш плей-лист</NavLink>
      </div>
    );
    
  }

}
    
export default PagesLinks;
    