import React from 'react'
import {IoCloseOutline} from 'react-icons/io5'
import Card from '../components/Card'
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import { fetchAllCourses, fetchAllCoursesLessons } from '../redux/Actions/CoursesAction'
import { fetchAllCategory } from '../redux/Actions/CategoryAction'
import { connect } from 'react-redux'
import Loading from './Loading'
import { fetchAllLectures } from '../redux/Actions/LecturesAction'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

const Courses = (props) => {
    const [toogleSearch,setToogleSearch]=React.useState(false);
    const location=useLocation()
    const [keyWord,setKeyword]=React.useState("")
    const [categoryName,setCategory] = React.useState("")

    React.useEffect(()=>{
        props.fetchAllCourses()
        props.fetchAllCategory()
        props.fetchAllLectures()
    },[props.data?.allCourses?.success])

    const filterCourses=props?.data?.allCourses?.resp?.data.filter((course)=>{
        return course?.courseTitle?.toLowerCase().includes(keyWord.toLowerCase()) && course?.courseCategory?.categoryName?.toLowerCase().includes(categoryName.toLowerCase())
    })


  return (
    <div className='mb-4 py-2'>
        <div className='flex justify-end gap-4 relative'>
            {location.pathname.includes("users/admin/courses")&&
            <div className='w-full h-8 text-text_secondary font-medium flex lg:justify-end justify-between lg:gap-4 gap-2'>
                {props.data?.allCategories?.success?(
                    <>
                    <div className='flex lg:justify-end justify-between lg:gap-4 gap-2 text-sm'>
                        <label className={`cursor-pointer delay-100 duration-100 ${!categoryName && 'text-primary border-b-2'}`} onClick={()=>setCategory("")}>All</label>
                        {props?.data?.allCategories?.resp?.data.map((category)=>(
                            <label key={category._id} className={`cursor-pointer transition-all delay-100 duration-100 ease-in-out  hover:text-primary ${category?.categoryName===categoryName && 'text-primary border-b-2'}`} onClick={()=>setCategory(category.categoryName)}>{category.categoryName}</label>
                        ))}
                    </div>
                     <div className='text-text_secondary font-bold relative text-lg mt-1'>
                        <BsSearch size={15}  className='cursor-pointer hover:text-primary' onClick={()=>setToogleSearch(!toogleSearch)}/>
                    </div>  </>  
                ):(<p></p>)}
            </div>
            }  
                         
        </div>

        <div className={`text-text_secondary font-bold relative py-2 shadow-sm ${toogleSearch?'block':'hidden'}`}>
            <BsSearch size={20} className='cursor-pointer hover:text-primary absolute top-4 left-4'/>
            <input type="text" className="px-12 text-text_secondary text-sm outline-none block w-full p-2.5 dark:bg-gray-700 placeholder-text_secondary_2" placeholder="Type in keyword" autoFocus="autofocus" required/>
            <IoCloseOutline size={20} className='cursor-pointer hover:text-primary absolute top-4 right-4'/>
        </div>
        {props?.data?.allCourses?.loading?(
            <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
                <AiOutlineLoading3Quarters size={15} className="animate-spin w-8 h-8"/>
            </div>
        ):(props.data?.allCourses?.success?(
            props?.data?.allCourses?.resp?.data?.length <=0?(
                <p className='text-text_secondary text-center text-sm py-8 px-8'>No course added yet</p>
            ):(
            <div className={`grid lg:grid-cols-4 gap-8 py-2 my-4`}>              
                {filterCourses.length <=0?(
                    <p className='text-text_secondary text-center text-sm py-8 px-8 lg:col-span-4'>No course matches your criteria</p>

                ):(
                filterCourses.map((course,index)=>(
                    <Card key={index} path={props.path} course={course}/>
                )))}
            </div>
            )
        ):(
            <p className='text-text_secondary text-center'>{props?.data?.allCourses?.error?.response?.data?.message}</p>
        ))}
        
    </div>
  )
}

const mapState=(data)=>({
    data:data
})

export default connect(mapState,{
    fetchAllCourses,
    fetchAllCategory,
    fetchAllLectures,
})(Courses)