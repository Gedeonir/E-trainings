import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import Card2 from '../components/Card2';
import {IoCloseOutline} from 'react-icons/io5'
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Courses from '../components/Courses';
import { connect } from 'react-redux';
import {AiOutlineLoading3Quarters} from "react-icons/ai"
import Loading from '../components/Loading';
import { getMyCourses } from '../redux/Actions/membersAction';


const Homepage = (props) => {

    useEffect(()=>{
        props.getMyCourses()
    },[])

    
  return (
    <Layout>
        <div className='lg:px-14 px-4 py-4 overflow-y-auto max-h-screen pb-24'>      
            <div className='mb-4 py-4'>
                <div className='flex justify-between'>
                    <h1 className='grid text-primary font-medium lg:text-2xl text-lg mb-4'>Continue <span className='text-text_secondary font-bold lg:text-3xl text-xl'>Where you left of</span></h1>
                    <Link to="#" className='mt-8 flex justify-start text-text_secondary gap-1 text-sm group'><span className='group-hover:mx-2 delay-100 duration-500'>Browse my courses</span> <BsArrowRight className='my-1' size={15}/></Link>
                </div>
                {props?.data?.myCourses?.loading?(
                    <div className='w-12 h-12 text-primary text-center mx-auto my-8'>
                        <AiOutlineLoading3Quarters size={20} className="animate-spin w-12 h-12"/>
                    </div>
                ):(props?.data?.myCourses?.success?(
                    props?.data?.myCourses?.resp?.data?.length <=0?(
                        <p className='text-text_secondary text-center text-sm py-8 px-8'>You are not enrolled in any course yet</p>
                    ):(
                    <div className='grid lg:grid-cols-3 gap-8 py-2'>              
                        {props?.data?.myCourses?.resp?.data?.map((course,index)=>(
                            <Card2 key={index} course={course}/>
                        ))}
                    </div>)):(
                        <p>Unable to get your courses</p>
                ))}
            
            </div>

            <div>
                <h1 className='grid text-primary font-medium lg:text-2xl text-lg w-full'>Find the right <span className='text-text_secondary font-bold lg:text-3xl text-xl'>Course for you</span></h1>
                <Courses path="courses"/>

            </div>
        


        </div>
    </Layout>
  )
}

const mapState=(data)=>({
    data:data
  })
  
  export default connect(mapState,{
    getMyCourses
  })( Homepage)
