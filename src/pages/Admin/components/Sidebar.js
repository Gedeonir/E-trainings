import React from 'react'
import {CiSearch,CiGrid41} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import {HiMenuAlt1} from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import {BsJournalBookmark} from 'react-icons/bs'
import {IoIosNotificationsOutline} from "react-icons/io"
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {CiLogout} from 'react-icons/ci'
import { connect } from 'react-redux';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import Loading from '../../../components/Loading'
import {GoPeople} from 'react-icons/go'


const Sidebar=(props) =>{
    const location=useLocation();
    const navigate=useNavigate();


    return (
        <div className={`pl-2 min-h-screen hidden lg:block duration-1000 delay-300 ease-in-out relative`}>
            <div className='sticky top-0'>
                <div className="h-16 w-full items-center lg:flex text-lg rounded-l-full py-2 pl-2 text-secondary">
                    <button
                        className="block rounded  transition hover:text-rose-600/75 dark:text-gray-100"
                    >
                    <HiMenuAlt1 size={30}/>
                    </button>
                    <span className={`text-lg  ml-4 duration-500 ease-in-out `}>Menu</span>
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
                    <li className={`flex w-full justify-start rounded-l-full py-2 pl-2  hover:opacity-70 delay-100 duration-200 transition-all ease-in-out cursor-pointer items-center mb-4 ${location.pathname==="/users/admin/members" && ' bg-secondary bg-opacity-90 text-text_secondary'} `} onClick={()=>navigate("/users/admin/members",{replace:true})}>
                        <GoPeople  size={25}/>
                        <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Members</span>
                    </li>
              
                    
                    <li className={`flex w-full justify-start rounded-l-full py-2 pl-2  hover:opacity-70 delay-100 duration-200 transition-all ease-in-out cursor-pointer items-center mb-2`} onClick={()=>props.handleLogout()}>
                        <CiLogout  size={25}/>
                        <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Logout</span>
                    </li>
                    
                </ul>
            </div>

        </div>
    )
}



const mapState=(data)=>({
    data:data
  })
  
  export default connect(mapState)(Sidebar)