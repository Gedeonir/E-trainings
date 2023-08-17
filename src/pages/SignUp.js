import React, { useRef } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import NavBar from '../components/NavBar';
import { connect } from "react-redux";
import {churches} from '../utils/churches'
import { memberRegisterAction } from '../redux/Actions/membersAction';
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const SignUp=(props)=>{
    const getDistricts = () => {
        const districts=[]
        Object.keys(churches).forEach((district) => {
            districts.push(district);
        });
        return districts
    };
    
    const getChurches = (district) => {
        const data = churches[district];
        return data;
    };

    const [formData,setFormData]=React.useState({
        fullNames:"",
        age:"",
        mobile:"",
        isMarried:false,
        yearOfMarriage:null,
        password:"",
        district:getDistricts()[0],
        church: "",
    })

    const confirmPasswordRef=useRef()
    

    // React.useEffect(() => {
    //     getDistricts();
    // }, []);

    const [phoneError,setPhoneError]=React.useState({
        error:false,
        errorName:""
    })

    const [passwordError,setPasswordError]=React.useState({
        error:false,
        errorName:""
    })


    const handleSubmit=async(event)=>{
        event.preventDefault();

        const reg = new RegExp("^((072|078|073))[0-9]{7}$", "i");
        if (!reg.test(formData.mobile)) {
            setPhoneError({
                ...phoneError,
                error:true,
                errorName:"Invalid phone number, it has to start with one of 078/072/073 and it must be ten digits"
            })
        }else if(formData.password !== confirmPasswordRef?.current?.value){
            setPasswordError({
                ...passwordError,
                error:true,
                errorName:"passwords don't match"
            })
        }else{
            setPhoneError({...phoneError,error:false});
            setPasswordError({...passwordError,error:false});

            props.memberRegisterAction(formData)
        }


    }

    console.log(props);


    return (
        <div>
            <NavBar/>
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

                        <div className='grid lg:grid-cols-2 lg:gap-8 gap-4'>
                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Full names <span className="text-[red]">*</span></label>
                                <input type="text" value={formData.fullNames} 
                                className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Full names" required
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        fullNames: e.target.value,
                                    });
                                }}/>
                            </div>
                                

                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Age <span className="text-[red]">*</span></label>
                                <input type="date" max={new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",day: "2-digit"}).format(new Date())} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="age" required
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        age: e.target.value,
                                    });
                                }}/>
                            </div>
                        </div>
                        
                        <div className='grid lg:grid-cols-2 lg:gap-8 gap-4'>

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
                                    <input type="number" value={formData.mobile}
                                    className={`${phoneError.error?'border-danger' : 'border-text_secondary_2'} text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-r-lg border border-text_secondary_2 placeholder-text_secondary_2`} placeholder="Contacts" required
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            mobile: e.target.value,
                                        });
                                    }}/>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Are you Married? <span className="text-[red]">*</span></label>
                                <select
                                value={formData.isMarried} 
                                className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2"
                                required
                                onChange={(e) => {

                                    setFormData({
                                        ...formData,
                                        isMarried: e.target.value=== "false" ? false : true
                                    });
                                }}>
                                    <option value=''>Select status</option>
                                    <option value={true}>Yes</option>
                                    <option value={false}>No</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
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

                        

                        <h4 className='text-primary text-sm mb-2 font-bold'>Church information</h4>

                        <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">District <span className="text-[red]">*</span></label>
                                <select className="text-text_secondary cursor-pointer text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" required
                                value={formData.district}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        district: e.target.value,
                                    });
                                }}>
                                    {getDistricts().map((district)=>(
                                        <option value={district} key={district}>{district}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Church <span className="text-[red]">*</span></label>
                                <select 
                                className="text-text_secondary cursor-pointer text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2"
                                required
                                value={formData.church}
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        church: e.target.value,
                                    });
                                }}
                                >
                                    <option value="">Select Church</option>
                                    {getChurches(formData.district)?.map((church)=>(
                                        <option value={church} key={church}>{church}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <h5 className='text-primary text-sm mb-2 font-bold'>Account information</h5>

                        <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Password <span className="text-[red]">*</span></label>
                                <input type="password" value={formData.password} 
                                className={`${passwordError.error?'border-danger' : 'border-text_secondary_2'} text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2`} placeholder="Password" required
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    });
                                }}/>
                            </div>

                            <div className="mb-4">
                                <label className="text-text_secondary font-bold text-xs mb-2">Confirm password(Re-type password) <span className="text-[red]">*</span></label>
                                <input type="password" ref={confirmPasswordRef} 
                                className={`text-text_secondary text-sm ${passwordError.error?'border-danger' : 'border-text_secondary_2'} outline-primary block w-full px-2 py-1 rounded-lg border  placeholder-text_secondary_2`} placeholder="Confirm password" required/>
                            </div>
                        </div>

                        <p className='text-xs text-danger text-center p-2'>
                            {phoneError.error && phoneError.errorName}
                            {passwordError.error && passwordError.errorName}

                        </p>

                        {props?.data?.memberRegister?.success?<p className='text-sm text-primary font-bold text-center p-2'>{props?.data?.memberRegister?.resp?.data?.message}</p>
                        :
                        <p className='text-sm text-danger text-center p-2'>{props?.data?.memberRegister?.error?.response?.data?.message}</p>}

                        <button type='submit' size='sm' className={`my-4 bg-primary text-sm text-center text-secondary p-2 w-full ${props?.data?.memberRegister?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.memberRegister?.loading? true : false}>
                            {props?.data?.memberRegister?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/></p>:'Register member'}
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
