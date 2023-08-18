import React from 'react'
import {IoIosNotificationsOutline} from "react-icons/io"
import { Link, useNavigate } from 'react-router-dom'
import WMLogo from "../assets/WMLogo.PNG"
import AdventistLogo from "../assets/AdventistLogo.png"
import { connect } from 'react-redux'

const NavBar = (props) => {

    const navigate=useNavigate()

    const handleLogout=()=>{
        sessionStorage.removeItem('memberToken')
        navigate("/signin")
    }
  return (
    <header aria-label="Site Header" className="body-font top-0 z-40 w-full py-2 lg:px-14 px-4 border-b border-primary bg-btn_primary bg-opacity-90">
        <div className="flex justify-between">
            <div className="flex items-center w-20">
                <img src={WMLogo} className='w-full h-full object-cover'/>
            </div>
            <div className="flex items-center w-6">
                <img src={AdventistLogo} className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className="flex justify-between pt-4">
            <ul className="lg:flex justify-start w-3/5 hidden p-0 list-none">
                <li className={`text-text_secondary  ${location.pathname==="/home"&&'text-primary border-primary border-b-2'} h-8  hover:border-b-2 cursor-pointer mx-4`}>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className={`text-text_secondary hover:hover:border-b-2 cursor-pointer mx-4 h-8 ${location.pathname==="/search"&&'text-primary border-primary border-b-2'}  `}>
                    <Link to="/search">
                        About us
                    </Link>
                </li>
                
                <li className="text-text_secondary hover:hover:border-b-2 cursor-pointer mx-4 h-8">
                    <Link >
                        Contact us
                    </Link>
                </li>
            
                
            </ul>

            <div className='flex justify-end gap-2 text-text_secondary lg:w-1/5 w-full'>
                <IoIosNotificationsOutline size={25} className='cursor-pointer hover:text-primary delay-100 duration-500'/>
                <div className='group relative'>
                    {props?.data?.memberProfile?.loading?(
                        <div className='h-6 px-2 rounded-full w-6 bg-text_secondary_2 animate-pulse'></div>
                    ):(props?.data?.memberProfile?.success?(
                        <button className={`h-6 px-2 rounded-full w-6 ${!props?.data?.memberProfile?.resp?.data?.getProfile?.profilePicture?'bg-[url(https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png)]':`bg-[url(${props?.data?.memberProfile?.resp?.data?.getProfile?.profilePicture})]`} bg-cover bg-center bg-no-repeat`}/>
                    ):(<div className='h-6 px-2 rounded-full w-6 bg-secondary animate-pulse'></div>))}
                    <div id="dropdown" className="group-hover:block w-48 hidden z-40 absolute my-2 text-text_secondary bg-secondary divide-y  divide-gray-100 rounded-b-lg rounded-l-lg  shadow drop-shadow right-0 top-5">
                        <ul className="py-2 text-gray-900 dark:text-gray-300 p-0 list-none" aria-labelledby="dropdownDefaultButton">
                            <li className="px-3 py-2 w-full text-left hover:bg-text_secondary hover:bg-opacity-10">
                                {props?.data?.memberProfile?.success?(
                                    <Link to="/my/profile" className='flex gap-4 justify-start'>
                                        <div 
                                        className={`h-4 px-2 rounded-full w-4 
                                        ${!props?.data?.memberProfile?.resp?.data?.getProfile?.profilePicture?'bg-[url(https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png)]':`bg-[url(${props?.data?.memberProfile?.resp?.data?.getProfile?.profilePicture})]`} bg-cover bg-center bg-no-repeat`}/>
                                        <div className='text-text_secondary'>
                                            <label className='font-bold text-md'>{props?.data?.memberProfile?.resp?.data?.getProfile?.fullNames}</label>
                                            <p className='text-sm'>View my profile</p>
                                        </div>
                                    </Link>
                                ):(
                                    <p></p>
                                )}
                            </li>

                            <li className="px-3 py-2 w-full text-md text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10" onClick={()=>handleLogout()}>
                                Sign out
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
  )
}

const mapState=(data)=>({
    data:data
  })
  
  export default connect(mapState)(NavBar)