import React, { Children } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import {LiaChalkboardTeacherSolid} from 'react-icons/lia'
import {SlBookOpen} from 'react-icons/sl'
import {FaLanguage} from 'react-icons/fa'
import {GoPeople} from 'react-icons/go'
import { Button } from '@material-tailwind/react'
import {AiFillStar} from 'react-icons/ai'
import {BsBookmarks,BsJournalBookmark} from 'react-icons/bs'
import {CiLock} from 'react-icons/ci'


function Overview(){
    return (
        <div>
            <h1 className="text-text_secondary font-bold text-lg mb-4">Course description</h1>

            <p className="leading-8 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam massa, tempus sit amet ullamcorper eget, pharetra vel dolor. Nulla varius augue ut dolor vulputate dapibus in quis leo. 

                Donec arcu sem, egestas et mattis eget, eleifend iaculis purus. Vestibulum facilisis turpis vel pulvinar semper. Vivamus ut luctus dui, eu bibendum quam. In non mi odio. Donec in ex orci. Phasellus sed fermentum leo, vitae luctus ipsum. Donec at faucibus quam. Mauris risus leo, congue eu sagittis id, fringilla non nunc. Maecenas fermentum vestibulum lectus a vehicula. Curabitur auctor ipsum non sem venenatis ornare. Cras eu metus vitae metus facilisis egestas. Duis libero nisi, tristique id orci vitae, sagittis ullamcorper purus. Etiam eu nunc consequat ligula porttitor molestie a sed risus. Pellentesque eget auctor enim.
            </p>
        </div>
    )
}

function Lectures(){
    return(
        <div>
            <h1 className="text-text_secondary font-bold text-lg mb-4">Table of contents</h1>

            <div className="flex justify-between py-4 border-b border-text_secondary_2">
                <div className="flex justify-start gap-3 text-text_secondary font-normal text-md w-full">
                    <BsJournalBookmark size={20}/>
                    <Link to="?Lesson=1" className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                </div>
                <div className="w-12 text-text_secondary">
                    <CiLock size={20}/>
                </div>
            </div>

            <div className="flex justify-between py-4 border-b border-text_secondary_2">
                <div className="flex justify-start gap-3 text-text_secondary font-normal text-md w-full">
                    <BsJournalBookmark size={20}/>
                    <Link to="?Lesson=1" className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                </div>
                <div className="w-12 text-text_secondary">
                    <CiLock size={20}/>
                </div>
            </div>

            <div className="flex justify-between py-4 border-b border-text_secondary_2">
                <div className="flex justify-start gap-3 text-text_secondary font-normal text-md w-full">
                    <BsJournalBookmark size={20}/>
                    <Link to="?Lesson=1" className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                </div>
                <div className="w-12 text-text_secondary">
                    <CiLock size={20}/>
                </div>
            </div>

            <div className="flex justify-between py-4 border-b border-text_secondary_2">
                <div className="flex justify-start gap-3 text-text_secondary font-normal text-md w-full">
                    <BsJournalBookmark size={20}/>
                    <Link to="?Lesson=1" className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                </div>
                <div className="w-12 text-text_secondary">
                    <CiLock size={20}/>
                </div>
            </div>

            <div className="flex justify-between py-4 border-b border-text_secondary_2">
                <div className="flex justify-start gap-3 text-text_secondary font-normal text-md w-full">
                    <BsJournalBookmark size={20}/>
                    <Link to="?Lesson=1" className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Link>
                </div>
                <div className="w-12 text-text_secondary">
                    <CiLock size={20}/>
                </div>
            </div>

        </div>
    )
}

const users=[1,2,3,4,5,6,7,8,9,0]

function EnrolledUsers(){
    return(
        <div className="grid grid-cols-3 gap-4">
            {users.map((user)=>(
                <Link to="#" className="py-2 px-4 rounded-md flex gap-2 justify-start hover:shadow-sm delay-100 duration-500">
                    <div className="h-12 w-12 rounded-full p-1 border border-text_secondary_2">
                        <div className="h-10 w-10 rounded-full">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover rounded-full'/>
                        </div>
                    </div>
    
                    <div className="grid text-text_secondary">
                        <label className="font-bold text-sm">User name</label>
                        <small>Lorem ipsum dolor sit amet</small>
                    </div>
                    
                </Link>
            ))}
        </div>
    )
}

