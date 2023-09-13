import React, { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import CoursesDetails from '../../../components/CoursesDetails'
import AddLesson from './AddLesson'
import AddQuizz from './AddQuizz'

const AdminCourseDetail = () => {
  const [openModel,setOpenModel]=React.useState(false)
  const [openQuizzModel,setOpenQuizzModel]=useState(false)

  return (
    <DashboardLayout>
      <div className={`${!openModel && 'overflow-y-auto'} max-h-screen relative`}>
        <CoursesDetails openModel={openModel} setOpenModel={setOpenModel} quizzModel={openQuizzModel} openQuizz={setOpenQuizzModel}/>
        {openModel &&
          <div className='absolute w-full top-0 left-0 right-0 z-40 py-4 bg-primary bg-opacity-40 min-h-screen max-h-screen overflow-y-hidden flex items-center  lg:px-8 px-2'>
            <AddLesson openModel={openModel} setOpenModel={setOpenModel}/>
          </div>
        }

        {openQuizzModel &&
          <div className='absolute w-full top-0 left-0 right-0 z-40 py-4 bg-primary bg-opacity-40 min-h-screen max-h-screen overflow-y-hidden flex items-center  lg:px-8 px-2'>
            <AddQuizz openModel={openQuizzModel} setOpenModel={setOpenQuizzModel}/>
          </div>
        }
      </div>
    </DashboardLayout>
  )
}

export default AdminCourseDetail