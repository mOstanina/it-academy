import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MainPageLinks from './MainPageLinks'
import './PagesLinks.css';

class PagesLinks extends React.Component {
  state = {
    menuActiv: false,
  }
  setMenuActive = () => {
    let isMenuActive = this.state.menuActiv
    this.setState({ menuActiv: !isMenuActive })
  }
  render() {

    return (
      <div>
        <div className="btn-row">
        <div className="logo"><span>__mPlayer__</span></div>
          <div className="btn" onClick={this.setMenuActive}>
            <div className="btn-burger"> <span /></div>
          </div>
        </div>
        <nav className="pageContainer">
          <span>__mPlayer__</span>
          <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink" >Главная</NavLink>
          <NavLink to="/mainPlayList" className="PageLink" activeClassName="ActivePageLink">Плейлист</NavLink>
          <NavLink to="/allMusic" className="PageLink" activeClassName="ActivePageLink">Все композиции</NavLink>
          <NavLink to="/playList" className="PageLink" activeClassName="ActivePageLink">Ваш плей-лист</NavLink>
        </nav>
        <nav className={this.state.menuActiv ? " btn-burger_pageContainer btn-burger_pageContainer_active" : "btn-burger_pageContainer"}>
          
          <ul>
            <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink" onClick={this.setMenuActive}>Главная</NavLink></li>
            <li><NavLink to="/mainPlayList" className="PageLink" activeClassName="ActivePageLink" onClick={this.setMenuActive}>Плейлист</NavLink></li>
            <li><NavLink to="/allMusic" className="PageLink" activeClassName="ActivePageLink" onClick={this.setMenuActive}>Все композиции</NavLink></li>
            <li><NavLink to="/playList" className="PageLink" activeClassName="ActivePageLink" onClick={this.setMenuActive}>Ваш плей-лист</NavLink></li>
          </ul>
        </nav>
      </div>
    );

  }

}

export default PagesLinks;
