import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import CoursesDetails from '../../../components/CoursesDetails'

const AdminCourseDetail = () => {
  return (
    <DashboardLayout>
        <div className='overflow-y-auto max-h-screen'>
            <CoursesDetails/>
        </div>
    </DashboardLayout>
  )
}

export default AdminCourseDetail