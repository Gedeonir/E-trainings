import React from "react";
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


function DashboardLayout({children,page}) {
    const [openAccount,setOpenAccount]=React.useState(false);
    const [openNotificationAction,setOpenNotificationAction]=React.useState(false);
    const location=useLocation();
    const [openMobileMenu,setOpenMobileMenu]=React.useState(false);
    const navigate=useNavigate()


    return (
        <div className={`max-h-screen w-full overflow-hidden bg-primary grid grid-cols-6 relative`}>
            <Sidebar/>
            <div className={`mx-auto w-full min-h-screen max-h-screen overflow-hidden duration-1000 delay-300 ease-in-out bg-secondary bg-opacity-90 lg:col-span-5 col-span-6`}>
                <NavBar setOpenMobileMenu={setOpenMobileMenu} setOpenAccount={setOpenAccount} setOpenNotificationAction={setOpenNotificationAction} openAccount={openAccount} openNotificationAction={openNotificationAction}/>
                {children}
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
                    <ul className="mt-8 font-semibold text-secondary">
                        <li className={`w-full py-2 rounded-l-full ${location.pathname==="/users/admin/home"&&'bg-secondary bg-opacity-90 text-text_secondary'}   hover:text-opacity-70 cursor-pointer items-center mb-6`}>
                            <Link to="/users/admin/home" className="flex justify-start px-3">
                                <CiGrid41 size={25}/>
                                <span className={`text-sm  ml-4 duration-500 ease-in-out`}>Home</span>
                            </Link>
                        </li>
                        <li className={`w-full py-2 rounded-l-full  hover:text-opacity-70 cursor-pointer mb-6 ${location.pathname==="/users/admin/courses" && ' bg-secondary bg-opacity-90 text-text_secondary'}  `}>
                            <Link to="/users/admin/courses" className="flex justify-start px-3">
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
            }
            
        </div>
    );
}

export default DashboardLayout;

