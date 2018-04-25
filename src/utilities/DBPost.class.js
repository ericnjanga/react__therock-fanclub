
import firebase from './../services/firebase.js';

/**
 * Class dedicated to posts
 */
class DBPost {
  
  /**
   * Get all posts from the database
   * (returns a promise which resolves when an iterator containing the posts is ready)
   * (NOTE: changes to the database wont be reflected on thwe UI because the promise would have been resolved already)
   */
  static getAll() {
    const nodeRef_A = firebase.database().ref('board-msg');
    return new Promise((resolve, reject) => {
      nodeRef_A.on('value', (snapshot) => {
        const nodeVal     = snapshot.val(); 
        const map = new Map(Object.entries(nodeVal));
        resolve(map); 
      });//[end] within nodeRef_A 
    });//[end] Promise 
  }//[end] getAll

  
  /**
   * Return database node
   */
  static getNode() {
    return firebase.database().ref('board-msg');
  }

  
  /**
   * Save item in database
   */
  static save(item, uid) {
    const listRef = firebase.database().ref('board-msg');
    let post = Object.assign({}, item);
    post.uid = uid;
    post.date = Date.now();
    //...
    return new Promise((resolve, reject) => {
      listRef.push(post, (error)=>{  
        if(error){
          console.error('Error while pusing: ', error);
        }else{
          resolve('post successful!');
        }
      });//[end] listRef.push
    });//[end] promise 
  }//[end] save
}

export default DBPost;

 