import React from 'react';
import './App.css';
import {Card} from "@material-ui/core" ;


function Msgcontent(props) {
  const isuser = props.user === props.username ;
  return (
    <div>
    <div className='container'>
    <Card className={`cont ${isuser ? 'cont_user' : 'const_away'}`}>
    {isuser ? <div><div style={{fontSize:'20px' , color:'white'}}>{props.messages}</div><h5>{props.usertime.toLocaleTimeString().replace(/:(\d{2}) (?=[AP]M)/, " ").toLowerCase()}</h5></div> : <div><h4><strong>{props.username}</strong></h4><div style={{fontSize:'18px'}}>{props.messages}</div><h5>{props.usertime.toLocaleTimeString().replace(/:(\d{2}) (?=[AP]M)/, " ").toLowerCase()}</h5></div>}
    </Card>
    </div>
    </div>
  );
}
export default Msgcontent
