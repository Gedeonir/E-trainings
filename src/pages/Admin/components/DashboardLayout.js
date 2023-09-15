import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Notifications from './Notifications'
import { useLocation,Link } from "react-router-dom";
import {CiGrid41} from 'react-icons/ci'
import {BsJournalBookmark} from 'react-icons/bs'
import {HiMenuAlt1} from 'react-icons/hi'
import {IoIosNotificationsOutline} from "react-icons/io"
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {CiLogout} from 'react-icons/ci'
import { adminFetchProfileAction } from "../../../redux/Actions/AdminActions";
import { connect } from 'react-redux';
import {CiWarning} from 'react-icons/ci'
import {GoPeople} from 'react-icons/go'


function DashboardLayout(props) {
    const [openAccount,setOpenAccount]=React.useState(false);
    const [openNotificationAction,setOpenNotificationAction]=React.useState(false);
    const location=useLocation();
    const [openMobileMenu,setOpenMobileMenu]=React.useState(false);
    const [sessionExpired,setSessionExpired]=useState(false)
    const navigate=useNavigate()

    
    React.useEffect(() => {
        props.adminFetchProfileAction();
    },[]) 

    console.log(props);


    const handleLogout=()=>{
        sessionStorage.removeItem('userToken')
        navigate("/users/admin/login",{replace:true})
    }


    return (
        <div className={`max-h-screen w-full overflow-hidden bg-primary grid grid-cols-6 relative`}>
            <Sidebar handleLogout={handleLogout}/>
            <div className={`mx-auto w-full min-h-screen max-h-screen overflow-hidden duration-1000 delay-300 ease-in-out bg-secondary bg-opacity-90 lg:col-span-5 col-span-6 relative`}>
                <NavBar setOpenMobileMenu={setOpenMobileMenu} setOpenAccount={setOpenAccount} setOpenNotificationAction={setOpenNotificationAction} openAccount={openAccount} openNotificationAction={openNotificationAction}/>
                {props.children}
            </div>
            {openNotificationAction&&<Notifications openNotificationAction={openNotificationAction} setOpenNotificationAction={setOpenNotificationAction}/>}

            {/* Mobile menu */}

            {openMobileMenu &&
            <div className='bg-secondary bg-opacity-40 z-40 absolute top-0 right-0 bottom-0 left-0 max-h-screen transform duration-1000 delay-300 ease-in-out lg:hidden'>
                <div className="bg-primary pl-4 w-4/5 max-h-screen min-h-screen">
                    <div className="h-16 w-full text-lg py-2 text-secondary text-center flex justify-start gap-4" onClick={()=>setOpenMobileMenu(false)}>

                        <HiMenuAlt1 size={25}/>
                        <span className={`text-lg duration-500 ease-in-out `}>Menu</span>
                    </div>
                    <ul className="mt-4 font-semibold text-secondary p-0 list-none">
                        <li className={`flex w-full justify-between rounded-l-full py-2 pl-4 my-8   hover:text-opacity-70 cursor-pointer items-center mb-2 ${location.pathname==="/users/admin/profile" && ' bg-secondary bg-opacity-90 text-text_secondary'}  `}>
                            {props?.data?.adminProfile?.success?(
                            <Link to="" className="py-2 border-text_secondary_2 w-full flex gap-2 justify-start">
                                <div className="h-10 w-10 rounded-full">
                                    <img 
                                    src={!props?.data?.memberProfile?.resp?.data?.getProfile?.profilePicture?'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png':`${props?.data?.memberProfile?.resp?.data?.getProfile?.profilePicture}`} className='w-full h-full object-cover rounded-full'/>
                                </div>
                
                                <div className="grid">
                                    <label className="font-bold text-sm">{props?.data?.adminProfile?.resp?.data?.getProfile?.fullNames}</label>
                                    <p className='text-xs'>View my profile</p>
                                </div>
                                
                            </Link>):(
                                <p></p>
                            )}
                        </li>
                        <li className={`flex w-full rounded-l-full py-2 pl-4 justify-start ${location.pathname==="/users/admin/home"&&'bg-secondary bg-opacity-90 text-text_secondary'}   hover:opacity-70 delay-100 duration-200 transition-all ease-in-out cursor-pointer items-center mb-4`} onClick={()=>navigate("/users/admin/home",{replace:true})}>
                            <CiGrid41 size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out`}>Home</span>
                        </li>
                        <li onClick={()=>navigate("/users/admin/courses",{replace:true})} 
                        className={`flex w-full justify-start rounded-l-full py-2 pl-4  hover:opacity-70 delay-100 duration-200 transition-all ease-in-out cursor-pointer items-center mb-4 ${location.pathname==="/users/admin/courses" && ' bg-secondary bg-opacity-90 text-text_secondary'}  `}>
                            <BsJournalBookmark size={20}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Courses</span>
                        </li>
                        <li className={`flex w-full justify-start rounded-l-full py-2 pl-2  hover:opacity-70 delay-100 duration-200 transition-all ease-in-outcursor-pointer items-center mb-4 ${location.pathname==="/users/admin/members" && ' bg-secondary bg-opacity-90 text-text_secondary'} `} onClick={()=>navigate("/users/admin/members",{replace:true})}>
                            <GoPeople  size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Members</span>
                        </li>

                        {/* <li className={`flex relative w-full justify-start rounded-l-full py-2 pl-2  hover:text-opacity-70 cursor-pointer items-center mb-4 `} onClick={()=>props.handleLogout()}>
                            <IoIosNotificationsOutline  size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Notifications</span>
                            <label className='bg-danger w-4 h-4 rounded-full absolute left-4 top-1 text-secondary text-[9px] p-0.5'>
                                10
                            </label>
                        </li> */}

                        
                        
                        <li className={`flex w-full justify-start rounded-l-full py-2 pl-2  hover:opacity-70 delay-100 duration-200 transition-all ease-in-out cursor-pointer items-center mb-2`} onClick={()=>props.handleLogout()}>
                            <CiLogout  size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Logout</span>
                        </li>
                    
                    </ul>
                </div>
                
            </div>
            }            
        </div>
    );
}

const mapState=(data)=>({
    data:data
  })
  
  export default connect(mapState,{
    adminFetchProfileAction
  }) ( DashboardLayout);

