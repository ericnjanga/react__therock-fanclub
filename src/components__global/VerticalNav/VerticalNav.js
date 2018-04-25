import React from 'react';
import ReactDOM from 'react-dom';  
import UserAvatar from './../../components__widget/UserAvatar/UserAvatar.js';
import DBUser from '../../utilities/DBUser.class.js'; 

import './VerticalNav.css';
import './../../styles/menus.css';


class VerticalNav extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }
  componentDidMount(){  
    //Fetch user info from the database and save it in the state...
    let uid = DBUser.getCurrentUser().uid;
    DBUser.get(uid).then((user) => { 
      this.setState({ user });
    });
    //Close navigation only is certain nodes are targetted
    const this_node = ReactDOM.findDOMNode(this);
    this_node.addEventListener('click', (event) => { 
      const nodeList = document.querySelectorAll('.VerticalNav__obstructor, .VerticalNav__navs .nav-item, .VerticalNav__navs .user-avatar'); 
      for (let node of nodeList) { 
        if(event.path.indexOf(node) > -1){
          this.props.onCloseVertNav();
          break;
        } 
      }  
    });
  }

 

  render() {
    const { isActive, children } = this.props;
    const { user } = this.state;
    return( 
      <section className={'VerticalNav' +(isActive?' is-active':'')}>
        <nav> 
          <div className="VerticalNav__navs">
            { user && <UserAvatar item={user} showSubInfo={true} /> } 
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