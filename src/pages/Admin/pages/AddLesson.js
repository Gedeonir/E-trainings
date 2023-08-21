import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AiOutlineClose} from 'react-icons/ai'

const AddLesson= ({openModel,setOpenModel}) => {
    const[youtubeLink,setYoutubeLink]=useState("")  
    
    
    const [formData,setFormData] =React.useState({
        lessonTitle:"",
        lessonVideoId:"",
        Notes:""
    })



  return (
    <div className='lg:w-4/5 w-full mx-auto bg-secondary pb-2 rounded-xl min-h-screen relative'>
        <div className='flex justify-between text-text_secondary mb-6 sticky top-0 z-30 px-4 bg-secondary py-4 border-b border-primary'>
            <h1 className='grid  text-lg mb-2 font-bold'>Add Lesson</h1>

            <AiOutlineClose size={20} className='cursor-pointer hover:text-primary' onClick={()=>setOpenModel(!openModel)}/>
        </div>
        <form className='relative px-4'>
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
                <label className="text-text_secondary font-bold text-xs mb-2">Youtube link video<span className="text-[red]">*</span></label>
                <input type="text" value={formData.youtubeLink} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Lesson video" required
                onChange={(e)=>{
                    setFormData({
                        ...formData,
                        youtubeLink:e.target.value
                    })
                }}
                />
            </div>     

            <div className="quill mb-4 sticky top-4">
                <label className="text-text_secondary font-bold text-xs mb-2">Notes<span className="text-[red]">*</span></label>
                <ReactQuill
                    theme="snow"
                    value={formData.overview}
                    style={{ height: '220px',cursor:'pointer' }}
                    onChange={(e)=>{
                        setFormData({
                            ...formData,
                            Notes:e
                        })
                    }}
                />
            </div>
        </form>
    </div>
  )
}

export default AddLesson