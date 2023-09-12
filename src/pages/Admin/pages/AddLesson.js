import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AiOutlineClose,AiOutlineLoading3Quarters} from 'react-icons/ai'
import { connect } from 'react-redux';
import { addCourseLessonAction, fetchAllCoursesLessons,fetchOneCourses } from '../../../redux/Actions/CoursesAction';
import { useParams } from 'react-router-dom';


const AddLesson= (props) => {
    const params=useParams() 
    
    const [formData,setFormData] =React.useState({
        lessonTitle:"",
        lessonVideo:"",
        Notes:""
    })


    const handleSubmit=(event)=>{
        event.preventDefault()
        props.addCourseLessonAction(formData,params.id);
        props.fetchAllCoursesLessons(params.id);
        props.fetchOneCourses(params.id)

    }



  return (
    <div className='lg:w-4/5 w-full mx-auto bg-secondary rounded-xl min-h-full relative'>
        <div className='flex justify-between text-text_secondary rounded-t-xl sticky top-0 z-30 px-4 bg-secondary py-2 border-b border-primary'>
            <h1 className='grid  text-lg mb-2 font-bold'>Add Lesson</h1>

            <AiOutlineClose size={20} className='cursor-pointer hover:text-primary' onClick={()=>props?.setOpenModel(!props?.openModel)}/>
        </div>
        <form className='relative px-4 py-2' onSubmit={(e)=>handleSubmit(e)}>
            {props?.data?.addLesson?.success?<p className='text-sm text-primary font-bold text-center p-1'>{props?.data?.addLesson?.resp?.data?.message}</p>
            :
            <p className={`text-sm text-danger text-center p-1 ${props?.data?.addLesson?.error && 'bg-danger'} bg-opacity-20`}>{props?.data?.addLesson?.error?.response?.data?.message}</p>}
            <div className="mb-4">
                <label className="text-text_secondary font-bold text-xs mb-2">Lesson name/title <span className="text-[red]">*</span></label>
                <input type="text" value={formData.lessonTitle} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Lesson name" required
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        lessonTitle:e.target.value
                    })
                }}
                />
            </div>

            <div className="mb-4">
                <label className="text-text_secondary font-bold text-xs mb-2">Youtube link video</label>
                <input type="text" value={formData.youtubeLink} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Lesson video"
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        lessonVideo:e.target.value
                    })
                }}
                />
            </div>     

            <div className="quill">
                <label className="text-text_secondary font-bold text-xs mb-2">Notes<span className="text-[red]">*</span></label>
                <ReactQuill
                    theme="snow"
                    value={formData.Notes}
                    style={{ height: '150px',cursor:'pointer' }}
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            Notes:e
                        })
                    }}
                />
            </div>
            <div className='flex lg:w-1/5 w-full ml-auto lg:mt-12 mt-20'>
                <button type='submit' size='sm' className={`bg-primary text-sm text-center text-secondary p-1 w-full ${props?.data?.addLesson?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.addLesson?.loading? true : false}>
                    {props?.data?.addLesson?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/>Saving</p>:'Add lesson'}
                </button>
            </div>
        </form>
    </div>
  )
}


const mapState=(data)=>({
    data:data
});

export default connect(mapState,{
    addCourseLessonAction,
    fetchAllCoursesLessons,
    fetchOneCourses
}) (AddLesson)