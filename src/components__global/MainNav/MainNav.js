import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNav.css';

const MainNav = (props) => {
  const { onLogout, navIsActive, onCloseNav } = props; 
   
  return(
    <nav className={'MainNav' + (navIsActive?' is-active':'')}> 
      <div>
        <ul className="MainNav__list">
          <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/`} exact={true}>Home</NavLink></li>
          <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/about`}>About</NavLink></li>
          <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/articles`}>Articles</NavLink></li>
          <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/gallery`}>Gallery</NavLink></li>
          <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/message-board`}>Message Board</NavLink></li>
          <hr />
          <li className="MainNav__btn-frame">
            <button className="App__btnLogout" onClick={onLogout}>Sign out</button>
          </li>
        </ul> 
      </div>  
    </nav>
  ); 
}

export default MainNav;