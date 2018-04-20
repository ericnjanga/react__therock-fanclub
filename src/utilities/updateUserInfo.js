import firebase from "../services/firebase";

/**
 * Push a new record in the datase (if there is no duplicate)
 * dbNode : database node (database/dbNode)
 * newRec : new record object
 * prop : property used to compare new and current record
 **/
const updateRecordInfo = (dbNode, newRec, prop) => {
  const ref = firebase.database().ref(dbNode);
  let alreadyInDatabase = false;

  ref.on('value', (snapshot) => {
    let items = snapshot.val();
    //...
    for (let item in items) {
      if(items[item][prop]===newRec[prop]){
        alreadyInDatabase = true;
        firebase.database().ref(dbNode).child(item).set(newRec);
        return;
      }
    }

    if(!alreadyInDatabase){    
      ref.push( newRec , (error)=>{  
        if(error){
          console.error('Error while pusing: ', error);
        }else{ 
        }
      });//[end] listRef.push
    } 
  
  });//[end] update user info in database
};//[end] updateRecordInfo

export default updateRecordInfo;