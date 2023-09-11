import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import { connect } from "react-redux";
import {churches} from '../utils/churches'
import { memberRegisterAction } from '../redux/Actions/membersAction';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import WMLogo from "../assets/WMLogo.PNG"
import AdventistLogo from "../assets/AdventistLogo.png"

const SignUp=(props)=>{

    const [formData,setFormData]=React.useState({
        ID:"",
        isMarried:false,
        yearOfMarriage:"",
        password:"",
    })

    const confirmPasswordRef=useRef()
    

    const [idError,setIdError]=React.useState({
        error:false,
        errorName:""
    })

    const [passwordError,setPasswordError]=React.useState({
        error:false,
        errorName:""
    })


    const handleSubmit=async(event)=>{
        event.preventDefault();

        const reg = new RegExp("^((1|2))[0-9]{15}$", "i");
        if (!reg.test(formData.ID)) {
            setIdError({
                ...idError,
                error:true,
                errorName:"Invalid ID"
            })
        }else if(formData.password !== confirmPasswordRef?.current?.value){
            setPasswordError({
                ...passwordError,
                error:true,
                errorName:"Passwords don't match"
            })
        }else{
            setIdError({...idError,error:false});
            setPasswordError({...passwordError,error:false});

            props.memberRegisterAction(formData);
        }
        


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
            <div className="lg:px-14 px-4 py-4">
                <div className='rounded-lg shadow-sm border border-secondary lg:px-8 py-8 lg:w-3/5 mx-auto'>
                    <div className="mb-2 lg:flex justify-between">
                        <h1 className='grid text-text_secondary text-lg mb-2 font-bold'>Register</h1>
                        <p className='flex justify-start text-text_secondary gap-1 text-sm group'>
                            Already have an account? 
                            <Link to="/signin" className='flex justify-start text-primary gap-1 text-sm group font-bold'><span className='group-hover:mx-2 delay-100 duration-500'>Sign in</span> <BsArrowRight className='my-1' size={15}/></Link>
                        </p>

                    </div>
                    <form onSubmit={(event)=>handleSubmit(event)}>
                        <h3 className='grid text-primary text-sm mb-2 font-bold'>Personal information</h3>
                        <p className='text-xs text-danger py-2'>
                            {idError.error && idError.errorName}
                        </p>                        
                        <div className='grid lg:grid-cols-2 lg:gap-8 gap-4'>

                            <div className="mb-2">
                                <label className="text-text_secondary font-bold text-xs mb-2">ID <span className="text-[red]">*</span></label>
                                <input type="number" value={formData.ID}
                                className={`${idError.error?'border-danger' : 'border-text_secondary_2'} text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border placeholder-text_secondary_2`} placeholder="ID number" required
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        ID: e.target.value,
                                    });
                                }}/>
                            </div>

                            <div className="mb-2">
                                <label className="text-text_secondary font-bold text-xs mb-2">Are you Married? <span className="text-[red]">*</span></label>
                                <select
                                value={formData.isMarried} 
                                className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2"
                                required
                                onChange={(e) => {

                                    setFormData({
                                        ...formData,
                                        isMarried: e.target.value=== "false" ? false : true,
                                        yearOfMarriage:''
                                    });
                                }}>
                                    <option value=''>Select status</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="text-text_secondary font-bold text-xs mb-2">If yes,when did you get married? <span className="text-[red]">*</span></label>
                            <input type="number" 
                            className={`text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2 ${!formData.isMarried && 'cursor-not-allowed'}`} 
                            placeholder="Marriage year"
                            min={1900}
                            max={new Date().getFullYear()}
                            value={formData.yearOfMarriage}
                            disabled={formData.isMarried?false:true}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    yearOfMarriage: +e.target.value,
                                });
                            }}/>
                        </div>

                        <h5 className='text-primary text-sm mb-2 font-bold'>Account information</h5>
                        <p className='text-xs text-danger py-2'>
                            {passwordError.error && passwordError.errorName}

                        </p>

                        <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
                            <div className="mb-2">
                                <label className="text-text_secondary font-bold text-xs mb-2">Password <span className="text-[red]">*</span></label>
                                <input type="password" value={formData.password} 
                                className={`${passwordError.error?'border-danger' : 'border-text_secondary_2'} text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border  placeholder-text_secondary_2`} placeholder="Password" required
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    });
                                }}/>
                            </div>

                            <div className="mb-2">
                                <label className="text-text_secondary font-bold text-xs mb-2">Confirm password(Re-type password) <span className="text-[red]">*</span></label>
                                <input type="password" ref={confirmPasswordRef} 
                                className={`text-text_secondary text-sm ${passwordError.error?'border-danger' : 'border-text_secondary_2'} outline-primary block w-full px-2 py-1 rounded-lg border  placeholder-text_secondary_2`} placeholder="Confirm password" required/>
                            </div>
                        </div>

                        {props?.data?.memberRegister?.success?<p className='text-sm text-primary font-bold text-center p-2 bg-primary bg-opacity-20'>{props?.data?.memberRegister?.resp?.data?.message}</p>
                        :
                        <p className={`text-sm text-danger text-center p-1 ${props?.data?.memberRegister?.error && 'bg-danger'} bg-opacity-20`}>
                            {props?.data?.memberRegister?.error?.response?.data?.message}</p>}

                        <button type='submit' size='sm' className={`my-2 bg-primary text-sm text-center text-secondary p-2 w-full ${props?.data?.memberRegister?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.memberRegister?.loading? true : false}>
                            {props?.data?.memberRegister?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/>Saving</p>:'Register member'}
                        </button>
                        
                    </form>
                </div>
                
        </div>
    </div>
    )
}


const mapState=(data)=>({
    data:data
});

export default connect(mapState,{
    memberRegisterAction
})(SignUp)
