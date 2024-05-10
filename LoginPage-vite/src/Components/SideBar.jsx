import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import InputTag from "./InputTag";
import { IoIosSearch } from "react-icons/io";
import { ConversationItem } from "./ConversationItem";
export function SideBar(){
    const[conversations,setconversation]=useState([{
        name:"Test1",
        lastMassage:"the last massage is",
        timeStamp:"today"
    },
    {
        name:"Test1",
        lastMassage:"the last massage is",
        timeStamp:"today"
    }])
    return(
        <>
        <div className="sidebar">
            <div className="sb-Header">
        <BiUser />
        <div className="leftSideSideBar">
        <AiOutlineUserAdd />
        <AiOutlineUsergroupAdd />
        <AiOutlinePlusCircle />
        <MdOutlineDarkMode />
        </div>
        </div>
        <div className="sb-search">
        <IoIosSearch />
         <InputTag placeholder={"Search"}/>
        </div>
        <div className="sb-conversation">
           {conversations.map((converation)=>{
            return <ConversationItem props={converation}/>
           })}
        
        </div>
        </div>
        </>
    )
}