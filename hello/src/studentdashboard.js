import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './index.css';
import * as firebase from 'firebase'; 
import TextField from 'material-ui/TextField';


const style = {
    height: 450,
    width: 200,
    margin: 70,
  textAlign: 'left',
//   display: 'inline-block',
}; 
export class studentdashboard extends Component 
{
render()
  {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <div className="header">Campus Recruitment System
           </div>
            <Paper style={style} zDepth={2} rounded={false}>
              <br/>
              <div> 
                <h2 className="heading2">Student Dashboard</h2> 
              </div>   
           
              <Link to="studentviewjob"><FlatButton label="View jobs" primary={true} /></Link>
          
              {/* <Link to="studentviewcompanies"><FlatButton label="View Student" primary={true} /></Link> */}
          
              <Link to="LogIn"><FlatButton label="SignOut"  primary={true} /></Link>
              {/*<FlatButton label="SignOut" onClick={this.changeRoute.bind(this)} primary={true} />*/}
            </Paper>
          </div>  
        </MuiThemeProvider>
      </div>
    );
  }
} 