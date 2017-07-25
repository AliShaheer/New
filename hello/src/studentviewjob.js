import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import React,{Component} from 'react';
import *as firebase from 'firebase';
// import './viewJobs.css';
export class studentviewjob extends Component{
  constructor(){
        super();
        this.state={
            title:[],
            salary:[],
            email:[],
            key:[]
        }
    }
 componentDidMount(){
    var uid = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref().child('JOBS/');
    rootRef.on('value',snap => {

   var count=0;
   var userobj=snap.val();
   var key=Object.keys(userobj);
   var table = document.createElement('table');
   for(var i=0; i<key.length; i++){
    var k=key[i];
    console.log(userobj[k].type);
    if(userobj[k].type==='company'){
      this.state.title[i]=userobj[k].title;
      this.state.salary[i]=userobj[k].salary;
      this.state.email[i]=userobj[k].email;
      var table = document.getElementById("myTable");
       var row = table.insertRow(1);
       var cell1 = row.insertCell(0);
       var cell2 = row.insertCell(1);
       var cell3 = row.insertCell(2);
       var cell4 = row.insertCell(3);
       var cell5 = row.insertCell(4);

        cell1.innerHTML =  this.state.title[i];
        cell2.innerHTML = this.state.salary[i];
        cell3.innerHTML = this.state.email[i];
        var button = document.createElement('button');
        var buttonText = document.createTextNode('Apply')

        button.appendChild(buttonText)
        cell4.appendChild(button)
        button.addEventListener('click',this.Apply.bind(this,i,k));

        var button1 = document.createElement('button');
        var button1Text = document.createTextNode('Sign Out')
        button1.appendChild(button1Text)
        cell5.appendChild(button1)
        button1.addEventListener('click',this.logout.bind(this));

    }
 }
       //running code
}) 
}
detail(){
    console.log("Apply");
}
 logout(){
    firebase.auth().signOut().catch(function(error){
        console.log("error "+error.message);
    }).then(()=>{
      console.log("success");
      this.props.history.push('/login')
    });
  }

//apply
 Apply(index,key){
        var userId = firebase.auth().currentUser.uid;
        const rootRef = firebase.database().ref().child('USER/'+userId);
        rootRef.on('value', snap => {
            var user = snap.val();
            let userData = (snap.val() || {
                userid:userId,
                name: user.name,
                title: user.title,
                email:user.email
            });
        
            // console.log("userID"+ user.name);
            var rootRefernce=firebase.database().ref();
            const anoRootRef = rootRefernce.child('Apply/'+key).push(userData);
            alert("OK")  
        })
    }

//
render(){
return(
    <div>
     <p>
                <table id="myTable">
                   <tr>
                        <th>Title</th>
                        <th>Salary</th>
                        <th>Email</th>   
                        <th></th>
                        <th></th>
                    </tr>
                           
                </table>
    
{/* <Link to="LogIn"> <FlatButton
 label="SignOut" 
 primary={true}
 onClick={this.logout.bind(this)} 
 /></Link>  */}
</p>
    </div>
)

}

}