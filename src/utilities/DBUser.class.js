
import firebase from './../services/firebase.js';


/**
 * Class dedicated to users
 */
class DBUser { 
  /**
   * Get a user from the database ...
   * (returns a promise which resolves when the snapshot is ready)
   */ 
  static get(uid) { 
    return new Promise((resolve, reject) => {
      firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
        resolve(snapshot.val()); 
      });
    }); 
  }

  /**
   * Save a user object in the database ...
   */
  static saveBasicInfo(firebaseAuthUser) {  
    //get user in database
    return this.get(firebaseAuthUser.uid).then((userFromDB)=>{
      let tpl_user;
      if(userFromDB){
        /* 
         * This user exists in database: 
         * Don't change these properties (reuse wha'ts in the database)
        */ 
        tpl_user = {
          biography    : userFromDB.biography,
          visible      : userFromDB.visible,
          displayName  : userFromDB.displayName,
          phoneNumber  : userFromDB.phoneNumber
        };
        // tpl_user.biography    = userFromDB.biography;
        // tpl_user.visible      = userFromDB.visible;
        // tpl_user.displayName  = userFromDB.displayName;
        // tpl_user.phoneNumber  = userFromDB.phoneNumber;  
      }else{
        /* 
         * This user DOESN'T exists in database: 
         * Initialize these properties
        */ 
        tpl_user = {
          biography    : '',
          visible      : false,
          displayName  : firebaseAuthUser.displayName ? firebaseAuthUser.displayName : '',
          phoneNumber  : firebaseAuthUser.phoneNumber ? firebaseAuthUser.phoneNumber : ''
        };
        // tpl_user.biography    = '';     //set empty string
        // tpl_user.visible      = false;  //invisible by default
        // tpl_user.displayName  = firebaseAuthUser.displayName ? firebaseAuthUser.displayName : ''; //empty string if there is no value
        // tpl_user.phoneNumber  = firebaseAuthUser.phoneNumber ? firebaseAuthUser.phoneNumber : ''; //empty string if there is no value
      }
      //These properties will always come from the auth service
      //In case user change these outside our app (Google, Yahoo, ...), it will see changes reflected here
      tpl_user.photoURL     = firebaseAuthUser.photoURL;
      tpl_user.email        = firebaseAuthUser.email;
      //Create or update user record in the database
      let record = {};
      record['/users/'+ firebaseAuthUser.uid] = tpl_user;
      firebase.database().ref().update(record); 
    });//get user from DB
  }


  static updateProfile(preferences) {
    let firebaseAuthUser = this.getCurrentUser();
    let tpl_user = {
      biography    : preferences.biography,
      visible      : preferences.visible,
      displayName  : preferences.displayName,
      phoneNumber  : preferences.phoneNumber
    };
    //These properties will always come from the auth service
    //In case user change these outside our app (Google, Yahoo, ...), it will see changes reflected here
    tpl_user.photoURL     = firebaseAuthUser.photoURL;
    tpl_user.email        = firebaseAuthUser.email;
    //Create or update user record in the database
    let record = {};
    record['/users/'+ firebaseAuthUser.uid] = tpl_user;
    return firebase.database().ref().update(record);  
  }


  /**
   * Save a user object in the database ...
   */
  // static save(user) {  
  //   //prepare the user object
  //   let tpl_user = {};
  //   tpl_user.biography    = user.biography ? user.biography : '';
  //   tpl_user.visible      = false;
  //   tpl_user.displayName         = user.displayName;
  //   tpl_user.photoURL     = user.photoURL;
  //   tpl_user.email        = user.email;
  //   tpl_user.phoneNumber  = user.phoneNumber;
  //   //Create or update user record in the database
  //   let record = {};
  //   record['/users/' + user.uid] = tpl_user;
  //   return firebase.database().ref().update(record); 
  // }


  static getCurrentUser() {
    return firebase.auth().currentUser;
  }
}

export default DBUser;


// Get a key for a new Post.
// let newPostKey = firebase.database().ref().child('users').push().key;