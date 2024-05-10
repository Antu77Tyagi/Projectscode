import React from "react";
function InputTag({placeholder}){
    return(
    <input className='m-auto min-h-10 w-72 outline-none p-2
        rounded-md'type="text" placeholder={placeholder}/>
    )
}
export default InputTag;