import firebase from '../services/firebase';
 
const getUserFromDB = (loggedUser) => {
  const node = firebase.database().ref('users'); 

  return new Promise((resolve, reject) => {
      
    node.on('value', (snapshot) => { 
      const list     = snapshot.val();
      // console.log('>>>listB=', list);
      //First save incoming items in a temporary list ...
      for (let index in list) { 
        // console.log('>>>list=', loggedUser.uid === list[index].uid);
        if(loggedUser.uid === list[index].uid){
          console.log('---------list[index]=', list[index]);
          resolve(list[index]);  
        }  
      } 
    });//[end] node
  });//[end] Promise

}//[end] getUserFromDB

export default getUserFromDB;