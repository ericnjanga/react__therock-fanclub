import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from './../MainNav/MainNav.js';
import './MainHeader.css';

import UserAvatar from './../../components__widget/UserAvatar/UserAvatar.js';
 
const MainHeader = (props) => { 
  const { user, onLogout, navIsActive, onToggleNav, onCloseNav } = props;
  return(
    <header className="App__header"> 
      <h1 className="App-title">
        <Link onClick={onCloseNav} to={`/`}>
          The Rock <small>Fan Club</small>
        </Link> 
      </h1>

      { 
        user && <UserAvatar src={user.photoURL} alt={user.displayName} onToggleNav={onToggleNav} /> 
      }

      <MainNav navIsActive={navIsActive} onLogout={onLogout} onCloseNav={onCloseNav} />
    </header>
  ); 
}

export default MainHeader;