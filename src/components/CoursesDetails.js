import React, { Children, useEffect, useState } from 'react'
import Layout from './Layout'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import {LiaChalkboardTeacherSolid} from 'react-icons/lia'
import {SlBookOpen} from 'react-icons/sl'
import {FaLanguage} from 'react-icons/fa'
import {GoPeople} from 'react-icons/go'
import { Button } from '@material-tailwind/react'
import {AiFillStar} from 'react-icons/ai'
import {BsBookmarks,BsJournalBookmark} from 'react-icons/bs'
import {CiLock} from 'react-icons/ci'
import { connect } from 'react-redux'
import { fetchOneCourses, getQuestions, getQuizzes } from '../redux/Actions/CoursesAction'
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { fetchAllCoursesLessons } from '../redux/Actions/CoursesAction';
import axios from '../redux/Actions/axiosConfig'
import * as XLSX from 'xlsx';
import {FaFileExport} from 'react-icons/fa'
import Lessons from './Lessons'
import { CiWarning } from 'react-icons/ci'
import {BsArrowRight} from 'react-icons/bs'
import Restricted from './Restricted'
import EnrolledUsers from './EnrolledUsers'
import { memberFetchProfileAction } from '../redux/Actions/membersAction'
import { Confirm } from './Confirm'

function Overview({Overview}){

    return (
        <div>
            <h1 className="text-text_secondary font-bold text-sm mb-4">Course description</h1>

            <div className="leading-8 text-justify text-md text-text_secondary text-sm" dangerouslySetInnerHTML={{ __html: Overview }} />
        </div>
    )
}

function Reviews({reviews}){
    const location=useLocation()

    return(
        <div>
            <h1 className="text-text_secondary font-bold text-sm mb-4">Ratings and review</h1>

            {reviews.length <=0 ?(
                <div className='flex items-center justify-center'>
                    <p className='text-text_secondary text-center text-sm'>Course have no review yet</p>
                </div>
            ):(
                <>
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <label className="lg:text-sm text-xs font-normal text-text_secondary">Average rating</label>

                        <div className="bg-secondary p-2 rounded-md py-4 my-4">
                            <p className='lg:text-6xl text-3xl p-2 font-bold text-primary text-center w-full'>4.5</p>
                            <div className='flex justify-center mt-8'>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#6b7280'/>

                            </div>

                            <p className="text-center lg:text-sm text-xs font-normal text-text_secondary">9 Reviews</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="lg:text-sm text-xs font-normal text-text_secondary">Detailed rating</label>
                        <div className="bg-secondary p-2 rounded-md py-4 my-4">
                            <div className="py-2">
                                <div className='w-full flex justify-between gap-2'>
                                    <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                        <div
                                            style={{ width: `100%`}}
                                            className={`h-full bg-primary rounded-full`}>
                                        </div>
                                    </div>
                                    <label className='text-text_secondary font-bold lg:text-sm text-xs -mt-2'>100%</label>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className='w-full flex justify-between gap-2'>
                                    <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                        <div
                                            style={{ width: `30%`}}
                                            className={`h-full bg-primary rounded-full`}>
                                        </div>
                                    </div>
                                    <label className='text-text_secondary font-bold lg:text-sm text-xs -mt-2'>30%</label>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className='w-full flex justify-between gap-2'>
                                    <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                        <div
                                            style={{ width: `10%`}}
                                            className={`h-full bg-primary rounded-full`}>
                                        </div>
                                    </div>
                                    <label className='text-text_secondary font-bold lg:text-sm text-xs -mt-2'>10%</label>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className='w-full flex justify-between gap-2'>
                                    <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                        <div
                                            style={{ width: `5%`}}
                                            className={`h-full bg-primary rounded-full`}>
                                        </div>
                                    </div>
                                    <label className='text-text_secondary font-bold lg:text-sm text-xs -mt-2'>5%</label>
                                </div>
                            </div>

                            <div className="py-2">
                                <div className='w-full flex justify-between gap-2'>
                                    <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                        <div
                                            style={{ width: `0%`}}
                                            className={`h-full bg-primary rounded-full`}>
                                        </div>
                                    </div>
                                    <label className='text-text_secondary font-bold text-sm -mt-2'>0%</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="my-4">
                    <h1 className="text-text_secondary text-lg mb-4">Comments({reviews.length})</h1>


                    <div className='border-b border-text_secondary_2 pt-3 pb-4'>
                        <div className="flex justify-start gap-4">
                            <div className="py-3 w-20">
                                <div className="h-14 w-14 rounded-full">
                                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover rounded-full'/>
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className="lg:flex justify-between">
                                    <div className="grid text-text_secondary mb-4">
                                        <label className="font-bold text-sm">User name</label>
                                        <small>August 8, 2012 at 9:22 am</small>
                                    </div>

                                    <div className='flex justify-center'>
                                        <AiFillStar color='#ca8a04'/>
                                        <AiFillStar color='#ca8a04'/>
                                        <AiFillStar color='#ca8a04'/>
                                        <AiFillStar color='#ca8a04'/>
                                        <AiFillStar color='#6b7280'/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-text_secondary font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam massa, tempus sit amet ullamcorper eget, pharetra vel dolor. Nulla varius augue ut dolor vulputate dapibus in quis leo.</p>
                        </div>
                    </div>
                

                </div>
                </>
            )}



            {!location.pathname.includes("users/admin/courses") &&
            <div className="my-2">
                <h1 className="text-text_secondary text-lg mb-4">Leave Comment</h1>
                
                <div className='flex justify-start my-4'>
                    <p className="text-sm font-normal text-text_secondary">Ratings:</p>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#6b7280'/>

                </div>

                <textarea type="text" className=" border border-text_secondary_2 rounded-lg shadow-sm text-text_secondary text-sm outline-none block w-full p-2.5 placeholder-text_secondary_2 mb-3" rows="4" placeholder="Type in keyword" required/>
                <Button className='lg:w-1/5 w-full my-4 bg-primary text-sm text-secondary py-3'>Submit Review</Button>

                
            </div>
            }
        </div>
    )
}




