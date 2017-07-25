import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Paper from 'material-ui/Paper';
import {SignUp} from './Signup';
 import {LogIn} from './LogIn';
import {Dashboard} from './dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
     
 <div className="App">
        {/* <SignUp/>      */}
       <LogIn {...this.props}/> 
       {/* <Dashboard/>  */}

   </div>

    );
 
 }
}


export default App;
