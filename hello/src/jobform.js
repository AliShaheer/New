import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory,Link} from 'react-router';
import './index.css';

const style = {
    height: 550,
    width: 600,
    margin: 70,
//   display: 'inline-block',
};

var style1 = {
      color: 'black',
      margin:5,
      padding:15,
      fontSize: 18
    };
const styling = {
    margin: 20
};

export class jobform extends Component 
{
  constructor()
  {
    super();
  }
  render()
  {
    return(
      <div id="jobform">
        <MuiThemeProvider>
          <div>
          <Paper style={style} zDepth={3}>
                      <h1 style={style1}>&nbsp;&nbsp;&nbsp;Job &nbsp;&nbsp;&nbsp;Form</h1>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RaisedButton  label="View" style={styling} />
   <RaisedButton  label="Delete" style={styling} />
                     
                        <br/> <br/><br/><br/><br/><br/> 
          </Paper> 
         </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