const CoursesDetails = (props) => {

    const [section,setSections]=React.useState("overview");
    const [loading,setLoading]=useState(false)
    const[error,setError]=useState("");
    const [success,setSuccesMsg]=useState({
        status:false,
        succesMsg:""
    })

    const [openDelete,setOpenDelete]=useState(false);


    const [restricted,setRestricted]=useState({
        status:false,
        message:""
    })


    const location=useLocation();

    const params=useParams();

    const [response,setResponse]=useState({
        loading:null,
        success:null,
        resp:null,
        error:null,
    })

    const navigate=useNavigate()


    const handleDelete=async()=>{
        setResponse({
            ...response,
            loading:true
        })
        try {
            const res=await axios.delete(`${process.env.BACKEND_URL}/course/${params.id}`,
            {
                headers:{
                    "Authorization":`Bearer ${sessionStorage.getItem('userToken')}`
                }
            })


            setResponse({
                ...response,
                loading:false,
                success:true,
                resp:res.data.message

            })

            setOpenDelete(false)
        } catch (error) {
            setResponse({
                ...response,
                loading:false,
                success:false,
                error:error?.response?.data?.message
            })
        }

       
    }

    const handleEnroll=async()=>{
        
        setLoading(true);

        try {
            const response = await axios.patch(
              `${process.env.BACKEND_URL}/trainee/enroll/${params.id}`,
              {
                headers:{
                "Authorization":`Bearer ${sessionStorage.getItem('memberToken')}`
                }
            }
            );


            setSuccesMsg({
                ...success,
                status:true,
                succesMsg:response?.data?.message
            })

            props.fetchOneCourses(params.id)

          } catch (error) {
            setError(error?.response?.data?.message)
        }
        setLoading(false);
    }


   

    useEffect(()=>{
        props.memberFetchProfileAction();
        props.fetchOneCourses(params.id)
        props.fetchAllCoursesLessons(params.id)
        props.getQuizzes(params.id)
    },[props?.data?.addLesson?.success,props?.data?.addQuizz?.success])


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
    <div className='relative'>
        

        {response.success?(
            <div className="flex justify-center items-center w-full min-h-screen z-30 bg-secondary">
                <div className="text-text_secondary text-4xl text-center">
                    <label className="text-sm">{response.resp}</label>
                    <div className="flex w-full justify-start my-4">
                        <button className=" text-secondary text-sm p-2 bg-primary w-full" onClick={()=>navigate(`/users/admin/courses`,{replace:true})}>Take me back to courses</button>
                    </div>
                </div>
            </div>
        ):(
            props?.data?.oneCourse?.loading?(
                <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
                    <AiOutlineLoading3Quarters size={15} className="animate-spin w-8 h-8"/>
                </div>
            ):(
                props?.data?.oneCourse?.success?(
                <>
                <div className={`h-64 bg-cover bg-center bg-no-repeat ${props?.data?.oneCourse?.resp?.data?.getCourse?.courseIcon?`bg-url[${props?.data?.oneCourse?.resp?.data?.getCourse?.courseIcon}`:'bg-url[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPqmpE5TW_Ks80SvlDQzbL_BC2kr21WPPWA&usqp=CAU]'} w-full bg-cover bg-center`}>
                    <div className='h-64 bg-secondary w-full lg:px-12 px-4 bg-opacity-95 lg:flex block gap-4 justify-between py-8'>
                        <div className='lg:py-12 py-4 w-full'>
                            <h1 className='text-primary font-bold lg:text-4xl mb-4 text-2xl'>{props?.data?.oneCourse?.resp?.data?.getCourse?.courseTitle}</h1>
                        </div>
                        <div className='w-full grid grid-cols-3 lg:py-12 py-4 '>
                            <div className='w-full h-12 flex justify-start gap-2'>
                                <div className='w-12 h-12'>
                                    <img src={props.data?.oneCourse?.resp?.data?.getCourse?.courseTutors?.profilePicture?props?.data?.oneCourse?.resp?.data?.getCourse?.courseTutors?.profilePicture:'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png'}
                                    className='w-full h-full object-cover rounded-full'/>
                                </div>
                                <div>
                                    <label className='text-xs text-text_secondary'>Teacher</label>
                                    <p className='text-xs font-medium'>{props?.data?.oneCourse?.resp?.data?.getCourse?.courseTutors?.fullNames}</p>

                                </div>
                            </div>
                            <div className='w-full h-12 gap-2 border-l border-r text-center px-2'>
                                <label className='text-xs text-text_secondary'>Category</label>
                                <p className='text-sm font-medium'>{props?.data?.oneCourse?.resp?.data?.getCourse?.courseCategory?.categoryName}</p>
                            </div>
                            <div className='w-full h-12 gap-2 text-center px-4'>
                                <label className='text-sm text-text_secondary'>4.5 (9 Reviews)</label>
                                <div className='flex justify-center'>
                                    <AiFillStar color='#ca8a04'/>
                                    <AiFillStar color='#ca8a04'/>
                                    <AiFillStar color='#ca8a04'/>
                                    <AiFillStar color='#ca8a04'/>
                                    <AiFillStar color='#ca8a04'/>

                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
                {!location.pathname.includes("users/admin/courses") && !isEligible(props?.data?.oneCourse?.resp?.data?.getCourse?.courseCategory?.categoryName,props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory)?(
                    <Restricted message={`This course is not available to your ${props?.data?.memberProfile?.resp?.data?.getProfile?.traineeCategory} level`}/>
                ):(
                    <div className='my-12 lg:px-14 w-full px-4 lg:flex justify-between gap-4'>
                        <div className='border border-secondary rounded-lg lg:w-3/4 w-full mb-4'>
                            <div className="border-b border-secondary">
                                <ul className="flex flex-wrap -mb-px text-text_secondary text-sm font-bold text-center bg-secondary p-0 list-none">
                                    <li className="mr-2" role="presentation" onClick={()=>setSections("overview")}>
                                        <button className={`inline-block p-4 border-t-2 ${section==="overview" ?'border-primary bg-btn_primary text-primary':'border-secondary'}  rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><BsBookmarks size={20}/>Overview</button>
                                    </li>
                                    <li className="mr-2" role="presentation" onClick={()=>setSections("curicullum")}>
                                        <button className={`inline-block p-4 border-t-2 ${section==="curicullum" ?'border-primary bg-btn_primary text-primary':'border-secondary'} rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><SlBookOpen size={20}/>Table of contents</button>
                                    </li>
                                    {location.pathname.includes("users/admin/courses") &&
                                    <li className="mr-2" role="presentation" onClick={()=>setSections("enrolled")}>
                                        <button className={`inline-block p-4 border-t-2 ${section==="enrolled" ?'border-primary bg-btn_primary text-primary':'border-secondary'} rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><GoPeople size={20}/>Enrolled</button>
                                    </li>
                                    }
                                    <li role="presentation" onClick={()=>setSections("ratings")}>
                                        <button className={`inline-block p-4 border-t-2 ${section==="ratings" ?'border-primary bg-btn_primary text-primary':'border-secondary'} rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><AiFillStar size={20}/>Ratings & Reviews</button>
                                    </li>
                                </ul>
                            </div>

                            <div className='px-4 py-4 bg-btn_primary h-96 overflow-y-auto'>
                                {section==='overview' && <Overview Overview={props?.data?.oneCourse?.resp?.data?.getCourse?.overview}/>}
                                {section==="curicullum" && <Lessons openModel={props.openModel} setOpenModel={props.setOpenModel} quizzModel={props.quizzModel} openQuizz={props.openQuizz}  Lessons={props?.data?.courseLessons?.resp?.data} quizzes={props?.data?.quizzes?.resp?.data} enrolledTrainees={props?.data?.oneCourse?.resp?.data?.getCourse?.enrolledTrainees}/>}
                                {section==="enrolled" && <EnrolledUsers enrolledTrainees={props?.data?.oneCourse?.resp?.data?.getCourse?.enrolledTrainees} courseTitle={props?.data?.oneCourse?.resp?.data?.getCourse?.courseTitle} quizzes={props?.data?.quizzes?.resp?.data}/>}
                                {section==="ratings" && <Reviews reviews={props?.data?.oneCourse?.resp?.data?.getCourse?.ratingsAndReviews}/>}
                            </div>
                            
                        </div>
                        <div className='lg:w-64 w-full h-full bg-secondary shadow-md rounded-md px-4 py-2'>
                            <div className='flex flex-wrap justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                                <LiaChalkboardTeacherSolid size={20}/>
                                <label className='text-sm font-bold text-text_secondary'>Teacher:</label>
                                <label className='text-sm font-normal'>{props?.data?.oneCourse?.resp?.data?.getCourse?.courseTutors?.fullNames}</label>
                            </div>

                            <div className='flex justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                                <BsJournalBookmark size={20}/>
                                <label className='text-sm font-bold text-text_secondary'>Lessons:</label>
                                <label className='text-sm font-normal'>{props?.data?.courseLessons?.resp?.data?.length}</label>
                            </div>

                            <div className='flex justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                                <FaLanguage size={20}/>
                                <label className='text-sm font-bold text-text_secondary'>Languages:</label>
                                <label className='text-sm font-normal'>Kinyarwanda</label>
                            </div>

                            <div className='flex justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                                <GoPeople size={20}/>
                                <label className='text-sm font-bold text-text_secondary'>Enrolled:</label>
                                <label className='text-sm font-normal'>{props?.data?.oneCourse?.resp?.data?.getCourse?.enrolledTrainees?.length}</label>
                            </div>
                            {location.pathname.includes("users/admin/courses")?(
                                <Button onClick={()=>setOpenDelete(true)} className='w-full my-2 bg-danger text-sm text-secondary py-3'>Delete Course</Button>
                            ):(
                                
                                <div>
                                    {success.status?<p className='text-xs text-primary font-bold text-center p-2 bg-primary bg-opacity-20'>{success.succesMsg}</p>
                                    :
                                    <p className={`text-xs text-danger text-center p-2 ${error && 'bg-danger'} bg-opacity-20`}>{error}</p>}
                                    {props?.data?.oneCourse?.resp?.data?.getCourse?.enrolledTrainees.some((obj) => obj?.member?._id === props?.data?.memberProfile?.resp?.data?.getProfile?._id)?(
                                        <button size='sm' className={`my-4 bg-text_secondary bg-opacity-20 text-sm text-center text-text_secondary font-bold p-2 w-full cursor-not-allowed `} disabled={true}>
                                            Enrolled                                
                                        </button>
                                    ):(
                                        <button type='submit' size='sm' className={`my-4 bg-primary text-sm text-center text-secondary p-2 w-full ${loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={loading? true : false} onClick={()=>handleEnroll()}>
                                            {loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/>Enrolling</p>:'Enroll'}
                                        </button>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                )}

                </>
            ):(
            <p className="text-text_secondary text-center py-4">{props?.data?.oneCourse?.error?.response?.data?.message}</p>
            )
        ))}
            
        {openDelete &&
        <div className=" fixed top-0 left-0 right-0 flex justify-center items-center w-full min-h-screen z-30">
            <Confirm 
            type={"Course"} 
            item={`${props?.data?.oneCourse?.resp?.data?.getCourse?.courseTitle}`}
            response={response}
            handleDelete={handleDelete}
            openDelete={openDelete}
            setOpenDelete={setOpenDelete}/>
        </div>}
    </div>
  )
}

const mapState=(data)=>({
    data:data
})

export default connect(mapState,{
    fetchOneCourses,
    fetchAllCoursesLessons,
    getQuizzes,
    getQuestions,
    memberFetchProfileAction

}) (CoursesDetails)