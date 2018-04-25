
import firebase from './../services/firebase.js';

//Object template
let userTpl = {  
  // id            : null,       //Record id      
  // uid           : 'user.uid',   //user id
  name          : 'user.displayName',
  biography     : '',
  photoURL      : 'user.photoURL',
  email         : 'user.email',
  phoneNumber   : 'user.phoneNumber',
  visible       : false
};

class DBUser { 
  //...
  static save(user){ 
    //...
    let tpl_user = {};
    tpl_user.biography    = '';
    tpl_user.visible      = false;
    tpl_user.name         = user.displayName;
    tpl_user.photoURL     = user.photoURL;
    tpl_user.email        = user.email;
    tpl_user.phoneNumber  = user.phoneNumber;
    //Create or update user record in the database
    let record = {};
    record['/users/' + user.uid] = tpl_user;
    firebase.database().ref().update(record);  
  }
}

export default DBUser;


// Get a key for a new Post.
// let newPostKey = firebase.database().ref().child('users').push().key;



/*
TdALheXqkeZbmLsYfFHChjpjLHA3
  biography: ""
  email: "eric.njanga@gmail.com"
  name: "Eric Njanga"
  photoURL: "https://lh5.googleusercontent.com/-COiFmnKgWAY/..."
  uid: "TdALheXqkeZbmLsYfFHChjpjLHA3"
  visible: false
*/