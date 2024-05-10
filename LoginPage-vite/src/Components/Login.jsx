import { WiDaySunny } from "react-icons/wi";
import { BsChatRightText, BsLockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import InputTag from "./InputTag";
import { Button } from "./Button";
export default function Login(){
    return(
        <>
        <div 
        className='flex mb-16'>
          <BsChatRightText className='text-2xl mr-2'/>
      <span className='text-2xl font-semibold' >Chat App</span>
      <WiDaySunny className='ml-auto text-4xl' />
     </div>
     <div className=' h-96 w-96  m-auto bg-zinc-200 rounded-2xl '  >
      <div className='flex'><span className='m-auto text-2xl mb-8 font-semibold'>Login</span></div>
      <div className='flex flex-col space-y-8 '>
      < InputTag placeholder="User Name"/>
      < InputTag placeholder="Password"/>
        <Button text="Login"/>
      </div>
      <p className='ml-16 mt-2 '>Do not have an account?<Link to="/SignUp" className="text-orange-700 underline decoration-orange-500"> Sign Up</Link></p>
     </div>
    </>
  )
}