import React from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import Card from '../components/Card'
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import { useLocation } from 'react-router-dom'


const cards=[1,2,3,4,5,6,7,8,9,0]

const Courses = ({path}) => {
    const [toogleSearch,setToogleSearch]=React.useState(false);
    const location=useLocation()

  return (
    <div className='mb-4 py-2'>
        <div className='lg:flex justify-end gap-4 relative'>
            <div className='flex lg:justify-end justify-between lg:gap-4 gap-2 w-full h-8 text-text_secondary font-medium lg:px-8'>
                <label className='text-primary cursor-pointer delay-100 duration-500  border-b-2'>All</label>
                <label className='cursor-pointer  hover:border-b-2'>Junior</label> 
                <label className='cursor-pointer  hover:border-b-2'>Golden</label> 
                <label className='cursor-pointer  hover:border-b-2'>Flower</label> 
                <label className='cursor-pointer  hover:border-b-2'>Eagle</label>
                <label className='cursor-pointer  hover:border-b-2'>Excellent</label>

                <div className='text-text_secondary font-bold relative text-lg mt-1'>
                    <BsSearch  className='cursor-pointer hover:text-primary' onClick={()=>setToogleSearch(!toogleSearch)}/>

                </div>
            </div>                    
        </div>

        <div className={`text-text_secondary font-bold relative py-2 shadow-sm ${toogleSearch?'block':'hidden'}`}>
            <BsSearch size={20} className='cursor-pointer hover:text-primary absolute top-4 left-4'/>
            <input type="text" className="px-12 text-text_secondary text-sm outline-none block w-full p-2.5 dark:bg-gray-700 placeholder-text_secondary_2" placeholder="Type in keyword" autoFocus="autofocus" required/>
            <IoCloseOutline size={20} className='cursor-pointer hover:text-primary absolute top-4 right-4'/>
        </div>

        <div className={`grid ${location.pathname.includes("users/admin/courses")?'lg:grid-cols-3':'lg:grid-cols-4'} gap-8 py-2 my-4`}>              
            {cards.map((card,index)=>(
                <Card key={index} progressPercentage={index*5*5} id={index} path={path}/>
            ))}
        </div>
    </div>
  )
}

export default Courses