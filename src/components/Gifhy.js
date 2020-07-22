import React from 'react'
import createGroup from "../gifs/createGroup.gif"
import deleteGroup from "../gifs/deleteGroup.gif"
import useFeed from "../gifs/useFeed.gif"
import shareGroup from "../gifs/shareGroup.gif"
import removeStudent from '../gifs/removeStudent.gif'
import markAttendance from '../gifs/markAttendance.gif'
import createDeleteNotes from '../gifs/createDeleteNotes.gif'
import events from '../gifs/events.gif'
import studentDetails from '../gifs/studentDetails.gif'
import studentSubmission from '../gifs/studentSubmission.gif'
import feePayments from '../gifs/feePayments.gif'
import fees from '../gifs/fees.gif'


const GroupCreation=()=>{
     return(
        <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text "  >  Creating a new group</p>

        <img src={createGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container center">
 
        <p className="teal-text " style={{fontSize:"1em"}}> <b>Creating a new group</b> </p>
        <img src={createGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
     
       </div>
       </div>

       
        </div>

     )
 }

export const GroupDeletion=()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>  Deleting a group</p>

        <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
        <div className="container center">
     
        <p className="teal-text "> <b> Deleting a group</b> </p>
        <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
     
       </div>
       </div>

       
        </div>
    )
   
}

export const FeedDiscovery  = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}> Using the Feed page</p>

        <img src={useFeed} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b> Using the Feed page</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}

export const GroupSharing = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>  Sharing your group with other people</p>

        <img src={shareGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b> Sharing your group with other people</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}

export const RemoveStudent = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Removing a Student from a Group</p>

        <img src={removeStudent} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b> Removing a Student from a Group</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}

export const MarkAttendance = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Mark Attendance of a group</p>

        <img src={markAttendance} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b> Mark Attendance of a group</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}

export const Notes = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Creation and Deletion of a  Notes Folder</p>

        <img src={createDeleteNotes} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b> Creation and Deletion of a  Notes Folder</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}


export const Events = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Working with Events</p>

        <img src={events} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b>Working with Events</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}
export const StudentDetails = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>View Student Details</p>

        <img src={studentDetails} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b>View Student Details</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}

export const StudentSubmissions = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Track Students Submissions</p>

        <img src={studentSubmission} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b>Track Students Submissions</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}
export const FeePayments = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Adding Fee payments to Groups</p>

        <img src={feePayments} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
     
       </div>
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b>Adding Fee payments to Groups</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}
export const Fees = ()=>{
    return(
         <div >
        <div className="main hide-on-med-and-down" style={{marginLeft:"30%",marginTop:"20px"}}>
        <div className="container">
        <p className="black-text flow-text "  style={{}}>Track Student Fees</p>

        <img src={fees} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",maxHeight:"80%",position:"fixed"}}/>
       
       </div>
      
       </div>


       <div className=" hide-on-large-only " >
       <div className="container center">
     
     <p className="teal-text "> <b>Track Student Fees</b> </p>
     <img src={deleteGroup} alt="how to create group" className="responsive-img " style={{border:"solid 2px teal",borderRadius:"10px",height:"90vh"}}/>
  
    </div>
       </div>

       
        </div>
    )
}
export default GroupCreation
