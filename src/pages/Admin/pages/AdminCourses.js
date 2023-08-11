import React from 'react'
import DashboardLayout from '../components/DashboardLayout'
import Courses from '../../../components/Courses'
import { Button } from '@material-tailwind/react'

const AdminCourses = () => {
  return (
    <DashboardLayout>
        <div className='px-8 py-8 w-full mx-auto overflow-y-auto max-h-screen'>
            <div>
                <div className='grid grid-cols-2 justify-between mb-4'>
                    <h1 className='grid text-primary font-medium lg:text-2xl text-lg w-full'>All courses<span className='text-xs text-text_secondary'>100 courses</span></h1>
                    <div className='flex justify-end'>
                        <Button size="" className='bg-primary text-sm text-secondary px-3'>New course</Button>
                    </div>

                </div>
                <Courses path="users/admin/courses"/>

            </div>

        </div>
    </DashboardLayout>
  )
}

export default AdminCourses