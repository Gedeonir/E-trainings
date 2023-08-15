import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Courses from '../../../components/Courses'
import { Button } from '@material-tailwind/react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {AiOutlineClose} from 'react-icons/ai'
import AddNewCourse from './AddLesson';


const AdminCourses = () => {
    const [openModel,setOpenModel]=React.useState(false)
  return (
    <DashboardLayout>
        <div className={`px-8 py-8 w-full mx-auto ${!openModel && 'overflow-y-auto'} max-h-screen relative`}>
            <div>
                <div className='grid grid-cols-2 mb-4'>
                    <h1 className='grid text-primary font-medium lg:text-2xl text-lg w-full'>All courses<span className='text-xs text-text_secondary'>100 courses</span></h1>
                    <div className='flex justify-end'>
                        <Button size="sm" className='bg-primary text-sm text-secondary px-3' onClick={()=>setOpenModel(!openModel)}>New course</Button>
                    </div>

                </div>
                <Courses path="users/admin/courses"/>
            </div>
            {openModel &&
            <div className='absolute w-full top-0 left-0 right-0 z-40 py-4 bg-primary bg-opacity-40 min-h-screen max-h-screen overflow-y-hidden  lg:px-8 px-2'>
                <AddNewCourse openModel={openModel} setOpenModel={setOpenModel}/>
            </div>
            }

        </div>
    </DashboardLayout>
  )
}

export default AdminCourses