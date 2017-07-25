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

export class companypostjob extends Component 
{
  constructor(props)
  {
    super(props);
    this.state= {
      title:'',
      salary:''
    }
  }
componentDidMount(){
    var userId = firebase.auth().currentUser.uid;
    const rootRef = firebase.database().ref().child('USER/'+userId);
    var userobj;
    rootRef.on('value',snap => {
      userobj = snap.val();
      this.setState({
        user:userobj
      })
      // alert(this.state.user+" User");
    })  
  }
_inputHandler(event)
  {
    let userInput = {};
    userInput[event.target.name]=event.target.value;
    this.setState(userInput);
  }

  OnSubmit(event){
    var uid = firebase.auth().currentUser.uid;
    //         var rootRef = firebase.database().ref();
    //  var storesRef = rootRef.child('Student');
    //  var newStoreRef = storesRef.set({
      firebase.database().ref('JOBS/').push({
          ...this.state.user,
      title : this.state.title,
      salary : this.state.salary
      
     });
      this.props.history.push('/Companydashboard');
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
          <h1>Post Jobs</h1>
            {/* <Link to="/Companydashboard"><button>Back to Company Dashboard</button></Link>
         */}
            <TextField 
            name="title" 
            value={this.state.title}
             type="title"  
             hintText="title" 
             onChange={this._inputHandler.bind(this)}/*placeholder="Password"/*/ />
            
              <br/><br/><br/><br/>
            
           
            <TextField
              name="salary"
              value={this.state.salary} 
              type="Salary"  
              hintText="Salary" 
              onChange={this._inputHandler.bind(this)}/*placeholder="Password"/*/ />
           
              <br/><br/><br/><br/>
 
<RaisedButton  onClick={this.OnSubmit.bind(this)}  primary={true} label="Post" style={styling} />

    </Paper>
  </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

