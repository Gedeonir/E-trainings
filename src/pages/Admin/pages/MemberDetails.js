import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getOneMember } from '../../../redux/Actions/membersAction';
import { AiOutlineLoading3Quarters,AiOutlineClose } from 'react-icons/ai';
import { fetchAllCourses } from '../../../redux/Actions/CoursesAction';
import Card3 from '../components/Card3';


export const MemberDetails = (props) => {
    useEffect(()=>{
        props.getOneMember(props?.id)
        props.fetchAllCourses()
    },[])

    const getUserCourse=props?.data?.allCourses?.resp?.data?.filter(course=>course.enrolledMembers.some((obj) => obj?.member===props?.id))

 


  return (
    <div className='max-h-screen flex items-end justify-end absolute min-h-screen top-0 z-40 bg-opacity-40 bg-secondary w-full left-0 right-0'>
        <div className='min-h-screen max-h-screen overflow-y-auto bg-secondary lg:w-1/4 w-full shadow-sm relative pb-8'>

            {props?.data?.oneMember?.loading?(
                <div className='max-h-screen flex items-center min-h-screen'>
                    <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
                        <AiOutlineLoading3Quarters size={14} className="animate-spin w-8 h-8"/>
                    </div>
                </div>
            ):(props?.data?.oneMember?.success?(

                <>
                    <h1 className='flex justify-between mb-2 gap-2 py-4 px-4 text-primary font-medium text-sm w-full sticky top-0 bg-secondary'>
                        <label>{props?.data?.oneMember?.resp?.data?.getOneMember?.fullNames}'s<span className='font-normal'> Profile</span></label>
                        <AiOutlineClose onClick={()=>props?.setOpenDetails(false)} className='cursor-pointer rounded-full text-secondary right-2 bg-primary w-4 h-4 p-1'/>

                    </h1>
                    <div className='w-full lg:h-52 h-72'>
                        <img src='https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png' className='w-full h-full object-fit'/>
                    </div>
                    <div className='px-4 py-4'>
                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify"><span className='font-bold'>Full names:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.fullNames}</p>
                        </div>
                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify py-1"><span className='font-bold'>Age:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.age}({new Date().getFullYear() - new Date(props?.data?.oneMember?.resp?.data?.getOneMember?.age).getFullYear()} years old)</p>
                        </div>
                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify py-1"><span className='font-bold'>Mobile:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.mobile}</p>
                        </div>
                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify"><span className='font-bold'>Category:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.memberCategory}</p>
                        </div>
                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify"><span className='font-bold'>Status:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.isMarried?"Married":"Not married"}</p>
                        </div>
                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify"><span className='font-bold'>Marriage year:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.yearOfMarriage?`${props?.data?.oneMember?.resp?.data?.getOneMember?.yearOfMarriage}(${new Date().getFullYear() - props?.data?.oneMember?.resp?.data?.getOneMember?.yearOfMarriage} years)`:"-"}</p>
                        </div>

                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify"><span className='font-bold'>District:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.district}</p>
                        </div>

                        <div className="grid text-text_secondary py-1">
                            <p className="text-xs text-justify"><span className='font-bold'>Church:</span> {props?.data?.oneMember?.resp?.data?.getOneMember?.church}</p>
                        </div>      

                    </div>

                    <div className='px-4 mb-2'>
                        <h1 className='mb-2 gap-2 text-primary font-medium text-sm w-full'>
                            {props?.data?.oneMember?.resp?.data?.getOneMember?.fullNames}'s<span className='font-normal'> courses</span>
                        </h1>

                        {getUserCourse?.length <=0?(
                            <p className='text-text_secondary text-center text-xs py-4 px-2'>You are not enrolled in any course yet</p>
                        ):(
                            getUserCourse?.map(course=>(
                                <Card3 key={course._id} userId={props?.id} course={course}/>
                            ))
                        )}                      

                    </div>
                    <div className='px-4'>
                        <button size='sm' className={`px-3 border text-sm border-danger text-danger w-full cursor-pointer font-medium rounded-lg py-1`}>
                            Suspend Member                              
                        </button>
                       
                    </div>
                </>
            ):(
                <div className='max-h-screen flex items-center min-h-screen'>
                    <p className='text-center'></p>
                </div>
            ))}
           
        </div>
    </div>
  )
}

const mapState = (data) => ({
    data:data
})


export default connect(mapState,{
    getOneMember,
    fetchAllCourses

})(MemberDetails)