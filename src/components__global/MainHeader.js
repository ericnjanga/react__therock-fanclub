import React from 'react';
import MainNav from './MainNav.js';

const MainHeader = (props) => {
  const { user, onLogout } = props;
  return(
    <header className="App__header"> 
      <h1 className="App-title">The Rock <small>Fan Clucb</small></h1>
      <MainNav user={user} onLogout={onLogout} />
    </header>
  );
}

export default MainHeader;