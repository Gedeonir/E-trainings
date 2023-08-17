import React from 'react'
import {BsJournalBookmark} from 'react-icons/bs'
import {GoPeople} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


const Card = ({id,path}) => {
    const navigate=useNavigate()

  return (
    <div className='h-64 cursor-pointer shadow-lg hover:shadow-text_secondary delay-100 duration-500 bg-secondary' onClick={()=>navigate(`/${path}/${id}`)}>
        <div className='h-32'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover'/>
        </div>
        <div className='px-4 py-2'>        
            <div className='flex justify-between'>
                <label className='bg-primary px-1.5 rounded-lg py-0.5 font-medium text-primary text-xs bg-opacity-20'>Golden</label>
            </div>

            <h1 className='my-2 font-medium text-sm'>Lorem ipsum dolor sit amet</h1>

            <div className='flex justify-start gap-1 mb-2'>
                <div className='h-4 w-4 rounded-full'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover rounded-full'/>
                </div>
                <label className='font-regural text-text_secondary text-xs'>Author name</label>

            </div>

            <div className='grid grid-cols-2 gap-2 py-2'>
                <div className='flex justify-start gap-1 text-text_secondary'>
                    <BsJournalBookmark size={15}/>
                    <label className='text-xs font-bold'>12 Lessons</label>
                </div>
                <div className='flex justify-end gap-1 text-text_secondary'>
                    <GoPeople size={15}/>
                    <label className='text-xs font-bold'>12</label>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card