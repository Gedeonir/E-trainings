import React,{useEffect,useState} from 'react'
import {BsJournalBookmark} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import axios from '../redux/Actions/axiosConfig'
import { connect } from 'react-redux';

const Card2 = (props) => {
    const [data,setData]=useState([])
    const [error,setError] = React.useState("")
    const [loading,setLoading]=React.useState(false);
    const [percentage,setPercentage]=useState(0)

    const getLessons=async()=>{
        setLoading(true);

        try {
            const response = await axios.get(`${process.env.BACKEND_URL}/course/${props?.course?._id}/lessons`);

            
            const getLessonsCompleted=response?.data?.filter((lesson)=>lesson.completedBy.some((entry) => entry?.member===props?.data?.memberProfile?.resp?.data?.getProfile?._id))            
            const progressPercentage= getLessonsCompleted?.length * 100
            const allLessons=response?.data?.length<=0?1:response?.data?.length
            setPercentage(progressPercentage/allLessons);
            setData(response?.data);

          } catch (error) {
            setError(error?.response?.data?.message)
        }
        setLoading(false);
    }

    useEffect(()=>{
        getLessons()

    },[data])



  return (
    <div className='rounded-sm p-2 bg-text_secondary bg-opacity-10 shadow-sm cursor-pointer'>
        <h3 className='my-3 font-medium truncate'>{props?.course?.courseTitle} </h3>
        
        <div className='w-full flex justify-between py-2 gap-2'>
            <div className='h-2 w-11/12 bg-text_secondary_2 rounded-full'>
                <div
                    style={{ width: `${percentage}%`}}
                    className={`h-full bg-primary rounded-full`}>
                </div>
            </div>
            <label className='text-primary font-bold text-sm -mt-2'>{percentage}%</label>
        </div>

        <div className='flex justify-start gap-1 text-text_secondary my-3'>
            <BsJournalBookmark size={20}/>
            <label className='text-sm font-bold'>{data?.length} Lessons</label>
        </div>

        <Link to="#" className='flex justify-start text-text_secondary gap-1 text-sm group underline'><span className='group-hover:mx-2 delay-100 duration-500'>Continue my courses</span> <BsArrowRight className='my-1' size={15}/></Link>

        
    </div>
  )
}


const mapState=(data)=>({
    data:data
})


export default connect(mapState,{

})(Card2)