import React from 'react';
import { Link } from 'react-router-dom';

import './MainNav.css';

const MainNav = (props) => {
  const { onLogout, navIsActive, onCloseNav } = props; 
   
  return(
    <nav className={'MainNav' + (navIsActive?' is-active':'')}> 
      <div>
        <ul className="MainNav__list">
          <li><Link onClick={onCloseNav} to={`/`}>Home</Link></li>
          <li><Link onClick={onCloseNav} to={`/about`}>About</Link></li>
          <li><Link onClick={onCloseNav} to={`/articles`}>Articles</Link></li>
          <li><Link onClick={onCloseNav} to={`/gallery`}>Gallery</Link></li>
          <li><Link onClick={onCloseNav} to={`/message-board`}>Message Board</Link></li>
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