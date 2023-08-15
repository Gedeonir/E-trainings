import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Lesson from '../../../components/Lesson'

const AdminLesson = () => {
  return (
    <DashboardLayout>
        <div className='lg:px-8 overflow-y-auto max-h-screen'>
            <Lesson/>
        </div>
    </DashboardLayout>
  )
}

export default AdminLesson