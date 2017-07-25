import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {LogIn} from './LogIn';
import {SignUp} from './Signup';
import {Dashboard} from './dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { Error } from './error'
import {jobform} from './jobform';
import {studentform} from './studentform';
import {companyform} from './companyform';
import {Companydashboard} from './Companydashboard';
import {studentdashboard} from './studentdashboard';
import {companypostjob} from './companypostjob';
import {studentviewjob} from './studentviewjob';
import * as firebase from 'firebase';
import {viewapplystudent} from './viewapplystudent';

 var config = {
    apiKey: "AIzaSyAMWmLzJqhTtrjE66cnbSm4NMVyi4-WRZU",
    authDomain: "webstart-a3e9a.firebaseapp.com",
    databaseURL: "https://webstart-a3e9a.firebaseio.com",
    projectId: "webstart-a3e9a",
    storageBucket: "webstart-a3e9a.appspot.com",
    messagingSenderId: "357084012912"
  };
  firebase.initializeApp(config);


ReactDOM.render(<BrowserRouter> 
    <div>
  <Route exact path="/" component={App}/>
    <Route path="/login" component={LogIn}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/studentform" component={studentform} />
 <Route path="/jobform" component={jobform} />
<Route path="/companyform" component={companyform} />
<Route path="/Companydashboard" component={Companydashboard} />
<Route path="/companypostjob" component={companypostjob} />
<Route path="/studentdashboard" component={studentdashboard} />
<Route path="/studentviewjob" component={studentviewjob} />
<Route path="/viewapplystudent" component={viewapplystudent} />


    </div>
  

    {/* <Route path="*" component={Error}/> */}
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
