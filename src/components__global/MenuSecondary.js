import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Button } from 'reactstrap';

const MenuSecondary = (props) => {
  const { onLogout } = props; 

  return( 
    <Nav>
      {props.children}
        
      <NavItem>
        <NavLink to={`/profile`}>Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`/settings`}>Settings</NavLink>
      </NavItem>

      <hr className="space" />
      
      <NavItem>
        <Button onClick={onLogout} className="btn-logout">Sign Out</Button> 
      </NavItem>  
    </Nav> 
  );
}

export default MenuSecondary;


{
  /**
<li><NavLink activeClassName="active" onClick={onCloseNav} to={`/`} exact={true}>Home</NavLink></li>
<li><NavLink activeClassName="active" onClick={onCloseNav} to={`/about`}>About</NavLink></li>
<li><NavLink activeClassName="active" onClick={onCloseNav} to={`/articles`}>Articles</NavLink></li>
<li><NavLink activeClassName="active" onClick={onCloseNav} to={`/gallery`}>Gallery</NavLink></li>
<li><NavLink activeClassName="active" onClick={onCloseNav} to={`/message-board`}>Message Board</NavLink></li>

        <hr />
        
        <NavItem>
          <NavLink disabled  to={`/about`}>Sign Out</NavLink>
        </NavItem>

        
   */
}
