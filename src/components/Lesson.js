import React from 'react'
import { Link } from 'react-router-dom'
import YoutubeEmbed from './YoutubeEmbed'

const lessons=[1,2,4,5,6,7,8,9,0]
const Lesson = () => {
  return (
    <div className='w-full grid lg:grid-cols-4'>
        <div className='bg-secondary min-h-screen max-h-screen overflow-y-hidden hidden lg:block'>
            <header className='bg-primary px-4 text-center'>
                <h1 className="text-secondary font-bold text-lg py-2">Table of contents</h1>
            </header>
            <ul className='px-4 overflow-y-auto max-h-screen pb-28'>
                {lessons.map((lesson,index)=>(
                    <li className='my-2' key={index}>
                        <Link className={`${index==1?'text-primary font-bold underline':'text-text_secondary'} break-words text-sm hover:text-primary hover:underline delay-100 duration-500`}><span className='font-semibold'>Lesson {index+1}:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                    </li>
                ))}
                

            </ul>
        </div>
        <div className='col-span-3 overflow-y-auto max-h-screen min-h-screen lg:px-12 py-4 w-full'>
            <h1 className='text-lg text-text_secondary'><span className='lg:mx-2'>Lesson 2:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            
            <YoutubeEmbed embedId="rokGy0huYEA"/>
        </div>
    </div>
  )
}

export default Lesson