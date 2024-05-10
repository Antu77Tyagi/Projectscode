import React from "react";
import { SideBar } from "./SideBar";
import { ChatArea } from "./ChatArea";
export function MainContainer(){
  return  (
  <div className="mainCon">
    <SideBar/>
        <ChatArea />
        
    </div>
    )
}