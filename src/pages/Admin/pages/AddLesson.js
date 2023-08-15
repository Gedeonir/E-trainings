import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AiOutlineClose} from 'react-icons/ai'

const AddLesson= ({openModel,setOpenModel}) => {
  return (
    <div className='lg:w-4/5 w-full mx-auto bg-secondary px-4 pb-8 rounded-xl'>
        <div className='flex justify-between text-text_secondary mb-2 sticky top-0 bg-secondary py-4 border-b border-primary'>
            <h1 className='grid  text-lg mb-2 font-bold'>Add Lesson</h1>

            <AiOutlineClose size={20} className='cursor-pointer hover:text-primary' onClick={()=>setOpenModel(!openModel)}/>
        </div>
        <form className='lg:h-[400px] h-screen overflow-y-auto relative px-2'>
        <div className="mb-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Lesson name/title <span className="text-[red]">*</span></label>
            <input type="text" className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Lesson name" required/>
        </div>

        <div className="mb-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Lesson video Link <span className="text-[red]">*</span></label>
            <input type="text" className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Lesson video" required/>
        </div>     

        <div className="mb-4 sticky top-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Notes<span className="text-[red]">*</span></label>
            <ReactQuill theme="snow"/>
        </div>
        </form>
    </div>
  )
}

export default AddLesson