import React from 'react';

import { Link, NavLink } from 'react-router-dom'; 
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import HorizontalNav from './../HorizontalNav/HorizontalNav.js';
import MenuPrimary from './../MenuPrimary.js';
import MenuSecondary from './../MenuSecondary.js';
import './MainHeader.css';

import UserAvatar from './../../components__widget/UserAvatar/UserAvatar.js';
 
class MainHeader extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const { user, onLogout, navIsActive, onToggleNav, onCloseNav } = this.props;
    return(
      <header className="app-header"> 
        <div className="app-header__top">
          <h1 className="App-brand">
            <Link onClick={onCloseNav} to={`/`}>
              The Rock <small>Fan Club</small>
            </Link> 
          </h1> 
          { 
            user && <UserAvatar item={user} onToggleNav={onToggleNav} /> 
          }
        </div> 
        {
          user && <HorizontalNav navIsActive={navIsActive} onLogout={onLogout} onCloseNav={onCloseNav}>
            <MenuPrimary />
          </HorizontalNav>
        } 

        
        
       

        {
          user && <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle>
              <UserAvatar item={user} onToggleNav={onToggleNav} /> 
            </DropdownToggle>
            <DropdownMenu>
              <MenuSecondary />
              {
                /*<DropdownItem header>Header</DropdownItem> 
              <DropdownItem>
                <NavLink to={`/profile`}>Profile</NavLink> 
              </DropdownItem> 
              <DropdownItem>
                <NavLink to={`/settings`}>Settings</NavLink> 
              </DropdownItem> 
              <DropdownItem divider />
              <DropdownItem>Sign Out</DropdownItem>*/
              }
              
            </DropdownMenu>
          </Dropdown>
        }
        
        

      </header>
    ); 

  }//[end] render
}

export default MainHeader;