import React, { useEffect, useState } from 'react'
import {BsJournalBookmark} from 'react-icons/bs'
import {GoPeople} from 'react-icons/go'
import {AiOutlineHeart} from 'react-icons/ai'
import { useNavigate, useParams,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCoursesLessons } from '../redux/Actions/CoursesAction';
import axios from '../redux/Actions/axiosConfig';
import {CiLock,CiUnlock} from 'react-icons/ci'


const Card = (props) => {
    const navigate=useNavigate()
    const [error,setError] = React.useState("")
    const [loading,setLoading]=React.useState(false);
    const [data,setData]=useState([])
    const getLessons=async()=>{
        setLoading(true);

        try {
            const response = await axios.get(`${process.env.BACKEND_URL}/course/${props?.course?._id}/lessons`);

            setData(response?.data);

          } catch (error) {
            setError(error?.response?.data?.message)
        }
        setLoading(false);
    }

    const [restricted,setRestricted]=useState({
        status:false,
        message:""
    })


    useEffect(()=>{
        getLessons()

        if(props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory?.toLowerCase()=='junior'
            &&props?.course?.courseCategory?.categoryName.toLowerCase() !="junior"){
                setRestricted({
                    ...restricted,
                    status:true,
                    message:"This course is not available on Junior level"
                })
        }else if(props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory?.toLowerCase()=='flowers' && props?.course?.courseCategory?.categoryName.toLowerCase() !="flowers"
        ){
            if(props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory?.toLowerCase()=='flowers' && props?.course?.courseCategory?.categoryName.toLowerCase() !="junior")
                setRestricted({
                    ...restricted,
                    status:true,
                    message:"This course is not available on Junior,Flowers level"
                })
        }else if(props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory?.toLowerCase()=='eagle'
            &&(props?.course?.courseCategory?.categoryName.toLowerCase() !="eagle")
        ){
            if(props?.course?.courseCategory?.categoryName.toLowerCase() !="junior")
                if(props?.course?.courseCategory?.categoryName.toLowerCase() !="flowers")
                    setRestricted({
                        ...restricted,
                        status:true,
                        message:"This course is not available on Junior,Flowers,Eagle level"
                    })


        }else if(props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory?.toLowerCase()=='excellent'
            &&(props?.course?.courseCategory?.categoryName.toLowerCase() !="excellent")
        ){
            if(props?.course?.courseCategory?.categoryName.toLowerCase() !="junior")
                if(props?.course?.courseCategory?.categoryName.toLowerCase() !="flowers")
                    if(props?.course?.courseCategory?.categoryName.toLowerCase() !="eagle")
                        setRestricted({
                            ...restricted,
                            status:true,
                            message:"This course is not available on Junior,Flowers,Eagle level"
                        })

        }else{
            setRestricted({
                ...restricted,
                status:false,
                message:""
            })
        }

    },[props?.data?.memberProfile?.success,props.data?.allCourses?.success])

    const isEligible=(courseCategory,memberCategory)=>{
        if (courseCategory?.toLowerCase() =='golden'
        &&memberCategory?.toLowerCase() !="golden") {
            return false
        }else if (courseCategory?.toLowerCase() =='excellent'&&memberCategory?.toLowerCase() !="excellent") {
            if(memberCategory?.toLowerCase() !="golden")
                return false
            else return true
        }else if (courseCategory?.toLowerCase() =='eagle'&&memberCategory?.toLowerCase() !="eagle") {
            if(memberCategory?.toLowerCase() =="flowers")
                return false
            else if(memberCategory?.toLowerCase() =="junior")
                return false
            else return true
            
        }else if (courseCategory?.toLowerCase() =='flowers'&&memberCategory?.toLowerCase() !="flowers") {
            if(memberCategory?.toLowerCase() =="junior")
                return false
            else return true
            
        }
        else{
            return true
        }
    }


    

  return (
    <div className='h-64 cursor-pointer shadow-lg hover:shadow-text_secondary delay-100 duration-500 bg-secondary' onClick={()=>navigate(`/${props?.path}/${props?.course?._id}`)}>
        <div className='h-32'>
            <img src={props?.course?.courseIcon?props?.course?.courseIcon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPqmpE5TW_Ks80SvlDQzbL_BC2kr21WPPWA&usqp=CAU'}
            className='w-full h-full object-cover'/>
        </div>
        <div className='px-4 py-2'>        
            <div className='flex justify-between text-primary'>
                <label className='bg-primary px-1.5 rounded-lg py-0.5 font-medium  text-xs bg-opacity-20'>{props?.course?.courseCategory?.categoryName}</label>
                {!isEligible(props?.course?.courseCategory?.categoryName,props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory) && <CiLock size={20}/>}
            </div>

            <h1 className='my-2 font-medium text-sm'>{props?.course?.courseTitle}</h1>

            <div className='flex justify-start gap-1 mb-2'>
                <div className='h-4 w-4 rounded-full'>
                    <img src={props?.course?.courseTutors?.profilePicture?props?.course?.courseTutors?.profilePicture:'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'} 
                    className='w-full h-full object-cover rounded-full'/>
                </div>
                <label className='font-regural text-text_secondary text-xs'>{props?.course?.courseTutors?.fullNames}</label>

            </div>

            <div className='grid grid-cols-2 gap-2 py-2'>
                <div className='flex justify-start gap-1 text-text_secondary'>
                    <BsJournalBookmark size={15}/>
                    <label className='text-xs font-bold'>{data?.length} lessons</label>
                </div>
                <div className='flex justify-end gap-1 text-text_secondary'>
                    <GoPeople size={15}/>
                    <label className='text-xs font-bold'>{props?.course?.enrolledTrainees?.length}</label>
                </div>

            </div>
        </div>
    </div>
  )
}

const mapState=(data)=>({
    data:data
})

export default connect(mapState,{
    fetchAllCoursesLessons
})(Card)