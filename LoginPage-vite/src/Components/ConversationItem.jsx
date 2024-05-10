import React from "react";
export function ConversationItem({props}){
    return(
        <>
       <div className="conversation-box">
       <div className="profile"> {props.name[0]}</div>
        <div className="currMassage">{props.lastMassage}</div>
       <div className="status">{props. timeStamp}</div>
       {/* <h1>{props.name}</h1> */}
      
       </div>
        
        </>
    )
}