function Reviews(){
    return(
        <div>
            <h1 className="text-text_secondary font-bold text-lg mb-4">Table of contents</h1>

            <div className="grid grid-cols-3 gap-8">
                <div>
                    <label className="text-sm font-normal text-text_secondary">Average rating</label>

                    <div className="bg-secondary p-2 rounded-md py-4 my-4">
                        <p className='text-6xl p-2 font-bold text-primary text-center w-full'>4.5</p>
                        <div className='flex justify-center mt-8'>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#6b7280'/>

                        </div>

                        <p className="text-center text-sm font-normal text-text_secondary">9 Reviews</p>
                    </div>
                </div>
                <div className="col-span-2">
                    <label className="text-sm font-normal text-text_secondary">Detailed rating</label>
                    <div className="bg-secondary p-2 rounded-md py-4 my-4">
                        <div className="py-2">
                            <div className='w-full flex justify-between gap-2'>
                                <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                    <div
                                        style={{ width: `100%`}}
                                        className={`h-full bg-primary rounded-full`}>
                                    </div>
                                </div>
                                <label className='text-text_secondary font-bold text-sm -mt-2'>100%</label>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className='w-full flex justify-between gap-2'>
                                <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                    <div
                                        style={{ width: `30%`}}
                                        className={`h-full bg-primary rounded-full`}>
                                    </div>
                                </div>
                                <label className='text-text_secondary font-bold text-sm -mt-2'>30%</label>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className='w-full flex justify-between gap-2'>
                                <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                    <div
                                        style={{ width: `10%`}}
                                        className={`h-full bg-primary rounded-full`}>
                                    </div>
                                </div>
                                <label className='text-text_secondary font-bold text-sm -mt-2'>10%</label>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className='w-full flex justify-between gap-2'>
                                <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                    <div
                                        style={{ width: `5%`}}
                                        className={`h-full bg-primary rounded-full`}>
                                    </div>
                                </div>
                                <label className='text-text_secondary font-bold text-sm -mt-2'>5%</label>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className='w-full flex justify-between gap-2'>
                                <div className='h-1 w-11/12 bg-text_secondary_2 rounded-full'>
                                    <div
                                        style={{ width: `0%`}}
                                        className={`h-full bg-primary rounded-full`}>
                                    </div>
                                </div>
                                <label className='text-text_secondary font-bold text-sm -mt-2'>0%</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="my-4">
                <h1 className="text-text_secondary text-lg mb-4">Comments(1)</h1>

                <div className="flex justify-start gap-4">
                    <div className="py-3 w-20">
                        <div className="h-14 w-14 rounded-full">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover rounded-full'/>
                        </div>
                    </div>
                    <div className="border-b border-text_secondary_2 py-8 w-full px-4">
                        <div className="flex justify-between">
                            <div className="grid text-text_secondary mb-4">
                                <label className="font-bold text-sm">User name</label>
                                <small>August 8, 2012 at 9:22 am</small>
                            </div>

                            <div className='flex justify-center'>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#ca8a04'/>
                                <AiFillStar color='#6b7280'/>

                            </div>
                        </div>

                        <div>
                            <p className="text-text_secondary font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam massa, tempus sit amet ullamcorper eget, pharetra vel dolor. Nulla varius augue ut dolor vulputate dapibus in quis leo.</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="my-4">
                <h1 className="text-text_secondary text-lg mb-4">Leave Comment</h1>
                
                <div className='flex justify-start my-4'>
                    <p className="text-sm font-normal text-text_secondary">Ratings:</p>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#ca8a04'/>
                    <AiFillStar color='#6b7280'/>

                </div>

                <textarea type="text" className="bg-secondary shadow-lg text-text_secondary text-sm outline-none block w-full p-2.5 dark:bg-gray-700 placeholder-text_secondary_2 mb-3" rows="10" placeholder="Type in keyword" autoFocus="autofocus" required/>
                <Button className='w-1/5 my-4 bg-primary text-sm text-secondary py-3'>Submit Review</Button>

                
            </div>
        </div>
    )
}




