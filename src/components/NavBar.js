import React from 'react'
import {IoIosNotificationsOutline} from "react-icons/io"
import { Link } from 'react-router-dom'
import {CiSearch,CiGrid41} from 'react-icons/ci'
import {RiBarcodeLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import {GiSettingsKnobs} from 'react-icons/gi'
import {TbDots} from 'react-icons/tb'
import {HiMenuAlt1} from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import WMLogo from "../assets/WMLogo.PNG"
import AdventistLogo from "../assets/AdventistLogo.png"

export const usersOptions=[
    {
      option:"Profile",
      icon:<div className="h-4 px-2 rounded-full w-4 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"/>,
      path:'/profile'
  
    },
    {
        option:'My Favourites',
        icon:''
    },
    {
      option:'Sign out',
      icon:''
    }
  
  ]

const NavBar = () => {
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
            <ul className="lg:flex justify-start w-3/5 hidden">
                <li className={`text-text_secondary  ${location.pathname==="/"&&'text-primary border-primary border-b-2'} h-8  hover:border-b-2 cursor-pointer mx-4`}>
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
                    <button className="h-6 px-2 rounded-full w-6 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"/>
                    <div id="dropdown" className="group-hover:block w-32 hidden z-40 absolute my-2 text-text_secondary bg-secondary divide-y  divide-gray-100 rounded-b-lg rounded-l-lg  shadow drop-shadow right-0 top-5">
                        <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                            {usersOptions.map((option)=>{
                                return <button key={option.option} className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10" onClick={()=>navigate(option.path)}>{option.option} {option.icon}</button>
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <Link to="/signup" className='w-full border-2 border-primary rounded-lg text-primary text-center p-1 text-sm'>Join us for free</Link>
                </div>

            </div>
        </div>
        
    </header>
  )
}

export default NavBar