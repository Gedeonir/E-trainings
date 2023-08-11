import React from 'react'
import {CiSearch,CiGrid41} from 'react-icons/ci'
import {RiBarcodeLine} from 'react-icons/ri'
import {FiMessageSquare} from 'react-icons/fi'
import {GiSettingsKnobs} from 'react-icons/gi'
import {TbDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function BottomNavigation(props) {
  return (
    <div className='w-full sticky z-10 bottom-0 py-4 px-2 bg-secondary lg:hidden bg-opacity-90'>
        <ul className="font-semibold grid grid-cols-5 gap-4 mx-auto">
            <li className="flex w-full text-text_secondary hover:text-opacity-70 cursor-pointer items-center ">
                <Link to="/" className="mx-auto">
                    <CiGrid41 size={30}/>
                </Link>
            </li>
            <li className="flex w-full    text-text_secondary hover:text-opacity-70 cursor-pointer items-center ">
                <Link className="mx-auto">
                    <CiSearch size={30}/>
                </Link>
            </li>
            <li onClick={()=>props.setOpenModal(true)} className="flex h-16 w-16 bg-btn_primary rounded-full p-2  text-secondary hover:bg-opacity-70 cursor-pointer items-center ">
                <div className="mx-auto">
                    <TbDots size={30}/>
                </div>
            </li>
            <li className="flex w-full    text-text_secondary hover:text-opacity-70 cursor-pointer items-center ">
                <div className="mx-auto">
                    <FiMessageSquare size={30}/>
                </div>
            </li>
        
            <li className="flex w-full    text-text_secondary hover:text-text-opacity-70 cursor-pointer items-center">
                <div className="mx-auto">
                    <GiSettingsKnobs size={30}/>
                </div>
            </li>
        </ul>
    </div>
  )
}
