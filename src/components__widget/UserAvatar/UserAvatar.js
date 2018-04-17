import React from 'react';
import './UserAvatar.css';

const UserAvatar = (props) => {
    return(
        <img className="user-avatar" src={props.src} alt={props.alt} onClick={props.onToggleNav} />
    );
}

export default UserAvatar;