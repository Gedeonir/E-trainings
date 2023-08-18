import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import {BsArrowRight} from 'react-icons/bs'
import { connect } from "react-redux";
import { adminLoginAction } from '../../../redux/Actions/AdminActions';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import WMLogo from "../../../assets/WMLogo.PNG"
import AdventistLogo from "../../../assets/AdventistLogo.png"
import axios from 'axios';

const AdminLogin = (props) => {
    const [showPassword,setShowPassword]=React.useState(false);
    const [error,setError] = React.useState("")
    const [loading,setLoading]=React.useState(false);
    const [formData,setFormData]=React.useState({
        email:"",
        password:""
    })

    const navigate=useNavigate();
    
    const handleSubmit=async(event)=>{
        event.preventDefault();

        setLoading(true);

        try {
            const response = await axios.post(
              `${process.env.BACKEND_URL}/admin/login`,
              formData
            );
      
            console.log('Post response:', response.data);
            sessionStorage.setItem('userToken', JSON.stringify(response?.data?.token));
            navigate("../users/admin/home");

          } catch (error) {
            setError(error?.response?.data?.message)
        }
        setLoading(false);
        
    }
    

  return (
    <div>
        <header aria-label="Site Header" className="body-font sticky top-0 z-40 w-full py-2 lg:px-8 px-4 bg-[white]">
            <div className="flex justify-between gap-2">
                <div className="flex items-center w-24">
                    <img src={WMLogo} className='w-full h-full object-cover'/>
                </div>
                

                <div className="flex items-center w-6">
                    <img src={AdventistLogo} className='w-full h-full object-cover'/>
                </div>
            </div>
            
        </header>
        <div className="min-h-screen max-h-screen lg:px-14 px-4 py-12 flex items-center">
            <div className='grid lg:grid-cols-2 rounded-lg shadow-lg border border-secondary lg:w-4/5 w-full mx-auto'>
                <div className="rounded-l-lg px-8 lg:py-24 py-2 bg-primary">
                    <div className='py-8'>
                        <h1 className='grid text-secondary lg:text-4xl text-lg mb-2 font-bold'>Welcome Back!</h1>
                        <p className='mt-2 flex justify-start text-secondary gap-1 text-sm group'>Our mission is in the larger sense common to all Christians—that of uplifting Christ in the Church and in the world</p>
                            
                    </div>
                </div>

                <form className="rounded-r-lg px-8 lg:py-8 py-2" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-8">
                        <h1 className='grid text-text_secondary text-lg mb-2 font-bold'>System administrator login</h1>
                    </div>
                    
                    <p className={`text-sm text-danger ${error && 'bg-danger'} py-2 bg-opacity-20 px-4 rounded-xl`}>{error}</p>                    

                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Email <span className="text-[red]">*</span></label>
                        <input type="email" value={formData.email} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="email" required
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                email:e.target.value
                            })
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Password <span className="text-[red]">*</span></label>
                        <input type={!showPassword?"password":"text"} value={formData.password} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Password" required
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
                    
                    <button type='submit' size='sm' className={`my-4 bg-primary text-sm text-center text-secondary p-2 lg:w-1/2 w-full ${loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={loading? true : false}>
                        {loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/><span> Logging in....</span></p>:'Login'}
                    </button>

                </form>
                
            </div>
        </div>
    </div>
  )
}



export default AdminLogin