import React from 'react'
import './App.css'
import {AppBar} from "@material-ui/core/" ;
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Msg from './Msg'
function App() {
  const trigger = useScrollTrigger()
  return (
    <div className='App'>
    <br />
    <br />
    <AppBar className='bar'>
    <h2>Single Channel Messanger</h2>
    </AppBar>
    <br />
    <Msg in={!trigger}/>
    </div>
  );
}


export default App
