import React from "react";
import { TbAnalyze } from "react-icons/tb";
import { Link} from "react-router-dom";
import InputTag from "./InputTag";
import { Button } from "./Button";
export default function SignUp(){
    return(
        <>
        <div className=' min-h-96 w-96  m-auto bg-zinc-200  '  >
      <div className='flex'><span className='m-auto text-2xl mt-8 mb-4 font-semibold '>Sign Up</span></div>
      <div className='flex flex-col space-y-8 '>
        <InputTag placeholder="user Name" />
        <InputTag placeholder='User Email' />
        <InputTag placeholder='Password' />
        <InputTag placeholder='Confirm Password' />
        <div className="h-20 w-96 flex items-center justify-center gap-4 
        ">
            <span className="h-16 w-16 bg-zinc-800 inline-block"></span>
            <span className="inline-block h-8 w-60 bg-zinc-200 flex justify-center items-center gap-2 border-2 border-green-500">
            <TbAnalyze color={"green"} />
            Generate avatars
            </span>
        </div>
        <Button text="SignUp" />
      </div>
      <p className='ml-16 mt-2'>Already have an account? <Link  to='/' className="text-orange-700 underline decoration-orange-700 ml-2">Login</Link></p>
     </div>
        </>
    )
}