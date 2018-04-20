import React from 'react';
import './UserMessageList.css';
import UserMessage from './../UserMessage/UserMessage.js'; 
import FontAwesomeIcon from '@fortawesome/react-fontawesome';  
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'; 

const UserMessageList = (props) => { 
  return(
    <section className="UserMessageList"> 
      <h3 className="UserMessageList__title">We <FontAwesomeIcon icon={faHeart} /> TheRock</h3>
      { 
        props.items.map((item) => {
          return (
            <UserMessage key={item.id} data={item} />
          )
        })
      } 
    </section>
  );
}

export default UserMessageList;