import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const MenuPrimary = (props) => {
  return( 
    <Nav>
      {props.children}
      <NavItem>
        <NavLink to={`/`} exact={true}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`/about`}>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`/articles`}>Articles</NavLink>
      </NavItem> 
      <NavItem>
        <NavLink to={`/gallery`}>Gallery</NavLink>
      </NavItem> 
      <NavItem>
        <NavLink to={`/message-board`}>Message Board</NavLink>
      </NavItem>  
    </Nav> 
  );
}

export default MenuPrimary;


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
