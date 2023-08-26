import React, { useEffect,useState } from 'react'
import axios from '../../../redux/Actions/axiosConfig'

const Card3 = (props) => {
    const [percentage,setPercentage]=useState(0)


    const getCourseProgress=async()=>{
        try {
            const response = await axios.get(`${process.env.BACKEND_URL}/course/${props?.course?._id}/lessons`);

            
            const getLessonsCompleted=response?.data?.filter((lesson)=>lesson.completedBy.some((entry) => entry?.member===props?.userId))            
            const progressPercentage= getLessonsCompleted?.length * 100
            const allLessons=response?.data?.length<=0?1:response?.data?.length
            setPercentage(progressPercentage/allLessons);

        } catch (error) {
            return 0
        }
    }

    useEffect(()=>{
        getCourseProgress()
    },[percentage])


  return (
    <div className='flex justify-start gap-2 w-full'>
        <div className='h-12 w-12'>
            <img src={props?.course?.courseIcon?props?.course?.courseIcon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPqmpE5TW_Ks80SvlDQzbL_BC2kr21WPPWA&usqp=CAU'}
            className='w-full h-full object-cover'/>
        </div>
        <div className='w-full text-xs text-text_secondary'>
            <h2 className='text-xs font-semibold'>{props?.course.courseTitle}</h2>
            <p>{props?.course?.courseCategory?.categoryName}</p>
            <div className='w-full flex justify-between py-2 gap-2'>
                <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                    <div
                        style={{ width: `${percentage}%`}}
                        className={`h-full bg-primary rounded-full`}>
                    </div>
                </div>
                <label className='text-primary font-bold text-xs -mt-2'>{percentage}%</label>
            </div>
        </div>
    </div>
  )
}

export default Card3