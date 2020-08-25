import React from 'react'
import './App.css'
import Msgcontent from './Msgcontent'
import {TextField} from "@material-ui/core" ;
import SendIcon from '@material-ui/icons/Send';
import db from './firebase' ;
import firebase from 'firebase';
class Msg extends React.Component {
state = {
  inpt:'' ,
  msg: [] ,
  users:[] ,
  timez:[] ,
  usertime:[]
}
 csub = (event) => {
   event.preventDefault();
   db.collection('msg').add({
     user: this.state.users ,
     msg:this.state.inpt ,
     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
     usertime: this.state.usertime
   })
   //make the user message empty after submitting
   this.setState({inpt:''})
 }
 cmsg = (event) => {
   //get the name and value of input in form
   const {name,value} = event.target
  this.setState({ [name]:value })
  //store user timezone in state
  const dt = new Date().getTime()
  this.setState({usertime:dt})
}

componentDidMount(){
  //collect name from user
  const user = prompt('Please Input Your Name') ;
  user === null || user === '' ? window.location.reload() : this.setState({users:user})
  //get snapshot which would help monitor the changes in database
  db.collection('msg').orderBy("timestamp", "asc").onSnapshot(snapshot => {
    this.setState({
      msg: snapshot.docs.map(doc =>  ({id:doc.id , msg:doc.data()}))
    })
  })
}
render() {
    return (
      <div className='App container'>
      <br />
      <h4> Welcome {this.state.users} </h4>
      <form className='form-container' onSubmit={this.csub} name='msg'>
      <TextField className='inpt' type='text' placeholder='input your message'
      name='inpt' onChange={this.cmsg} value={this.state.inpt}
      />
      <button className='btn' type='submit' disabled={ this.state.inpt > -1 }><SendIcon /></button>

      </form>
      {this.state.msg.map((item , id) => {
      const usertime = new Date(item.msg.usertime)
        return  <Msgcontent
        key={id}
        username={item.msg.user}
        messages={item.msg.msg}
        user={this.state.users}
        timestamp={item.msg.timestamp}
        usertime={usertime}
        />
      })}
      </div>
    );
  }
}
export default Msg
