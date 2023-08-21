import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import CoursesDetails from '../../../components/CoursesDetails'
import AddLesson from './AddLesson'

const AdminCourseDetail = () => {
  const [openModel,setOpenModel]=React.useState(false)

  return (
    <DashboardLayout>
      <div className={`${!openModel && 'overflow-y-auto'} max-h-screen relative`}>
        <CoursesDetails openModel={openModel} setOpenModel={setOpenModel}/>
        {openModel &&
          <div className='absolute w-full top-0 left-0 right-0 z-40 py-4 bg-primary bg-opacity-40 min-h-screen max-h-screen overflow-y-hidden flex items-center  lg:px-8 px-2'>
            <AddLesson openModel={openModel} setOpenModel={setOpenModel}/>
          </div>
        }
      </div>
    </DashboardLayout>
  )
}

export default AdminCourseDetail