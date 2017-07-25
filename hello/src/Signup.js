import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
// import PaperExampleSimple from './Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {browserHistory,Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import * as firebase from 'firebase';

// import {RaisedButton} from 'material-ui/RaisedButton';
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const style = {
    height: 500,
    width: 400,
    margin: 70,
    textAlign: 'center',
    display: 'inline-block',
};

const styling = {
    margin: 20,
};


// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

// const PaperExampleSimple = () => (
//   <div>
//     <Paper style={style} zDepth={1} />
//     <Paper style={style} zDepth={2} />
//     <Paper style={style} zDepth={3} />
//     <Paper style={style} zDepth={4} />
//     <Paper style={style} zDepth={5} />
//   </div>
// );

export class SignUp extends Component 
{
  constructor()
  {
    super();
    this.state= {
      name:'',
      email:'',
      password:'',
      type:''
    }
  }
  OnSubmit(event){
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
     var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
     
    }).then(()=>{
    //  debugger;
         var uid = firebase.auth().currentUser.uid;
    //         var rootRef = firebase.database().ref();
    //  var storesRef = rootRef.child('Student');
    //  var newStoreRef = storesRef.set({
      firebase.database().ref('USER'+'/'+uid).set({
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      type:this.state.type

     });
      this.props.history.push('/LogIn');
  });

    // let val=JSON.parse(localStorage.getItem('Array'))
    // let arr = val == null ? [] : val;
    //     this.state.name  = this.state.name.toLocaleLowerCase();
    //     arr.push(this.state);
    //     localStorage.setItem('Array',JSON.stringify(arr));
        
    //     this.state = {
    //         name : '',
    //         email : '',
    //         password : ''
    //     }
        
    //     this.setState(this.state);
    // // event.preventDefault();
    // // var name = event.target.querySelector('TextField.name');
    // // var email = event.target.querySelector('TextField.email');
    // // var password = event.target.querySelector('TextField.password');
    // // let prop=this.props;
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
          <h1>Sign-Up page</h1>
  
         <form onSubmit={this.justSubmit}>
            <TextField name="name" value={this.state.name} type="name"  hintText="username" onChange={this._inputHandler.bind(this)}/*placeholder="Password"/*/ />
           
              <br/><br/><br/><br/>
            
           
            <TextField name="email" value={this.state.email} type="email"  hintText="Email" onChange={this._inputHandler.bind(this)}/*placeholder="Password"/*/ />
           
              <br/><br/><br/><br/>
            <TextField name="password" type="password" value={this.state.password} hintText="Password" onChange={this._inputHandler.bind(this)}/*placeholder="Password"/*/ />
  {/* <div> */}
     <RadioButtonGroup name="type" >
      <RadioButton
        value="company"
        label="Company"
        name="company"
        onClick={this._inputHandler.bind(this)}
      />
      <RadioButton
        value="student"
        label="Student"
        name="student"
        onClick={this._inputHandler.bind(this)}
      />
       {/* <RadioButton
        value="admin"
        label="admin"
        name="admin"
        onClick={this._inputHandler.bind(this)}
      /> */}
    </RadioButtonGroup>
  {/* </div> */}




   <RaisedButton  onClick={this.OnSubmit.bind(this)} label="Sign Up" style={styling} />
   {/* <RaisedButton label="Log-In" style={styling} /> */}
    </form>
    </Paper>
  </div>
          {/* <PaperExampleSimple/> */}
        </MuiThemeProvider>
      </div>
    );
  }
}


