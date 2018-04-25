import firebase from '../services/firebase';


//....
//THIS CLASS MUST INFORCE AN INTERFACE ...
//....
// class DBUser {
//   constructor(props){ 
//     this.id            = null;       //Record id      
//     this.uid           = uid;   //user id
//     this.name          = name;
//     this.biography     = null;
//     this.photoURL      = photoURL;
//     this.email         = null;
//     this.phoneNumber   = null;
//     this.visible       = false;
//   }
// }




/**
 * Push a new record in the datase (if there is no duplicate)
 * dbNode : database node (database/dbNode)
 * newRec : new record object
 * prop : property used to compare new and current record
 **/
const updateRecordInfo = (dbNode, user, prop) => {
  console.log('>>>>>>.updateRecordInfo');
  // const ref = firebase.database().ref(dbNode);
  // //Save user record in the database
  // let newRec = {  
  //   id            : null,       //Record id      
  //   uid           : user.uid,   //user id
  //   name          : user.displayName,
  //   biography     : '',
  //   photoURL      : user.photoURL,
  //   email         : user.email,
  //   phoneNumber   : user.phoneNumber,
  //   visible       : false
  // };
  // // let alreadyInDatabase = false;




  // //Getting current user info from DB
  // var userId = firebase.auth().currentUser.uid;
  // firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   const db_user = snapshot.val();
  //   console.log('>>>>>> db_user: ', db_user);
  //   if(!db_user){
  //     //Saving current user info in the DB

  //     let u1 = new DBUser();
  //     console.log('---u1=', u1);
  //     console.log('---u1=', typeof u1);
  //     console.log('>>>>>> set new rec:', newRec);
  //     firebase.database().ref('users/' + userId).set(newRec, function(){
  //       console.log('>> Finished saving user in DB');
  //     });
  //   }
  //   // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //   // ...
  // });

 


/*
  const userRef = checkIfUserExists(user);
  console.log('...userRef=', userRef);
  userRef.then((userExists) => {
    //If user exist in the db
    //--- use its id to locate it in the database and update information
    if(userExists){//only save valid info
      console.log('...userExists=', userExists);
     
    }else{
      //Otherwise
      //--- create new user, save it in db (collect the user id in database)
      //--- add user id (db reference) property to new useer object
      //--- update user object in database
      // Get a key for a new Post.
      var newPostKey = firebase.database().ref().child('users').push().key;
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      newRec.id = newPostKey;
      updates['/users/' + newPostKey] = newRec;
    }
  });
*/

  //- Yes: update record

  // // A post entry.
  // var postData = {
  //   author: username,
  //   uid: uid,
  //   body: body,
  //   title: title,
  //   starCount: 0,
  //   authorPic: picture
  // };


  // // updates['/user-posts/' + uid + '/' + newPostKey] = newRec;

  // return firebase.database().ref().update(updates);
  










  // ref.on('value', (snapshot) => {
  //   let items = snapshot.val();

    // console.log('>>>>items=', items);
    // if(!items) {
    //   const pushedPostRef = ref.push( newRec , (error)=>{  
    //     if(error){
    //       console.error('Error while pusing: ', error);
    //     }else{ 
    //     }
    //   });//[end] listRef.push

    //   const refID = pushedPostRef.getKey();
    //   console.log('>>>>refID=', refID);
    //   newRec.refID = refID;
    //   firebase.database().ref('users/' + refID).set(
    //     newRec, 
    //     (error)=>{ 
    //       if(error){
    //         console.log('Couldn\'t save data');
    //       }
    //       else{
    //         console.log("Data successfully"); 
    //       } 
    //   });//[end] firebase.database 
    // }//[end] no items

    // //...
    // for (let item in items) {
    //   if(items[item][prop]===newRec[prop]){
    //     alreadyInDatabase = true;
    //     firebase.database().ref(dbNode).child(item).set(newRec);
    //     return;
    //   }
    // }

    // if(!alreadyInDatabase){    

    //   //GET REFERENCE ID AND SAVE IT INSIDE NEW OBJECT
    //   //GET REFERENCE ID AND SAVE IT INSIDE NEW OBJECT
    //   //GET REFERENCE ID AND SAVE IT INSIDE NEW OBJECT
    //   //GET REFERENCE ID AND SAVE IT INSIDE NEW OBJECT
    //   const pushedPostRef = ref.push( newRec , (error)=>{  
    //     if(error){
    //       console.error('Error while pusing: ', error);
    //     }else{ 
    //     }
    //   });//[end] listRef.push

    //   //TEST KEY HERE ...
    //   console.log('pushedPostRef.getKey()=', pushedPostRef.getKey())
    // } 
  
  // });//[end] update user info in database
};//[end] updateRecordInfo

export default updateRecordInfo;