const CoursesDetails = () => {

    const [section,setSections]=React.useState("ratings");

  return (
    <Layout>
        <div className='h-64 bg-cover bg-center bg-no-repeat bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU)] w-full'>
            <div className='h-64 bg-secondary w-full lg:px-14 px-4 bg-opacity-95 lg:flex block gap-4 justify-between py-8'>
                <div className='lg:py-12 py-4 w-full'>
                    <h1 className='text-primary font-bold text-4xl mb-4'>Course Details</h1>
                    <label><Link className='text-text_secondary font-bold'>Courses</Link> . <span>Course title</span></label>
                </div>
                <div className='w-full grid grid-cols-3 lg:py-12 py-4 '>
                    <div className='w-full h-12 flex justify-start gap-2'>
                        <div className='w-12 h-12'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvXSXf73LjjqJMqhsbH0vntbFV_r84i6qkQ&usqp=CAU' className='w-full h-full object-cover rounded-full'/>
                        </div>
                        <div>
                            <label className='text-sm text-text_secondary'>Teacher</label>
                            <p className='text-sm font-medium'>Instructor name</p>

                        </div>
                    </div>
                    <div className='w-full h-12 gap-2 border-l border-r text-center px-4'>
                        <label className='text-sm text-text_secondary'>Category</label>
                        <p className='text-sm font-medium'>Category</p>
                    </div>
                    <div className='w-full h-12 gap-2 text-center px-4'>
                        <label className='text-sm text-text_secondary'>4.5 (9 Reviews)</label>
                        <div className='flex justify-center'>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#ca8a04'/>
                            <AiFillStar color='#ca8a04'/>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='my-12 lg:px-14 w-full px-4 lg:flex justify-between gap-4'>
            <div className='border border-secondary rounded-lg lg:w-3/4 w-full mb-4'>
                <div class="mb-4 border-b border-secondary">
                    <ul class="flex flex-wrap -mb-px text-text_secondary text-sm font-bold text-center bg-secondary">
                        <li class="mr-2" role="presentation" onClick={()=>setSections("overview")}>
                            <button class={`inline-block p-4 border-t-2 ${section==="overview" ?'border-primary bg-btn_primary text-primary':'border-secondary'}  rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><BsBookmarks size={20}/>Overview</button>
                        </li>
                        <li class="mr-2" role="presentation" onClick={()=>setSections("curicullum")}>
                            <button class={`inline-block p-4 border-t-2 ${section==="curicullum" ?'border-primary bg-btn_primary text-primary':'border-secondary'} rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><SlBookOpen size={20}/>Table of contents</button>
                        </li>
                        <li class="mr-2" role="presentation" onClick={()=>setSections("enrolled")}>
                            <button class={`inline-block p-4 border-t-2 ${section==="enrolled" ?'border-primary bg-btn_primary text-primary':'border-secondary'} rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><GoPeople size={20}/>Enrolled</button>
                        </li>
                        <li role="presentation" onClick={()=>setSections("ratings")}>
                            <button class={`inline-block p-4 border-t-2 ${section==="ratings" ?'border-primary bg-btn_primary text-primary':'border-secondary'} rounded-t-sm hover:text-primary hover:border-primary flex justify-start gap-2`}><AiFillStar size={20}/>Ratings & Reviews</button>
                        </li>
                    </ul>
                </div>

                <div className='px-4 py-4'>
                    {section==='overview' && <Overview/>}
                    {section==="curicullum" && <Lectures/>}
                    {section==="enrolled" && <EnrolledUsers/>}
                    {section==="ratings" && <Reviews/>}
                </div>
                
            </div>
            <div className='lg:w-64 w-full h-72 bg-secondary shadow-md rounded-md px-4 py-2'>
                <div className='flex justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                    <LiaChalkboardTeacherSolid size={20}/>
                    <label className='text-sm font-bold text-text_secondary'>Instructor:</label>
                    <label className='text-sm font-normal'>Instructor name</label>
                </div>

                <div className='flex justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                    <BsJournalBookmark size={20}/>
                    <label className='text-sm font-bold text-text_secondary'>Lessons:</label>
                    <label className='text-sm font-normal'>14</label>
                </div>

                <div className='flex justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                    <FaLanguage size={20}/>
                    <label className='text-sm font-bold text-text_secondary'>Languages:</label>
                    <label className='text-sm font-normal'>English</label>
                </div>

                <div className='flex justify-start gap-1 border-b border-text_secondary_2 py-4 text-text_secondary'>
                    <GoPeople size={20}/>
                    <label className='text-sm font-bold text-text_secondary'>Enrolled:</label>
                    <label className='text-sm font-normal'>72</label>
                </div>

                <Button className='w-full my-2 bg-primary text-sm text-secondary py-3'>Enroll</Button>

            </div>
        </div>
    </Layout>
  )
}

export default CoursesDetails