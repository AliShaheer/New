import React,{Component} from 'react';
import *as firebase from 'firebase';
// import './viewJobs.css';
export class companyform extends Component{
 componentDidMount(){
 
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('USER/');
    speedRef.on('value',snap => {

   var count=0;
   var userobj=snap.val();
   var key=Object.keys(userobj);
   var table = document.createElement('table');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    console.log(userobj[k].type);
    if(userobj[k].type=='company'){
      this.state.email[i]=userobj[k].Email;
      this.state.name[i]=userobj[k].name;
       var table = document.getElementById("myTable");
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
        cell1.innerHTML =  this.state.name[i];
        cell2.innerHTML = this.state.email[i];
        var button = document.createElement('button');
        var buttonText = document.createTextNode('View Detail')
        button.appendChild(buttonText)
        cell3.appendChild(button)
        button.addEventListener('click', this.detail)
    }

 }
       //running code
}) 
}
detail(){
    console.log("Student more detail");
}
constructor(){
        super();
this.state={
        email:[],
        name:[]
    }
 }
render(){
return(
    <div>
     <p>
                <table id="myTable">
                   <tr>
                        <th>Student Name</th>
                        <th>Student Email</th>   
                    </tr>
                </table>
         </p> 
    </div>
)

}

}

// import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
// import RaisedButton from 'material-ui/RaisedButton';
// import {browserHistory,Link} from 'react-router';
// import './index.css';

// const style = {
//     height: 550,
//     width: 600,
//     margin: 70,
//   textAlign: 'left',
// //   display: 'inline-block',
// };

// var style1 = {
//       color: 'black',
//       margin:5,
//       padding:15,
//       fontSize: 18
//     };

// const styling = {
//     margin: 20
// };
// export class companyform extends Component 
// {
//   constructor()
//   {
//     super();
//   }
//   render()
//   {
//     return(
//       <div id="companyform">
//         <MuiThemeProvider>
//           <div>
//           <Paper style={style} zDepth={3}>
//                       <h1 style={style1}>Company Form</h1>
//   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RaisedButton  label="View" style={styling} />
//    <RaisedButton  label="Delete" style={styling} />
                          
//                         <br/> <br/><br/><br/><br/><br/> 
//           </Paper> 
//           </div>
//         </MuiThemeProvider>
//     </div>
//     );
//   }
// }

