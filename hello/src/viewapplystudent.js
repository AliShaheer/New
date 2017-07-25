import React,{Component} from 'react';
import *as firebase from 'firebase';
// import './viewJobs.css';
export class viewapplystudent extends Component{
 componentDidMount(){
 
    const rootRef= firebase.database().ref();
    const speedRef = rootRef.child('Apply/');
    debugger;
    speedRef.on('value',snap => {

   var count=0;
   var userobj=snap.val();
   var key=Object.keys(userobj);
 debugger;

//    var table = document.createElement('table');
   for(var i=0; i<key.length; i++){
          var k=key[i];
    const speedRef1 = speedRef.child(k+'/');
    
    debugger;
    //
 speedRef1.on('value',snap => {

   var count=0;
   var userobj1=snap.val();
   var key1=Object.keys(userobj1);
   debugger;
   for(var i=0; i<key1.length; i++){
       
     var k=key1[i];
    debugger;
     console.log(userobj1[k].type);
    if(userobj1[k].type=='student'){
      this.state.email[i]=userobj1[k].email;
      this.state.name[i]=userobj1[k].name;
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
 });
//    var table1 = document.createElement('table');
   
//
    // var k=key[i];
    // console.log(userobj[k].type);
    // if(userobj[k].type=='student'){
    //   this.state.email[i]=userobj[k].email;
    //   this.state.name[i]=userobj[k].name;
    //    var table = document.getElementById("myTable");
    //    var row = table.insertRow(1);
    //    var cell1 = row.insertCell(0);
    //    var cell2 = row.insertCell(1);
    //    var cell3 = row.insertCell(2);
    //     cell1.innerHTML =  this.state.name[i];
    //     cell2.innerHTML = this.state.email[i];
    //     var button = document.createElement('button');
    //     var buttonText = document.createTextNode('View Detail')
    //     button.appendChild(buttonText)
    //     cell3.appendChild(button)
    //     button.addEventListener('click', this.detail)
    // }

 }
       //running code
});
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