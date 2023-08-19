import React from 'react'
import { CiWarning } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import WMLogo from "../assets/WMLogo.PNG"
import AdventistLogo from "../assets/AdventistLogo.png"

const NotFound = () => {

    const navigate=useNavigate();
  return (
    <div className='min-h-screen flex justify-center items-center border border-text_secondary_2 px-4'>
         <header aria-label="Site Header" className="body-font absolute top-0 z-40 w-full py-2 lg:px-8 px-4 bg-[white]">
            <div className="flex justify-between gap-2">
                <div className="flex items-center w-24">
                    <img src={WMLogo} className='w-full h-full object-cover'/>
                </div>
                

                <div className="flex items-center w-6">
                    <img src={AdventistLogo} className='w-full h-full object-cover'/>
                </div>
            </div>
            
        </header>
        <div className="lg:w-2/5 px-8 py-4 rounded-lg  w-full border border-text_secondary_2">
            <div className="flex justify-start gap-4">
                <div className="bg-secondary  text-text_secondary h-20 w-20 p-2 rounded-full text-center flex items-center">
                    <CiWarning size={50} className='w-20 h-20'/>
                </div>
                <div className="text-text_secondary text-4xl">
                    <h1 className="font-bold">Ooops!</h1>
                    <label className="text-sm">Page not found.</label>
                    <div className="flex w-full justify-start my-4">
                        <button className=" text-secondary text-sm p-2 bg-primary w-full" onClick={()=>navigate(-1,{replace:true})}>Go back</button>
                    </div>
                </div>
                
            </div>
           
        </div>
    </div>

  )
}

export default NotFound