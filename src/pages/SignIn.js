import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import {BsArrowRight,BsSearch} from 'react-icons/bs'


const SignIn=()=>{
    const [showPassword,setShowPassword]=React.useState(false);
    return (
        <Layout>
        <div className="max-h-screen lg:px-14 px-4 py-4">
            <div className='grid lg:grid-cols-2 rounded-lg shadow-sm border border-secondary'>
                <div className="rounded-l-lg lg:px-8 flex items-center">
                    <div>
                        <h1 className='grid text-primary lg:text-4xl text-lg mb-2 font-bold'>Welcome <span>Back!</span></h1>
                        <p className='mt-2 flex justify-start text-text_secondary gap-1 text-sm group'>Our mission is in the larger sense common to all Christians—that of uplifting Christ in the Church and in the world</p>
                            
                    </div>
                </div>

                <div className="rounded-r-lg lg:px-8 py-2">
                    <div className="mb-8">
                        <h1 className='grid text-text_secondary text-lg mb-2 font-bold'>Sign in</h1>
                        <p className='flex justify-start text-text_secondary gap-1 text-sm group'>
                            Not Registered yet? 
                            <Link to="/signup" className='flex justify-start text-primary gap-1 text-sm group font-bold'><span className='group-hover:mx-2 delay-100 duration-500'>Register</span> <BsArrowRight className='my-1' size={15}/></Link>
                        </p>

                    </div>
                    <form>

                        <div className="mb-4">
                            <label className="text-text_secondary font-bold text-xs mb-2">Contact <span className="text-[red]">*</span></label>
                            <div className="flex justify-start">
                                <div className="flex justify-start w-1/5 border py-1 px-2 rounded-l-lg border-text_secondary_2">
                                    <div className="h-4 w-4">
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/125px-Flag_of_Rwanda.svg.png' className='w-full h-full object-cover'/>

                                    </div>
                                    <div className="text-xs px-2 py-0.5 text-text_secondary">
                                        <label>+250</label>
                                    </div>
                                </div>
                                <input type="number" className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-r-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Contacts" required/>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="text-text_secondary font-bold text-xs mb-2">Password <span className="text-[red]">*</span></label>
                            <input type={!showPassword?"password":"text"} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Password" required/>
                            <p className='text-sm my-2 text-primary cursor-pointer hover:underline' onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide password':'Show password'}</p>
                        </div>

                        <p className='flex justify-start text-text_secondary gap-1 text-sm'>
                            <Link className='flex justify-start text-primary gap-1 text-sm group font-bold'><span className='group-hover:mx-2 delay-100 duration-500'>Forgot password?</span> <BsArrowRight className='my-1' size={15}/></Link>
                        </p>

                        <Button type='submit' size='sm' className='my-2 bg-primary text-sm text-secondary'>Login</Button>
                    </form>

                </div>
                
            </div>
      </div>
      </Layout>
    )
}

export default SignIn