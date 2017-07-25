import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './index.css';
//  import studentform from '/studentform';
//  import companyform from '/companyform';
// import jobform from '/jobform';
import * as firebase from 'firebase'; 


const style = {
    height: 450,
    width: 200,
    margin: 70,
  textAlign: 'left',
//   display: 'inline-block',
};

var style1 = {
      color: 'black',
      margin:5,
      padding:15,
      fontSize: 18
    };

var style2 = {
      color: 'blue',
      margin:1,
      padding:7,

    };  
export class Dashboard extends Component 
{
  logout(){
    firebase.auth().signOut().catch(function(error){
        console.log("error "+error.message);
    }).then(()=>{
      console.log("success");
      this.props.history.push('/login')
    });
  }

  render(){
    return(
  <div>
     <MuiThemeProvider>
          <div>
            <div>Campus Recruitment System
           
            </div>
            <Paper style={style} zDepth={2} rounded={false}>
              <br/>
              <div> 
                <h2 className="heading2">Admin Profile</h2> 
              </div>   
              <hr/>
              <Link to="companyform"><FlatButton label="View Company" primary={true} /></Link>
              <hr/>
              <Link to="studentviewjob"><FlatButton label="View Jobs" primary={true} /></Link>
              <hr/>
              <Link to="studentform"><FlatButton label="View Student" primary={true} /></Link>
              <hr/>
<FlatButton
 label="SignOut" 
 primary={true}
 onClick={this.logout.bind(this)} 
 />
            </Paper>
          </div>  
        </MuiThemeProvider>
  </div>
    );
  }
} 