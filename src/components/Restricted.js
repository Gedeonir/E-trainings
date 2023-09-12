import React from 'react'
import { CiWarning } from 'react-icons/ci'
import {BsArrowRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function Restricted({message}) {
    const navigate=useNavigate()
  return (
    <div className='bg-danger w-full lg:px-12 px-4 bg-opacity-20 py-2'>
        <div className="flex justify-start gap-4 text-text_secondary">
            <div className="  h-10 w-10 rounded-full text-center flex items-center">
                <CiWarning size={50} className='w-10 h-10'/>
            </div>
            <div className='text-sm py-2'>
                <p>{message}</p>
                <p className='flex justify-start cursor-pointer  gap-1 text-sm group underline' onClick={()=>navigate(-1)}><span className='group-hover:mx-2 delay-100 duration-500'>Go back</span> <BsArrowRight className='my-1' size={15}/></p>
            </div>
        </div>
    </div>
  )
}
