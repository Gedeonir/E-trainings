import React, { useState } from 'react'
import { connect } from 'react-redux'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const AddQuestion = (props) => {


  return (
        <div className="bg-secondary px-4 lg:pb-24 pt-4 max-h-screen overflow-y-auto w-full rounded-sm">
            <form className='w-full' onSubmit={(e)=>props.handleSubmit(e)}>
                
                <div className='mb-4'>
                    <label className="text-text_secondary font-bold text-xs mb-2">Question <span className="text-[red]">*</span></label>
                    <textarea id="question" rows="2" className="block p-2.5 w-full text-sm border-text_secondary_2 text-text_secondary rounded-lg border outline-none" placeholder="Write question here"
                    value={props?.formData.question}
                    onChange={(e)=>{
                        props?.setFormData({
                            ...props?.formData,
                            question:e.target.value
                        })
                    }} required></textarea>
                </div>
                <div className='mb-4'>
                    <label className="text-text_secondary font-bold text-xs mb-2">Solution <span className="text-[red]">*</span></label>
                    <textarea id="question" rows="2" className="block p-2.5 w-full text-sm border-text_secondary_2 text-text_secondary rounded-lg border outline-none" placeholder="Write question here"
                    value={props?.formData.solution}
                    onChange={(e)=>{
                        props?.setFormData({
                            ...props?.formData,
                            solution:e.target.value
                        })
                    }} required></textarea>
                </div>

                <div className='mb-4'>
                    <label className="text-text_secondary font-bold text-xs mb-2">Multiple choice solution 1 <span className="text-[red]">*</span></label>
                    <textarea id="question" rows="2" className="block p-2.5 w-full text-sm border-text_secondary_2 text-text_secondary rounded-lg border outline-none" placeholder="Write question here"
                    value={props?.formData.alternateSolution1}
                    onChange={(e)=>{
                        props?.setFormData({
                            ...props?.formData,
                            alternateSolution1:e.target.value
                        })
                    }} required></textarea>
                </div>

                <div className='mb-4'>
                    <label className="text-text_secondary font-bold text-xs mb-2">Multiple choice solution 2 <span className="text-[red]">*</span></label>
                    <textarea id="question" rows="2" className="block p-2.5 w-full text-sm border-text_secondary_2 text-text_secondary rounded-lg border outline-none" placeholder="Write question here"
                    value={props?.formData.alternateSolution2}
                    onChange={(e)=>{
                        props?.setFormData({
                            ...props?.formData,
                            alternateSolution2:e.target.value
                        })
                    }} required
                    ></textarea>
                </div>

                <div className='mb-4'>
                    <label className="text-text_secondary font-bold text-xs mb-2">Multiple choice solution 3 <span className="text-[red]">*</span></label>
                    <textarea id="question" rows="2" className="block p-2.5 w-full text-sm border-text_secondary_2 text-text_secondary rounded-lg border outline-none" placeholder="Write question here"
                    value={props?.formData.alternateSolution3}
                    onChange={(e)=>{
                        props?.setFormData({
                            ...props?.formData,
                            alternateSolution3:e.target.value
                        })
                    }} required></textarea>
                </div>

                {props?.data?.addQuestion?.success?<p className='text-sm text-primary font-bold text-center p-1'>{props?.data?.addQuestion?.resp?.data?.message}</p>
                :
                <p className={`text-sm text-danger text-center p-1 ${props?.data?.addQuestion?.error && 'bg-danger'} bg-opacity-20`}>{props?.data?.addQuestion?.error?.response?.data?.message}</p>}

                <div className='flex lg:w-1/5 w-full ml-auto'>
                    <button type='submit' size='sm' className={`bg-primary text-sm text-center text-secondary p-1 w-full ${props?.data?.addQuestion?.loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={props?.data?.addQuestion?.loading? true : false}>
                        {props?.data?.addQuestion?.loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/>Saving</p>:'Add question'}
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

})(AddQuestion)