import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AiOutlineClose} from 'react-icons/ai'
import { connect } from 'react-redux';
import Loading from '../../../components/Loading';
import {BsFillNodePlusFill} from 'react-icons/bs'
import { Button } from '@material-tailwind/react'
import AddLecture from './AddLecture';
import { addCourseAction, fetchAllCourses } from '../../../redux/Actions/CoursesAction';
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const AddNewCourse = (props) => {
    const [openLectureModal,setOpenLectureModal]=useState(false);
    const[lecture,setLecture]=useState("")

    const [formData,setFormData]=useState({
        courseTitle:"",
        overview:"",
        courseIconImage:"",
        courseTutors:"",
        courseCategory:""
    });

    const handleSubmit=(event)=>{
        event.preventDefault()

        props.addCourseAction(formData)
        props.fetchAllCourses()
    }


  return (
    <div className='w-full mx-auto bg-secondary px-4 pb-4 rounded-xl lg:min-h-full min-h-screen relative'>
        {openLectureModal && 
            <div className='w-full absolute z-40 left-0 right-0 rounded-xl py-12 flex items-center lg:min-h-full min-h-screen px-4 bg-secondary bg-opacity-40'>
                <AddLecture setOpenLectureModal={setOpenLectureModal} openLectureModal={openLectureModal}/>
            </div>
        }

        <div className='flex justify-between text-text_secondary mb-8 sticky top-0 z-30 bg-secondary py-4 border-b border-primary'>
            <h1 className='grid  text-lg mb-2 font-bold'>Add new course</h1>

            <AiOutlineClose size={20} className='cursor-pointer hover:text-primary' onClick={()=>props.setOpenModel(!props.openModel)}/>
        </div>
        <form className='w-full' onSubmit={(e)=>handleSubmit(e)}>
            {props?.data?.addCourse?.success?<p className='text-sm text-primary font-bold text-center p-2 bg-primary bg-opacity-20 px-4 rounded-xl'>{props?.data?.addCourse?.resp?.data?.message}</p>
            :
            <p className={`text-sm text-danger text-center p-2 ${props?.data?.addCourse?.error?.response?.data?.message && 'bg-danger'} bg-opacity-20 px-4 rounded-xl`}>{props?.data?.addCourse?.error?.response?.data?.message}</p>}

            <div className='grid lg:grid-cols-3 gap-4 mb-4'>
                <div className='w-full'>
                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Course name/title <span className="text-[red]">*</span></label>
                        <input type="text" value={formData.courseTitle} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Course title" required
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                courseTitle:e.target.value
                            })
                        }}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Course lecture <span className="text-[red]">*</span></label>
                        <div className='py-1 rounded-lg text-text_secondary text-sm h-8 border px-2  border-text_secondary_2 bg-[white] relative group'>
                            {lecture?<label className='p-1'>{lecture}</label>:'Select lecture'}
                            <div className='bg-[white] w-full absolute shadow-lg top-[32px] left-0 overflow-y-auto py-2 rounded-lg hidden group-hover:block '>
                                <div className='flex justify-start gap-2 px-4'>
                                    <input type="text" size="sm" className="text-text_secondary text-sm outline-primary block w-full px-2 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="search lecture"/>
                                    <BsFillNodePlusFill size={35} className='text-primary cursor-pointer' onClick={()=>setOpenLectureModal(!openLectureModal)}/>
                                </div>
                                {props?.data?.allLectures?.loading?(
                                        <Loading size={30}/>
                                    ):(props.data?.allLectures?.success?(
                                        props?.data?.allLectures?.resp?.data?.length <=0?(
                                            <p className='text-text_secondary text-center text-sm py-8 px-8'>No lecture added yet</p>
                                        ):(
                                        <ul className={`py-2 px-4 text-sm max-h-48 overflow-y-auto border-b border-b-text_secondary_2 p-0 list-none`}>              
                                            {props?.data?.allLectures?.resp?.data.map((lecture,index)=>(
                                                <li key={lecture._id} className='cursor-pointer hover:text-primary delay-100 duration-200 my-2' 
                                                onClick={()=>{
                                                    setFormData({
                                                        ...formData,
                                                        courseTutors:lecture._id
                                                    });
                                                    setLecture(lecture.fullNames)
                                                }}>
                                                    {lecture.fullNames}
                                                </li>
                                            ))}
                                        </ul>
                                        )
                                    ):(
                                        <p></p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Course Icon</label>
                        <input type="text" value={formData.courseIconImage} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Image link"
                         onChange={(e)=>{
                            setFormData({
                                ...formData,
                                courseIconImage:e.target.value
                            })
                        }}/>
                    </div>

                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Course category <span className="text-[red]">*</span></label>
                        <select className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2 cursor-pointer" required
                         onChange={(e)=>{
                            setFormData({
                                ...formData,
                                courseCategory:e.target.value
                            })
                        }}>
                            <option value=''>Select category</option>
                            {props.data?.allCategories?.success &&(
                                props?.data?.allCategories?.resp?.data.map((category)=>(
                                    <option key={category._id} className='py-8 my-2 text-sm' value={category._id}>{category.categoryName}-({category.description})</option>
                                ))
                            )}         
                        </select>
                    </div>
                </div>

                <div className="quill lg:col-span-2">
                    <label className="text-text_secondary font-bold text-xs mb-2">Course overview <span className="text-[red]">*</span></label>

                    <ReactQuill
                        theme="snow"
                        value={formData.overview}
                        style={{ height: '220px',cursor:'pointer' }}
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                overview:e
                            })
                        }}
                    />
                </div>
            </div>
            <div className='flex lg:w-1/5 w-full ml-auto lg:mt-2 mt-20'>
                <button type='submit' size='sm' className={`my-4 bg-primary text-sm text-center text-secondary p-2 w-full ${props?.data?.addCourse?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.addCourse?.loading? true : false}>
                    {props?.data?.addCourse?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/>Saving</p>:'Add course'}
                </button>           
            </div>
        </form>
    </div>
  )
}

const mapState=(data)=>({
    data:data
})

export default connect(mapState,{
    addCourseAction,
    fetchAllCourses

})(AddNewCourse)