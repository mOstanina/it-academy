import React from 'react';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';

//import './MainPageLinks.css';
// function List (){
//   const{listNumber} =useParams()
//   return <h1>{listNumber}</h1>
// }

class MainPageLinks extends React.Component {
          
  render() {

    return (
      <div className="pageContainer">
       
        <NavLink to="/0"  className="PageLink" activeClassName="ActivePageLink">1-9</NavLink>
        <NavLink to="/10" className="PageLink" activeClassName="ActivePageLink">10-18</NavLink>
        <NavLink to="/19" className="PageLink" activeClassName="ActivePageLink">19-27</NavLink>
        <NavLink to="/28" className="PageLink" activeClassName="ActivePageLink">28-36</NavLink>
        <NavLink to="/37" className="PageLink" activeClassName="ActivePageLink">37-45</NavLink>
        <NavLink to="/46" className="PageLink" activeClassName="ActivePageLink">46-56</NavLink>

         
      </div>
    );
    
  }

}
    
export default MainPageLinks;
    