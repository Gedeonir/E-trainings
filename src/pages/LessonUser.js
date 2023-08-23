import React from 'react'
import Layout from '../components/Layout'
import Lesson from '../components/Lesson'

const LessonUser = () => {
  return (
    <Layout>
      <div className='overflow-hidden'>
        <Lesson path={'courses'}/>
      </div>
    </Layout>
  )
}

export default LessonUser