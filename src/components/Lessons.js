import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import {BsJournalBookmark} from 'react-icons/bs'
import {CiLock,CiUnlock} from 'react-icons/ci'
import { connect } from 'react-redux'

function Lessons(props){
    const location=useLocation()
    const navigate=useNavigate()
    
    return(
        <div>
            <div className='flex justify-between mb-4'>
                <h1 className="text-text_secondary font-bold text-lg py-2">Table of contents</h1>
                {location.pathname.includes("users/admin/courses") &&
                <div>
                    <Button size="sm" className='bg-primary text-sm text-secondary' onClick={()=>props?.setOpenModel(!props?.openModel)}>Add lesson</Button>
                </div>}

            </div>
            {!props?.enrolledMembers.some(async(obj) => obj._id === await props?.data?.memberProfile?.resp?.data?.getProfile?._id) && !location.pathname.includes("users/admin/courses") && <p className='text-sm text-primary'>You have to enroll first to access course lessons</p>}
            {props?.Lessons?.length <=0?(
                <div className='h-56 flex items-center justify-center lg:col-span-3'>
                    <p className='text-text_secondary text-center text-sm'>No lesson is added yet</p>
                </div>
            ):(
                props?.Lessons?.map((lesson,index)=>(
                    !location.pathname.includes("users/admin/courses")?(
                        <button key={index} onClick={()=>navigate(`lesson/${lesson?._id}`,{replace:true})}
                        className={`flex justify-between py-4 border-b border-text_secondary_2 w-full hover:opacity-80 delay-100 duration-200 ${props?.enrolledMembers.some(async(obj) => obj._id === await props?.data?.memberProfile?.resp?.data?.getProfile?._id) && !location.pathname.includes("users/admin/courses")?'cursor-pointer':'cursor-not-allowed'}`} 
                        disabled={props?.enrolledMembers.some(async(obj) => obj._id === await props?.data?.memberProfile?.resp?.data?.getProfile?._id) && !location.pathname.includes("users/admin/courses")?false:true }>
                            <div className="flex justify-start gap-3 text-text_secondary font-normal text-md w-full">
                                <BsJournalBookmark size={20}/>
                                {lesson?.lessonTitle}
                            </div>
                            
                                <div className="w-12 text-text_secondary">
                                    {props?.enrolledMembers.some(async(obj) => obj._id === await props?.data?.memberProfile?.resp?.data?.getProfile?._id)?<CiUnlock size={20}/>:<CiLock size={20}/>}
                                </div>
                            
                        </button>
                    ):(
                        <Link key={index} to={`lesson/${lesson?._id}`}  className="flex justify-start py-4 border-b border-text_secondary_2 gap-3 hover:opacity-80 delay-100 duration-200 text-text_secondary font-normal text-md w-full">
                            <BsJournalBookmark size={20}/>
                            {lesson?.lessonTitle}.
                        </Link>
                    )
                ))
                
            )}

            

        </div>
    )
}


const mapState=(data)=>({
    data:data
})

export default connect(mapState) (Lessons)