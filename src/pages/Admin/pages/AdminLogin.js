import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai'

const AdminLogin = () => {
    const [showPassword,setShowPassword]=React.useState(false);


  return (
    <div className="min-h-screen max-h-screen lg:px-14 px-4 py-12 flex items-center">
        <div className='grid lg:grid-cols-2 rounded-lg shadow-lg border border-secondary w-4/5 mx-auto'>
            <div className="rounded-l-lg px-8 lg:py-24 py-2 bg-primary">
                <div className='py-8'>
                    <h1 className='grid text-secondary lg:text-4xl text-lg mb-2 font-bold'>Welcome Back!</h1>
                    <p className='mt-2 flex justify-start text-secondary gap-1 text-sm group'>Our mission is in the larger sense common to all Christians—that of uplifting Christ in the Church and in the world</p>
                        
                </div>
            </div>

            <div className="rounded-r-lg px-8 lg:py-8 py-2">
                <div className="mb-8">
                    <h1 className='grid text-text_secondary text-lg mb-2 font-bold'>System administrator login</h1>
                </div>
                 

                <div className="mb-4">
                    <label className="text-text_secondary font-bold text-xs mb-2">Email <span className="text-[red]">*</span></label>
                    <input type="email" className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="email" required/>
                </div>
                <div className="mb-4">
                    <label className="text-text_secondary font-bold text-xs mb-2">Password <span className="text-[red]">*</span></label>
                    <input type={!showPassword?"password":"text"} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Password" required/>
                    <p className='text-sm my-2 text-primary cursor-pointer hover:underline' onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide password':'Show password'}</p>
                </div>

                <p className='flex justify-start text-text_secondary gap-1 text-sm'>
                    <Link className='flex justify-start text-primary gap-1 text-sm group font-bold'><span className='group-hover:mx-2 delay-100 duration-500'>Forgot password?</span> <BsArrowRight className='my-1' size={15}/></Link>
                </p>
                
                <Button size="sm" className='my-2 bg-primary text-sm text-secondary'>Login</Button>

            </div>
            
        </div>
    </div>
  )
}

export default AdminLogin