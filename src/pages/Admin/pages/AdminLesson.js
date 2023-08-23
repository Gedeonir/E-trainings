import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Lesson from '../../../components/Lesson'

const AdminLesson = () => {
  return (
    <DashboardLayout>
        <div className='overflow-y-hidden max-h-screen'>
            <Lesson path={'users/admin/courses'}/>
        </div>
    </DashboardLayout>
  )
}

export default AdminLesson