import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import {AiOutlinePlus} from 'react-icons/ai'
import {navBarOptions} from "./NavBar"
import Dropdown from "./Dropdown"
import Notifications from './Notifications'
import { useLocation,Link } from "react-router-dom";
import {CiGrid41} from 'react-icons/ci'
import {BsJournalBookmark} from 'react-icons/bs'
import {HiMenuAlt1} from 'react-icons/hi'

function DashboardLayout({children,page}) {
    const [openAccount,setOpenAccount]=React.useState(false);
    const [openNotificationAction,setOpenNotificationAction]=React.useState(false);
    const location=useLocation();
    const [openMobileMenu,setOpenMobileMenu]=React.useState(false);



    return (
        <div className={`max-h-screen w-full overflow-hidden bg-primary grid grid-cols-6 relative`}>
            <Sidebar/>
            <div className={`mx-auto w-full min-h-screen max-h-screen overflow-hidden duration-1000 delay-300 ease-in-out bg-secondary bg-opacity-90 lg:col-span-5 col-span-6`}>
                <NavBar setOpenMobileMenu={setOpenMobileMenu} setOpenAccount={setOpenAccount} setOpenNotificationAction={setOpenNotificationAction} openAccount={openAccount} openNotificationAction={openNotificationAction}/>
                {children}
            </div>
            {openNotificationAction&&<Notifications openNotificationAction={openNotificationAction} setOpenNotificationAction={setOpenNotificationAction}/>}
            {openAccount&& <Dropdown options={navBarOptions} className="w-48"/>}

            {/* Mobile menu */}

            {openMobileMenu &&
            <div className='bg-secondary bg-opacity-40 z-40 absolute top-0 right-0 bottom-0 left-0 max-h-screen transform duration-1000 delay-300 ease-in-out lg:hidden'>
                <div className="bg-primary px-4 w-4/5 max-h-screen min-h-screen">
                    <div className="h-16 w-full text-lg py-2 text-secondary text-center flex justify-start gap-4" onClick={()=>setOpenMobileMenu(false)}>

                        <HiMenuAlt1 size={25}/>
                        <span className={`text-lg duration-500 ease-in-out `}>Menu</span>
                    </div>
                    <ul className="mt-8 font-semibold text-secondary">
                        <li className={`w-full py-2 ${location.pathname==="/users/admin/home"&&'bg-secondary bg-opacity-90 text-text_secondary'}   hover:text-opacity-70 cursor-pointer items-center mb-6`}>
                            <Link to="/users/admin/home" className="flex justify-start px-3">
                                <CiGrid41 size={25}/>
                                <span className={`text-sm  ml-4 duration-500 ease-in-out`}>Home</span>
                            </Link>
                        </li>
                        <li className={`w-full py-2  hover:text-opacity-70 cursor-pointer ${location.pathname==="/users/admin/courses" && ' bg-secondary bg-opacity-90 text-text_secondary'}  `}>
                            <Link to="/users/admin/courses" className="flex justify-start px-3">
                                <BsJournalBookmark size={25}/>
                                <span className={`text-sm  ml-4 duration-500 ease-in-out `}>Courses</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                
            </div>
            }
            
        </div>
    );
}

export default DashboardLayout;

