import React from 'react'
import { Link } from 'react-router-dom'
import YoutubeEmbed from './YoutubeEmbed'
import {PiDotsNineBold} from 'react-icons/pi'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'


const lessons=[1,2,4,5,6,7,8,9,0]
const Lesson = () => {
  return (
    <div className='w-full grid lg:grid-cols-4'>
        <div className='min-h-screen max-h-screen overflow-y-hidden hidden lg:block py-4'>
            <header className='bg-primary px-4 text-center'>
                <h1 className="text-secondary font-bold text-xs py-2">Table of contents</h1>
            </header>
            <ul className='px-4 overflow-y-auto max-h-screen pb-28 p-0 list-none'>
                {lessons.map((lesson,index)=>(
                    <li className='my-2' key={index}>
                        <Link className={`${index==1?'text-primary font-bold underline':'text-text_secondary'} break-words text-sm hover:text-primary hover:underline delay-100 duration-500`}><span className='font-semibold'>Lesson {index+1}:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                    </li>
                ))}
                

            </ul>
        </div>
        <div className='col-span-3 overflow-y-auto max-h-screen min-h-screen px-4 py-4 w-full pb-24'>
            <div className='flex justify-between gap-4 text-text_secondary'>
                <h1 className='text-lg'><span className='lg:mx-2'>Lesson 2:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <div className='relative group cursor-pointer'>
                    <PiDotsNineBold size={20}/>

                    <ul className='text-sm absolute right-0 bg-secondary w-20 hidden group-hover:block'>
                        <li className='p-2 hover:text-primary'>Edit</li>
                        <li className='p-2 hover:text-primary'>Delete</li>
                    </ul>
                </div>
            </div>            
            <YoutubeEmbed embedId="rokGy0huYEA"/>

            <div className='py-4 text-text_secondary'>
                <h3 className='border-b border-primary font-bold mb-6'>Notes</h3>

                <p className='leading-8 text-justify'>
                    Sint velit voluptate deserunt ea eiusmod veniam non aliquip esse proident commodo ut. Et aliqua fugiat non ipsum amet qui laboris irure culpa ullamco non minim nisi dolore. Cillum in commodo id enim ut qui laboris minim Lorem officia aliqua ea tempor do.

                    Occaecat eu aliqua officia enim officia. Duis excepteur pariatur tempor non ad. Amet ut duis enim magna ex. Qui et enim officia minim veniam mollit et quis anim laboris nulla labore. In labore fugiat duis quis.
                </p>
            </div>

            <div className='flex justify-between my-3'>
                <Link to="" className="flex gap-2 items-center px-3 border border-primary text-primary font-bold rounded-lg py-2">
                    <BsArrowLeft size={20}/>
                    <span className={`text-sm   duration-500 ease-in-out`}>Previous Lesson</span>
                </Link>

                <Link to="" className="flex gap-2 items-center px-3 border border-primary text-primary font-bold rounded-lg py-2">
                    <span className={`text-sm  duration-500 ease-in-out`}>Next Lesson</span>
                    <BsArrowRight size={20}/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Lesson