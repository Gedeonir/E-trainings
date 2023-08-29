import React,{useState,useEffect} from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { connect } from 'react-redux';
import { fetchAllCourses, fetchPopularCourse } from '../../../redux/Actions/CoursesAction';
import { fetchMembersByScore, getAllMembers } from '../../../redux/Actions/membersAction';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
function AdminHome(props) {
  useEffect(()=>{
    props.fetchPopularCourse()
    props.getAllMembers()
    props.fetchMembersByScore()
  },[])

  const getMembers = (courseCategory)=>{
    let filteredMembers=courseCategory=='Junior'?(
      props?.data?.AllMembers?.resp?.data?.filter(item=>item?.memberCategory=='Junior')
    ):(
      courseCategory=='Flowers'?(
        props?.data?.AllMembers?.resp?.data?.filter(item=>item?.memberCategory=='Junior' ||item?.memberCategory=='Flowers')

      ):(
        courseCategory=='Eagle'?(
          props?.data?.AllMembers?.resp?.data?.filter(item=>item?.memberCategory=='Junior' ||item?.memberCategory=='Flowers'||item?.memberCategory=='Eagle')
  
        ):(
          courseCategory=='Excellent'?(
            props?.data?.AllMembers?.resp?.data?.filter(item=>item?.memberCategory=='Junior' ||item?.memberCategory=='Flowers'||item?.memberCategory=='Eagle'||item?.memberCategory=='Excellent')
    
          ):(
            props?.data?.AllMembers?.resp?.data?.filter(item=>item)
          )
        )
      )
    )

    return filteredMembers?.length


  }

  const navigate=useNavigate()

  

  return (
    <DashboardLayout>
    <div className='lg:px-8 px-4 w-full mx-auto relative max-h-screen overflow-y-auto pb-12'>
      <div className='py-4'>
        <h1 className='flex justify-start gap-2 items-end text-primary font-medium lg:text-2xl text-lg w-full'>
          Dashboard
        </h1>
      </div>

      <div className='grid lg:grid-cols-3 gap-4'>
        <div className="flex flex-col lg:col-span-2 py-4">
          <h2 className='flex justify-start gap-2 items-end text-primary font-bold text-sm w-full'>
            Top members
          </h2>

          <div className="lg:overflow-x-hidden overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-xs text-text_secondary font-light">
                  <thead className="border-b border-text_secondary_2 font-medium">
                    <tr>
                      <th scope="col" className="px-2 py-4">#</th>
                      <th scope="col" className="px-2 py-4">Full names</th>
                      <th scope="col" className="px-2 py-4">Mobile</th>
                      <th scope="col" className="px-2 py-4">Category</th>
                      <th scope="col" className="px-2 py-4">District</th>
                      <th scope="col" className="px-2 py-4">Church</th>
                      <th scope="col" className="px-2 py-4">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                  {props?.data?.topMembers?.loading?(
                    <tr>
                      <td className="px-2 py-4 font-medium text-center" colSpan={9}><AiOutlineLoading3Quarters size={15} className="animate-spin mx-auto"/></td>
                    </tr>
                  ):(
                    props?.data?.topMembers?.success?( 
                    props?.data?.topMembers?.resp?.data.map((member,index)=>(
                          <tr key={index} onClick={()=>handleDetails(member._id)}
                          className="border-b cursor-pointer delay-100 border-text_secondary_2 transition duration-300 ease-in-out hover:bg-secondary">
                              <td className="px-2 py-4 font-medium">{index+1}</td>
                              <td className="px-2 py-4 flex justify-start gap-2">
                                  <div className="h-4 w-4 rounded-full">
                                      <img 
                                      src={!member?.profilePicture?'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png':`${member?.profilePicture}`} className='w-full h-full object-cover rounded-full'/>
                                  </div>
                                  {member?.fullNames}
                              </td>
                              <td className="px-2 py-4">{member?.mobile}</td>
                              <td className="px-2 py-4">{member?.memberCategory}</td>
                              <td className="px-2 py-4">{member?.district}</td>
                              <td className="px-2 py-4 font-medium">{member?.church}</td>
                              <td className="px-2 py-4 font-medium">{member?.score}</td>

                          </tr>
                      )).slice(0,5)):(
                        <p></p>
                      ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col bg-secondary p-4">
          <h2 className='flex justify-start gap-2 items-end text-primary font-bold text-sm w-full mb-4'>
            Top courses
          </h2>
          {props?.data?.popularCourses?.loading?(
            <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
              <AiOutlineLoading3Quarters size={15} className="animate-spin w-8 h-8"/>
            </div>
          ):(
            props?.data?.popularCourses?.success?( 
            props?.data?.popularCourses?.resp?.data?.map((course)=>(
              <div key={course._id} className='flex justify-start gap-2 w-full mb-2 cursor-pointer hover:opacity-70 delay-100 duration-200 transition-all ease-in-out' onClick={()=>navigate(`/users/admin/courses/${course?._id}`)}>
                <div className='h-14 w-14'>
                  <img src={course?.courseIcon?course?.CourseIcon:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPqmpE5TW_Ks80SvlDQzbL_BC2kr21WPPWA&usqp=CAU'}
                  className='w-full h-full object-cover'/>
                </div>
                <div className='w-full text-xs text-text_secondary'>
                  <h2 className='text-xs font-semibold'>{course.courseTitle}</h2>
                  <p>{course.courseCategory?.categoryName}</p>
                  <div className='grid grid-cols-2'>
                    <div className='text-xs'>
                      <label>Total enrolled</label>
                      <p className='font-semibold'>{course?.enrolledMembers?.length}
                        <span className='font-normal'>({Math.floor((course?.enrolledMembers?.length*100)/getMembers(course.courseCategory?.categoryName))}%)
                        </span>
                      </p>
                    </div>
                    <div className='text-xs'>
                      <label>Completed by</label>
                      <p className='font-semibold'>{course?.completedBy?.length}<span className='font-normal'>({(course?.completedBy?.length*100)/course?.enrolledMembers?.length}%)</span></p>
                    </div>

                  </div>
                </div>
              </div>
            ))
          ):(
            <p></p>
          ))}
        </div>
      </div>
    </div>
      
    </DashboardLayout>
  )
}

const mapState=(data)=>({
  data:data
})

export default connect(mapState,{
  fetchPopularCourse,
  getAllMembers,
  fetchMembersByScore

})(AdminHome)

