/**
 * Login View
 * ---------------------
 * 
 * About component: 
 * - Renders login panel
 * - cCalls a props function on click
 */

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'; 
import faGoogle from '@fortawesome/fontawesome-free-brands/faGoogle';

//Component ...
const ViewLogin = (props) => {
  return(
    <div className="view--login">
      <h2>Login view</h2>
      <button onClick={props.onLogin} className="app__btn app__btn--icon icon-google">
        <FontAwesomeIcon icon={faGoogle} />
        Login with Google
      </button>
    </div>
  );
}//[end] Login

export default ViewLogin;