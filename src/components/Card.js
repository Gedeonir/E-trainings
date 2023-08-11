import React from 'react'
import {BsJournalBookmark} from 'react-icons/bs'
import {GoPeople} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


const Card = ({id,path}) => {
    const navigate=useNavigate()

  return (
    <div className='h-96 p-4 cursor-pointer shadow-lg hover:shadow-text_secondary delay-100 duration-500 bg-secondary' onClick={()=>navigate(`/${path}/${id}`)}>
        <div className='h-48 mb-3'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover'/>
        </div>
        <div className='flex justify-between'>
            <label className='bg-primary px-1.5 rounded-lg py-0.5 font-medium text-primary text-xs bg-opacity-20'>Golden</label>
            <AiOutlineHeart size={20} className='text-text_secondary'/>
        </div>

        <h1 className='my-4 font-medium'>Lorem ipsum dolor sit amet</h1>

        <div className='flex justify-start gap-1 mb-2'>
            <div className='h-4 w-4 rounded-full'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover rounded-full'/>
            </div>
            <label className='font-regural text-text_secondary text-xs'>Author name</label>

        </div>

        <div className='grid grid-cols-2 gap-2 py-2'>
            <div className='flex justify-start gap-1 text-text_secondary'>
                <BsJournalBookmark size={20}/>
                <label className='text-sm font-bold'>12 Lessons</label>
            </div>
            <div className='flex justify-end gap-1 text-text_secondary'>
                <GoPeople size={20}/>
                <label className='text-sm font-bold'>12</label>
            </div>

        </div>
    </div>
  )
}

export default Card