import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import UserAvatar from './../../components__widget/UserAvatar/UserAvatar.js'

import './VerticalNav.css';


const VerticalNav = (props) => {
  const { user } = props;
  return( 
    <section className="VerticalNav">
      <nav> 
        <UserAvatar item={user} showSubInfo={true} />  

        <hr />
        
        {props.children}
        {
          /*
          <Nav vertical></Nav>
          <NavItem>
          <NavLink  to={`/about`}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to={`/about`}>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to={`/about`}>Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled  to={`/about`}>Disabled Link</NavLink>
        </NavItem>*/
        } 
      </nav>
    </section>
  );
}

export default VerticalNav;