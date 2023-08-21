import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-tailwind/react'
import { lectureRegisterAction,fetchAllLectures } from '../../../redux/Actions/LecturesAction';
import {AiOutlineLoading3Quarters} from "react-icons/ai"


export const AddLecture = (props) => {

    const [formData,setFormData] = useState({
        fullNames:"",
        email:"",
        mobile:""
    })

    const handleSubmit=async(e)=>{
        e.preventDefault();

        props.lectureRegisterAction(formData)
        props.fetchAllLectures()
    }

  return (
    <form className='lg:w-1/4 w-full shadow-lg bg-[white] mx-auto py-4 px-4 rounded-xl' onSubmit={(event)=>handleSubmit(event)}>
        {props?.data?.addLecture?.success?<p className='text-sm text-primary font-bold text-center p-2'>{props?.data?.addLecture?.resp?.data?.message}</p>
        :
        <p className={`text-sm text-danger text-center p-2 ${props?.data?.addLecture?.error && 'bg-danger'} bg-opacity-20`}>{props?.data?.addLecture?.error?.response?.data?.message}</p>}

        <div className="mb-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Full names<span className="text-[red]">*</span></label>
            <input type="text" value={formData.fullNames} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Full names" required
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    fullNames:e.target.value
                })
            }}
            />
        </div>

        
        <div className="mb-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Email <span className="text-[red]">*</span></label>
            <input type="email" value={formData.email} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Email" required
             onChange={(e)=>{
                setFormData({
                    ...formData,
                    email:e.target.value
                })
            }}
            />
        </div>

        <div className="mb-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Contact <span className="text-[red]">*</span></label>
            <input type="number" value={formData.mobile} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="mobile" required
             onChange={(e)=>{
                setFormData({
                    ...formData,
                    mobile:e.target.value
                })
            }}
            />
        </div>
        
        <button type='submit' size='sm' className={`my-4 bg-primary text-sm text-center text-secondary p-2 w-full ${props?.data?.addLecture?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.addLecture?.loading? true : false}>
            {props?.data?.addLecture?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/>Saving</p>:'Add lecture'}
        </button>        
        <div className='flex justify-center gap-4 border rounded-lg border-text_secondary_2 mt-2 text-text_secondary cursor-pointer hover:shadow-md delay-100 duration-100' onClick={()=>props.setOpenLectureModal(!props.openLectureModal)}>
            Close
        </div>
    </form>
  )
}

const mapState = (data) => ({data:data})

export default connect(mapState, {
    lectureRegisterAction
})(AddLecture)