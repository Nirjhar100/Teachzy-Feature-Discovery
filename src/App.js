import React from 'react';
import Navbar from './components/Navbar'
import { Switch, BrowserRouter as Router, Route, Link} from "react-router-dom";
import GroupCreation from './components/Gifhy'
import {GroupDeletion,FeedDiscovery,GroupSharing,RemoveStudent, MarkAttendance,Notes, 
  Events,
  StudentDetails,
  StudentSubmissions,
  FeePayments,
  Fees
} from './components/Gifhy'


function App() {
  return (
     <Router>
      <div className="App">
      <Navbar />
    
      <Switch>
      
        <Route path="/createGroup" component={GroupCreation}/>
        <Route path="/deleteGroup" component={GroupDeletion}/>
        <Route path="/feed" component={FeedDiscovery}/>
        <Route path="/shareGroup" component={GroupSharing}/>
        <Route path="/removeStudent" component={RemoveStudent}/>
        <Route path="/markAttendance" component={MarkAttendance}/>
        <Route path="/notes" component={Notes}/>
        <Route path="/events" component={Events}/>
        <Route path="/studentDetails" component={StudentDetails}/>
        <Route path="/studentSubmissions" component={StudentSubmissions}/>
        <Route path="/feePayments" component={FeePayments}/>
        <Route path="/fees" component={Fees}/>
        
      <div className="hide-on-large-only">
        
      <ul className="left-align" style={{paddingLeft:"25px",fontSize:"1.2em",marginLeft:"20px",marginRight:"30px"}} >
   
          <Link to="/createGroup"><li className="black-text section">Creating a New Group</li></Link>
          <div className="divider"></div>
          <Link to="/deleteGroup"><li className="black-text section">Deleting a Group</li></Link>
          <div className="divider"></div>
          <Link to="/feed"><li className="black-text section">Using the Feed page</li></Link>
          <div className="divider"></div>
          <Link to="/shareGroup"><li className="black-text section">Share your Group</li></Link>
          <div className="divider"></div>
          <Link to="/removeStudent"><li className="black-text section">Remove a Student from a Group</li></Link>
          <div className="divider"></div>
          <Link to="/markAttendance"><li className="black-text section">Mark Attendance of a Group</li></Link>
          <div className="divider"></div>
          <Link to="/notes"><li className="black-text section">Creating and deleting Notes folder</li></Link>
          <div className="divider"></div>
          <Link to="/events"><li className="black-text section">Working with events</li></Link>
          <div className="divider"></div>
          <Link to="/studentDetails"><li className="black-text section">View Student Details</li></Link>
          <div className="divider"></div>
          <Link to="/studentSubmissions"><li className="black-text section">Track Student Submissions</li></Link>
          <div className="divider"></div>
          <Link to="/feePayments"><li className="black-text section">Adding Fee Payment to Groups</li></Link>
          <div className="divider"></div>
          <Link to="/fees"><li className="black-text section">Track Student Fees</li></Link>
          
          <div className="divider"></div>
        </ul>
      </div>
       
     
     
      </Switch>
    
  
   

      {/*<div className="main hide-on-med-and-down" style={{marginLeft:"600px",marginTop:"20px"}}>
        <Gifhy/>
      </div>
      <div className="hide-on-large-only">
      <div className="container">
        <Gifhy/>
        </div>  
      </div>
      */}
      </div>
      </Router>
  );
}

export default App;
