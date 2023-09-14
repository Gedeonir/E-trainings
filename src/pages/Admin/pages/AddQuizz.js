import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-tailwind/react'
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import { addQuizz, getQuizzes } from '../../../redux/Actions/CoursesAction';
import { useParams } from 'react-router-dom';


export const AddQuizz = (props) => {

    const params=useParams() 

    const [formData,setFormData] = useState({
        QuizName:"",
        duration:"",
    })

    const handleSubmit=async(e)=>{
        e.preventDefault();

        props.addQuizz(formData,params.id)
        props.getQuizzes(params.id)
    }

  return (
    <form className='lg:w-1/4 w-full shadow-lg bg-[white] mx-auto py-4 px-4 rounded-xl' onSubmit={(event)=>handleSubmit(event)}>
        {props?.data?.addQuizz?.success?<p className='text-xs text-primary font-bold p-2'>{props?.data?.addQuizz?.resp?.data?.message}</p>
        :
        <p className={`text-xs text-danger p-2 ${props?.data?.addQuizz?.error && 'bg-danger'} bg-opacity-20`}>{props?.data?.addQuizz?.error?.response?.data?.message}</p>}

        <div className="mb-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Exam name<span className="text-[red]">*</span></label>
            <input type="text" value={formData.QuizName} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="exam name" required
            onChange={(e)=>{
                setFormData({
                    ...formData,
                    QuizName:e.target.value
                })
            }}
            />
        </div>

        
        <div className="mb-4">
            <label className="text-text_secondary font-bold text-xs mb-2">Duration(Hours) <span className="text-[red]">*</span></label>
            <input type="number" value={formData.duration} className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Duration" required
             onChange={(e)=>{
                setFormData({
                    ...formData,
                    duration:e.target.value
                })
            }}
            />
        </div>
        
        <button type='submit' size='sm' className={`my-4 bg-primary text-sm text-center text-secondary p-2 w-full ${props?.data?.addQuizz?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.addQuizz?.loading? true : false}>
            {props?.data?.addQuizz?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/>Saving</p>:'Add Quizz'}
        </button>        
        <div className='flex justify-center gap-4 border rounded-lg border-text_secondary_2 mt-2 text-text_secondary cursor-pointer hover:shadow-md delay-100 duration-100' onClick={()=>props.setOpenModel(!props.openModel)}>
            Close
        </div>
    </form>
  )
}

const mapState = (data) => ({data:data})

export default connect(mapState, {
    addQuizz,getQuizzes
})(AddQuizz)