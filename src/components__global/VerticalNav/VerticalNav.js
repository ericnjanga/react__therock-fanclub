import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import UserAvatar from './../../components__widget/UserAvatar/UserAvatar.js'

import './VerticalNav.css';
import './../../styles/menus.css';


class VerticalNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){  
    //Close navigation only is certain nodes are targetted
    const this_node = ReactDOM.findDOMNode(this);
    this_node.addEventListener('click', (event) => { 
      const nodeList = document.querySelectorAll('.VerticalNav__obstructor, .VerticalNav__navs .nav-item, .VerticalNav__navs .user-avatar');
      const click_in_header = event.path.indexOf(nodeList); 
      for (let node of nodeList) { 
        if(event.path.indexOf(node) > -1){
          this.props.onCloseVertNav();
          break;
        } 
      }  
    });
  }

  render() {
    const { user, isActive, children } = this.props;
    return( 
      <section className={'VerticalNav' +(isActive?' is-active':'')}>
        <nav> 
          <div className="VerticalNav__navs">
            <UserAvatar item={user} showSubInfo={true} />   
            <hr className="hr-menu" /> 
            {children} 
          </div>
        </nav>
        <div className="VerticalNav__obstructor" />
      </section>
    ); 
  }
}

export default VerticalNav;