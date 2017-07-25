import React, { Component } from 'react';
// import LogInSimple from './Card1'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';
import SignUp from './Signup';
import { Route , withRouter} from 'react-router-dom';

const style = {
    height: 400,
    width: 400,
    margin: 70,
  textAlign: 'center',
  display: 'inline-block',
};

const styling = {
    margin: 20,
};

export class LogIn extends Component 
{
  constructor()
  {
    super();
    this.state= {
      name:'',
      password:'',
    }
  }
OnSubmit(event){
  debugger;
firebase.auth().signInWithEmailAndPassword(this.state.name,this.state.password).catch(function(error) {
 
 var errorCode = error.code;
 var errorMessage = error.message;
 console.log(errorCode+errorMessage);
}).then(()=>{
  // Handle Errors here.
    let typeCheck = null;
    debugger;
    var userId = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref().child('USER/'+userId);
    rootRef.on('value',snap => {
      var userObj = snap.val();
     typeCheck=userObj.type;
     debugger;
     if(typeCheck==='student'){
       this.props.history.push('/studentdashboard');
     }
    if(typeCheck==='company'){
      this.props.history.push('/Companydashboard');
    }
    if(typeCheck ===('admin')){
      this.props.history.push('dashboard');
    } 
}); 

});
// .catch((error)=>{
// var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log("err",errorCode);
   
// });
}
   _inputHandler(event)
  {
    let userInput = {};
    userInput[event.target.name]=event.target.value;
    this.setState(userInput);
  }
   

  render()
  {
    return(
       <div>

        <MuiThemeProvider>
          <div>
  <AppBar
    title="Campus Recruitment System"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
          <Paper style={style} zDepth={3}>
            <br />
                    <h1>Sign-In page</h1>

            <TextField 
            hintText="Enter your Email"
            floatingLabelText="Email"
            hintText="Email"  
            onChange={this._inputHandler.bind(this)}
            value= {this.state.name}
            name="name"
            />

                      
              <br/><br/><br/><br/>
            <TextField
            hintText="Enter your Password"
            floatingLabelText="Password"
            type="password"
            onChange={this._inputHandler.bind(this)} 
            name="password"
             value= {this.state.password}
             />
              <br/>
   <RaisedButton  onClick={this.OnSubmit.bind(this)} label="Sign In" primary={true} style={styling} />
    <Link to="signup"> <RaisedButton label="Sign Up" primary={true} style={styling} /></Link> 
    </Paper>
  </div>
          {/* <PaperExampleSimple/> */}
        </MuiThemeProvider>
      </div>
   
    );
  }
}


