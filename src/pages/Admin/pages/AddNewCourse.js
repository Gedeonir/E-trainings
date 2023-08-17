import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AiOutlineClose} from 'react-icons/ai'
import { connect } from 'react-redux';
import Loading from '../../../components/Loading';
import {BsFillNodePlusFill} from 'react-icons/bs'
import { Button } from '@material-tailwind/react'

const AddNewCourse = (props) => {

  return (
    <div className='w-full mx-auto bg-secondary px-4 pb-4 rounded-xl lg:min-h-full min-h-screen'>
        <div className='flex justify-between text-text_secondary mb-8 sticky top-0 z-40 bg-secondary py-4 border-b border-primary'>
            <h1 className='grid  text-lg mb-2 font-bold'>Add new course</h1>

            <AiOutlineClose size={20} className='cursor-pointer hover:text-primary' onClick={()=>props.setOpenModel(!props.openModel)}/>
        </div>
        <form className='w-full'>
            <div className='grid lg:grid-cols-3 gap-4 mb-4'>
                <div className='w-full'>
                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Course name/title <span className="text-[red]">*</span></label>
                        <input type="text" className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Full names" required/>
                    </div>

                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Course lecture <span className="text-[red]">*</span></label>
                        <div className='py-1 rounded-lg text-text_secondary text-sm h-8 border px-2  border-text_secondary_2 bg-[white] relative group cursor-pointer'>
                            Select lecture
                            <ul className='bg-[white] w-full absolute shadow-lg top-9 left-0 h-48 overflow-y-auto py-2 rounded-lg hidden group-hover:block '>
                                <div className='flex justify-start gap-2 px-4'>
                                    <input type="text" size="sm" className="text-text_secondary text-sm outline-primary block w-full px-2 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="search lecture"/>
                                    <BsFillNodePlusFill size={35} className='text-primary cursor-pointer'/>
                                </div>
                                {props?.data?.allLectures?.loading?(
                                        <Loading size={30}/>
                                    ):(props.data?.allLectures?.success?(
                                        props?.data?.allLectures?.resp?.data?.length <=0?(
                                            <p className='text-text_secondary text-center text-sm py-8 px-8'>No lecture added yet</p>
                                        ):(
                                        <div className={`grid lg:grid-cols-4 gap-8 py-2 my-4 px-4`}>              
                                            {props?.data?.allLectures?.resp?.data.map((course,index)=>(
                                                <Card key={index} id={index} path={props.path}/>
                                            ))}
                                        </div>
                                        )
                                    ):(
                                        <p></p>
                                ))}
                            </ul>
                        </div>
                        {/* <input type="text" className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Full names" required/> */}
                    </div>

                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Image <span className="text-[red]">*</span></label>
                        <input type="text" className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2" placeholder="Image link" required/>
                    </div>

                    <div className="mb-4">
                        <label className="text-text_secondary font-bold text-xs mb-2">Course category <span className="text-[red]">*</span></label>
                        <select className="text-text_secondary text-sm outline-primary block w-full px-2 py-1 rounded-lg border border-text_secondary_2 placeholder-text_secondary_2 cursor-pointer" placeholder="Password" required>
                        {props.data?.allCategories?.success?(
                            props?.data?.allCategories?.resp?.data.map((category)=>(
                                <option key={category._id} className='py-8 my-2 text-sm' value={category._id}>{category.categoryName}-({category.description})</option>
                            ))
                        ):(<p></p>)}         
                        </select>
                    </div>
                </div>

                <div className="quill lg:col-span-2">
                    <label className="text-text_secondary font-bold text-xs mb-2">Course overview <span className="text-[red]">*</span></label>

                    <ReactQuill
                        theme="snow"
                        style={{ height: '220px',cursor:'pointer' }} // Set the desired height
                    />
                </div>
            </div>
            <div className='flex lg:w-1/5 w-full ml-auto lg:mt-2 mt-24'>
                <Button size="sm" className='bg-primary text-sm text-secondary px-3 w-full'>Add course</Button>
            </div>
        </form>
    </div>
  )
}

const mapState=(data)=>({
    data:data
})

export default connect(mapState)(AddNewCourse)