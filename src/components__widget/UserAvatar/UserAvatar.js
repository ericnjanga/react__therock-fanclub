import React from 'react';
import './UserAvatar.css';

const UserAvatar = (props) => {
    const { item, showSubInfo } = props;
    return(
      <section className="UserAvatar">
        <img className="user-avatar" src={item.photoURL} alt={item.displayName} onClick={props.onToggleNav} />
        {
          showSubInfo && <p>{item.displayName}</p>
        }
      </section>
    );
}

export default UserAvatar;