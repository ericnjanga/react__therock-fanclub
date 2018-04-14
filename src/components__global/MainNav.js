import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = (props) => {
  const { user, onLogout } = props;
  return(
    <nav className="App__nav">
      {
        //Display "full nav" (and logout button) only if user is logged in
        user ? (
          <div> 
            <ul>
              <li><Link to={`/`}>Home</Link></li>
              <li><Link to={`/about`}>About</Link></li>
              <li><Link to={`/articles`}>Articles</Link></li>
              <li><Link to={`/gallery`}>Gallery</Link></li>
            </ul>
            <button className="App__btnLogout" onClick={onLogout}>Logout</button>
          </div>
        ) : (
          //Display only "login" button only if user is logged out
           
            <ul> 
              <li><Link to={`/login`}>Login</Link></li> 
            </ul> 
           
        )
      } 
    </nav>
  );
}

export default MainNav;