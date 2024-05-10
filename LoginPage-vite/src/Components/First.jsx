import React, { useState } from "react";
export function First({demo,demo1,ha}){
   const[count,setCount]= useState(1)
   function he(){
    console.log(count)
   }
   function de(){
    setCount(count+1)
    he()
   }
    return (
        <h1>hi here is only knowledge check {demo} {demo1} {ha.date}
        {count} 
         <button onClick={de}>increse</button>
        </h1>
    )
}