import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Button } from 'reactstrap';

const MenuSecondary = (props) => {
  const { onLogout, onToggleDropdown } = props; 

  return( 
    <Nav>
      {props.children}
        
      <NavItem>
        <NavLink to={`/profile`} onClick={onToggleDropdown}>Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to={`/settings`} onClick={onToggleDropdown}>Settings</NavLink>
      </NavItem>

      <hr className="hr-menu space" />
      
      <NavItem>
        <Button onClick={ ()=>{onLogout(); onToggleDropdown();} }  className="btn-logout">Sign Out</Button> 
      </NavItem>  
    </Nav> 
  );
}

export default MenuSecondary;