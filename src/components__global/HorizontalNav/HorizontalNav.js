import React from 'react';
import { NavLink } from 'react-router-dom';

import './HorizontalNav.css';

const HorizontalNav = (props) => {
  const { navIsActive, onCloseNav } = props; 
   
  return( 
    <nav className={'HorizontalNav' + (navIsActive?' is-active':'')}>  
      {props.children}
      {/*
      <ul className="HorizontalNav__list">
        <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/`} exact={true}>Home</NavLink></li>
        <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/about`}>About</NavLink></li>
        <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/articles`}>Articles</NavLink></li>
        <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/gallery`}>Gallery</NavLink></li>
        <li><NavLink activeClassName="active" onClick={onCloseNav} to={`/message-board`}>Message Board</NavLink></li>
        
          <hr />
          <li className="HorizontalNav__btn-frame">
            <button className="App__btnLogout" onClick={onLogout}>Sign out...</button>
          </li>
      
      </ul> */} 
    </nav> 
  ); 
}

export default HorizontalNav;