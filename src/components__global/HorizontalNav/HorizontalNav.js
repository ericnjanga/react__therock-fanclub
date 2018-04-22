import React from 'react';
import { NavLink } from 'react-router-dom';

import './HorizontalNav.css';

const HorizontalNav = (props) => {
  const { navIsActive, onCloseNav } = props; 
   
  return( 
    <nav className={'HorizontalNav' + (navIsActive?' is-active':'')}>  
      {props.children}
    </nav> 
  ); 
}

export default HorizontalNav;