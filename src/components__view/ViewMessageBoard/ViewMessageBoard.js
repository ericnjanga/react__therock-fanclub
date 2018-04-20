import React from 'react';

import './ViewMessageBoard.css'; 
 
import UserMessageList from './../../components__widget/UserMessageList/UserMessageList.js'; 
import UserMessageModal from './../../components__widget/UserMessageModal/UserMessageModal.js';  
import Toast from './../../components__widget/Toast/Toast.js'; 

import FontAwesomeIcon from '@fortawesome/react-fontawesome'; 
import faPencil from '@fortawesome/fontawesome-free-solid/faPencilAlt'; 

import therock_img from './../../images/therock-1.jpeg'; 
//...
import { Button } from 'reactstrap';
import firebase from '../../services/firebase'; 

class ViewMessageBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this);
  }



  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



  componentDidMount() {
    /**
     * Fetch database records form 2 nodes (relationnal database style: listA and listB)
     * Fetch all elements of listA and for each element of listA:
     * -> find the corresponding element in list B, join it to A and save it into a final list
     */
    const nodeRef_A = firebase.database().ref('board-msg');
    const nodeRef_B = firebase.database().ref('users'); 
    nodeRef_A.on('value', (snapshot) => {
      const listA     = snapshot.val();
      const propA     = 'userData';
      let temp_listA  = [];
      let itemsList_complete  = [];

      //First save incoming items in a temporary list ...
      for (let indexA in listA) { 
        temp_listA.push({
          id      : indexA,
          uid     : listA[indexA].uid,
          title   : listA[indexA].title,
          content : listA[indexA].content
        }); 
      }

      let promiseCounter = 0;
      //Going throgh all records and saving them into the database
      for (let i=0, l=temp_listA.length ; i<l ; i++) { 
        let itemA = temp_listA[i];  
        /**
         * Looking for itemB (related to itemA) in listB
         * -----
         * Create a promise which encapsulates the loop and resolves
         * when itemB has been found and mounted on itemA via a property (propA) 
         */
        let promiseB = new Promise((resolve, reject) => {
          nodeRef_B.on('value', (snapshot) => { 
            let listB = snapshot.val(); 
            for (let indexB in listB) {
              const itemB = listB[indexB];
              if(itemA.uid===itemB.uid){ 
                itemA[propA] = itemB;
                //resolve the promise immediately and stop the loop
                resolve(itemA);
                return;
              }
            }
            reject('couldn\'t find itemB');
          });//[end] nodeRef_B.on
        });

        /**
         * When promiseB resolves, saves the ready item in the final list
         * and update the state only if all items have been saved
         */
        promiseB.then((itemReady) => {
          promiseCounter ++;
          itemsList_complete.push(itemReady);  
          if(promiseCounter===temp_listA.length){ 
            this.setState({
              itemsList: itemsList_complete.reverse()
            });
          } 
        });
      }//[end] Going throgh all records and saving them into the database
    });//[end] within nodeRef_A
  }//[edn] componentDidMount
 


  render() {
    const { user } = this.props; 
    const { itemsList } = this.state; 
    
    return(
      <div className="ViewMessageBoard">
        <figure className="ViewMessageBoard__fig">
          <img src={therock_img} alt="The Rock" />
          <figcaption>TheRock (Dwayne Johnson)</figcaption>
        </figure>

        { /* Display a toast if the list of items is not yet ready */
          !itemsList ? <Toast msg={'Fetching data'} /> : <UserMessageList items={itemsList} />
        }

        
        <UserMessageModal user={user} isOpen={this.state.modal} toggle={this.toggle} 
        className={this.props.className} />
       
        <Button color="primary" onClick={this.toggle}>
          <span>Write a Message</span> <FontAwesomeIcon icon={faPencil} />
        </Button>
      </div>
    ); 
  }
}

export default ViewMessageBoard;