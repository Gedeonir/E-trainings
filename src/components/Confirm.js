import React from 'react'
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import { CiWarning } from 'react-icons/ci'

export const Confirm = (props) => {
  return (
    <div className="lg:w-2/5 bg-secondary px-4 py-4 rounded-lg   flex justify-start gap-4 w-full border border-text_secondary_2">
        <div className="bg-secondary  text-text_secondary h-20 w-20 p-2 rounded-full text-center flex items-center">
            <CiWarning size={50} className='w-20 h-20'/>
        </div>
        <div className="text-text_secondary text-sm">
            <label className="text-sm">Are you sure you want to delete <span className='font-bold'>{props?.item}</span> {props?.type}. This action can not be undone</label>
            {props.response.success?<p className='text-xs text-primary font-bold text-center p-2 bg-primary bg-opacity-20'>{props.response.resp}</p>
            :
            <p className={`text-xs text-danger text-center p-1 ${props.response?.error && 'bg-danger'} bg-opacity-20`}>
                {props.response.error}
            </p>}
            <div className="flex w-full justify-start my-4 gap-4">
                <button size="sm" className={`bg-danger text-sm text-secondary p-2 ${props.response.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props.response.loading? true : false} onClick={()=>props.handleDelete()}>
                    {props.response.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/><span> Submitting...</span></p>:"Confirm"}
                </button>
                <button className=" text-sm p-2 border-primary text-primary border" onClick={()=>props.setOpenDelete(false)}>Cancel</button>
            </div>
        </div>
        
    </div>

  )
}
