import React from 'react'
import Layout from '../components/Layout'
import CoursesDetails from '../components/CoursesDetails'

const CourseDetailsUser = () => {
  return (
    <Layout>
      <div className="overflow-y-auto max-h-screen pb-24">
        <CoursesDetails />
      </div>
    </Layout>
  )
}

export default CourseDetailsUser