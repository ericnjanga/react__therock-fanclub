
import firebase from './../services/firebase.js';


/**
 * Class dedicated to users
 */
class DBUser { 
  /**
   * Save a user object in the database ...
   */
  static save(user) {  
    //prepare the user object
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

  /**
   * Get a user from the database ...
   * (returns a promise which resolves when the snapshot is ready)
   */ 
  static get(uid) {
    // var userId = firebase.auth().currentUser.uid;
    return new Promise((resolve, reject) => {
      firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
        resolve(snapshot.val()); 
      });
    }); 
  }
}

export default DBUser;


// Get a key for a new Post.
// let newPostKey = firebase.database().ref().child('users').push().key;