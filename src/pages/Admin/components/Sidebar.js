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

export default function Sidebar(props) {
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
                <ul className="mt-12 font-semibold text-secondary">
                    <li className={`flex w-full rounded-l-full py-2 pl-2 justify-between ${location.pathname==="/users/admin/home"&&'bg-secondary bg-opacity-90 text-text_secondary'}   hover:text-opacity-70 cursor-pointer items-center mb-6`}>
                        <Link to="/users/admin/home" className="flex items-center px-3">
                            <CiGrid41 size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out`}>Home</span>
                        </Link>
                    </li>
                    <li className={`flex w-full justify-between rounded-l-full py-2 pl-2  hover:text-opacity-70 cursor-pointer items-center mb-6 ${location.pathname==="/users/admin/courses" && ' bg-secondary bg-opacity-90 text-text_secondary'}  `}>
                        <Link to="/users/admin/courses" className="flex items-center px-3">
                            <BsJournalBookmark size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Courses</span>
                        </Link>
                    </li>
                    <li className={`flex relative w-full rounded-l-full py-2 pl-2  hover:text-opacity-70 cursor-pointer items-center mb-6 ${location.pathname==="/users/admin/notifications" && ' bg-secondary bg-opacity-90 text-text_secondary'}  `}>
                        <Link to="/users/admin/courses" className="flex items-center px-3">
                            <IoIosNotificationsOutline size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Notifications</span>
                        </Link>
                        <label className='bg-danger w-4 h-4 rounded-full absolute left-4 top-1 text-secondary text-[9px] p-0.5'>
                            10
                        </label>
                    </li>
                    <li className={`flex w-full justify-between rounded-l-full py-2 pl-2  hover:text-opacity-70 cursor-pointer items-center mb-6 ${location.pathname==="/users/admin/profile" && ' bg-secondary bg-opacity-90 text-text_secondary'}  `}>
                        <Link to="/users/admin/profile" className="flex items-center px-3">
                            <BsPerson  size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>My profile</span>
                        </Link>
                    </li>
                    <li className={`flex w-full justify-between rounded-l-full py-2 pl-2  hover:text-opacity-70 cursor-pointer items-center mb-6`} onClick={()=>navigate("/users/admin/login")}>
                        <div className="flex items-center px-3">
                            <CiLogout  size={25}/>
                            <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Logout</span>
                        </div>
                    </li>
                    
                </ul>
            </div>

        </div>
    )
}
