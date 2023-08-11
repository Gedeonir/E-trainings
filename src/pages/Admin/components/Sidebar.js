import React from 'react'
import {CiSearch,CiGrid41} from 'react-icons/ci'
import {FiMessageSquare} from 'react-icons/fi'
import {GiSettingsKnobs} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import {HiMenuAlt1} from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import {BsJournalBookmark} from 'react-icons/bs'



export default function Sidebar(props) {
    const [selectedNav,setSelectedNav] = React.useState('Home');

    const location=useLocation();

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
                    
                </ul>
            </div>

        </div>
    )
}
