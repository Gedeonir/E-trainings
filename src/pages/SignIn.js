import React from 'react';
import Layout from '../components/Layout';
import { Link,useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { connect } from "react-redux";
import { memberLoginAction } from '../redux/Actions/membersAction';
import {AiOutlineLoading3Quarters} from "react-icons/ai"


const SignIn=(props)=>{
    const [showPassword,setShowPassword]=React.useState(false);
    const location=useLocation();
    const navigate=useNavigate()


    const [formData,setFormData]=React.useState({
        mobile:"",
        password:"",
    })


    const handleLogin=(e)=>{
        e.preventDefault()
        props.memberLoginAction(formData);
    }

    React.useEffect(()=>{
        if (props?.data?.memberLogin?.success === true) {
            navigate(`/home`);
        }
    },[props?.data?.memberLogin?.success])


    return (
        <div>
            <NavBar/>
            <div className="max-h-screen lg:px-14 px-4 py-4 flex items-center">
                <div className='grid lg:grid-cols-2 lg:w-3/5 mx-auto rounded-lg shadow-sm border border-secondary'>
                    <div className="rounded-l-lg lg:px-8 flex items-center">
                        <div>
                            <h1 className='grid text-primary lg:text-4xl text-lg mb-2 font-bold'>Welcome Back!</h1>
                            <p className='mt-2 flex justify-start text-text_secondary gap-1 text-sm group'>Our mission is in the larger sense common to all Christians—that of uplifting Christ in the Church and in the world</p>
                                
                        </div>
                    </div>

                    <div className="rounded-r-lg lg:px-8 px-4 py-2">
                        <div className="mb-8">
                            <h1 className='grid text-text_secondary text-lg mb-2 font-bold'>Sign in</h1>
                            <p className='flex justify-start text-text_secondary gap-1 text-sm group'>
                                Not Registered yet? 
                                <Link to="/signup" className='flex justify-start text-primary gap-1 text-sm group font-bold'><span className='group-hover:mx-2 delay-100 duration-500'>Register</span> <BsArrowRight className='my-1' size={15}/></Link>
                            </p>

                        </div>
                        <form onSubmit={(event)=>handleLogin(event)}>
                            {props?.data?.memberLogin?.success?"":<p className='text-xs text-danger text-center p-2'>{props?.data?.memberLogin?.error?.response?.data?.message}</p>}
                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Contact <span className="text-[red]">*</span></label>
                                <div className="flex justify-start">
                                    <div className="flex justify-start w-1/5 border py-1 px-2 rounded-l-lg border-text_secondary_2">
                                        <div className="h-4 w-full">
                                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/125px-Flag_of_Rwanda.svg.png' className='w-full h-full object-cover'/>

                                        </div>
                                        <div className="text-xs px-2 py-0.5 text-text_secondary">
                                            <label>+250</label>
                                        </div>
                                    </div>
                                    <input type="number" name='mobile' value={formData.mobile} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-r-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="phone number" required
                                    onChange={(e)=>{
                                        setFormData({
                                            ...formData,
                                            mobile:e.target.value
                                        })
                                    }}/>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Password <span className="text-[red]">*</span></label>
                                <input type={!showPassword?"password":"text"} name="password" value={formData.password} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="password" required
                                onChange={(e)=>{
                                    setFormData({
                                        ...formData,
                                        password:e.target.value
                                    })
                                }}/>
                                <p className='text-sm my-2 text-primary cursor-pointer hover:underline' onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide password':'Show password'}</p>
                            </div>

                            <p className='flex justify-start text-text_secondary gap-1 text-sm'>
                                <Link className='flex justify-start text-primary gap-1 text-sm group font-bold'><span className='group-hover:mx-2 delay-100 duration-500'>Forgot password?</span> <BsArrowRight className='my-1' size={15}/></Link>
                            </p>

                            <button type='submit' size='sm' className={`my-4 bg-primary text-sm text-center text-secondary p-2 w-full ${props?.data?.memberLogin?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.memberLogin?.loading? true : false}>
                                {props?.data?.memberLogin?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/><span> Signing in....</span></p>:'Login'}
                            </button>
                        </form>

                    </div>
                    
                </div>
        </div>
    </div>
    )
}

const mapState=(data)=>({
    data:data
});

export default connect(mapState,{
    memberLoginAction
})(SignIn)