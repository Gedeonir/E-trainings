import React, { useState } from 'react'
import { connect } from 'react-redux'
import DashboardLayout from '../components/DashboardLayout'
import {IoCloseOutline} from 'react-icons/io5'
import {BsSearch} from 'react-icons/bs'
import { fetchAllCategory } from '../../../redux/Actions/CategoryAction'
import { getAllMembers } from '../../../redux/Actions/membersAction'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'


export const MembersList = (props) => {
    const [toogleSearch,setToogleSearch]=React.useState(false);
    const [keyWord,setKeyword]=useState("")
    const [categoryName,setCategory] = useState("")

    React.useEffect(()=>{
        props.fetchAllCategory()
        props.getAllMembers()
    },[])

    const filterMembers=props?.data?.AllMembers?.resp?.data.filter((member)=>{
        return member?.fullNames?.toLowerCase().includes(keyWord.toLowerCase()) && member?.memberCategory?.toLowerCase().includes(categoryName.toLowerCase())
    })


  return (
    <DashboardLayout>
         {props?.data?.AllMembers?.loading?(
            <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
                <AiOutlineLoading3Quarters size={14} className="animate-spin w-8 h-8"/>
            </div>
        ):(props.data?.AllMembers?.success?(
            props?.data?.AllMembers?.resp?.data?.length <=0?(
                <p className='text-text_secondary text-center text-sm py-8 px-8'>No member registered yet</p>
            ):(
            <div className={`lg:px-8 px-4 py-4 w-full mx-auto overflow-y-auto max-h-screen relative`}> 
               
                <div className='py-2 lg:flex block justify-between'>
                    <h1 className='flex justify-start mb-2 gap-2 text-primary font-medium lg:text-2xl text-lg w-full'>
                        Members
                    </h1>
                    <div className='flex justify-end gap-4 relative'>
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
                                    <BsSearch size={15} className='cursor-pointer hover:text-primary' onClick={()=>setToogleSearch(!toogleSearch)}/>
                                </div>  </>  
                            ):(<p></p>)}
                        </div>
                                    
                    </div>
                </div>

                <div className={`text-text_secondary font-bold relative py-2 shadow-sm ${toogleSearch?'block':'hidden'}`}>
                    <BsSearch size={20} className='cursor-pointer hover:text-primary absolute top-4 left-4'/>
                    <input type="text" value={keyWord}
                    className="px-12 text-text_secondary text-sm outline-none block w-full p-2.5 dark:bg-gray-700 placeholder-text_secondary_2" placeholder="Type in keyword" autoFocus="autofocus" required
                    onChange={(e)=>{
                        setKeyword(e.target.value)
                    }}/>
                    <IoCloseOutline size={20} className='cursor-pointer hover:text-primary absolute top-4 right-4'
                    onChange={(e)=>{
                        setKeyword("")
                    }}/>
                    
                </div>

                <div className="flex flex-col">
                    <div className="lg:overflow-x-hidden overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-xs text-text_secondary font-light">
                            <thead className="border-b border-text_secondary_2 font-medium">
                                <tr>
                                    <th scope="col" className="px-2 py-4">#</th>
                                    <th scope="col" className="px-2 py-4">Full names</th>
                                    <th scope="col" className="px-2 py-4">Mobile</th>
                                    <th scope="col" className="px-2 py-4">Category</th>
                                    <th scope="col" className="px-2 py-4">Age</th>
                                    <th scope="col" className="px-2 py-4">isMarried</th>
                                    <th scope="col" className="px-2 py-4">Marriage year</th>
                                    <th scope="col" className="px-2 py-4">District</th>
                                    <th scope="col" className="px-2 py-4">Church</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filterMembers.length <=0?(
                                <tr>
                                    <td className="px-2 py-4 font-medium text-center" colSpan={9}>No member matches your criterias</td>
                                </tr>
                            ):(filterMembers?.map((member,index)=>(
                                    <tr key={index}
                                    className="border-b cursor-pointer delay-100 border-text_secondary_2 transition duration-300 ease-in-out hover:bg-secondary">
                                        <td className="px-2 py-4 font-medium">{index+1}</td>
                                        <td className="px-2 py-4 flex justify-start gap-2">
                                            <div className="h-4 w-4 rounded-full">
                                                <img 
                                                src={!member?.profilePicture?'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png':`${member?.profilePicture}`} className='w-full h-full object-cover rounded-full'/>
                                            </div>
                                            {member?.fullNames}
                                        </td>
                                        <td className="px-2 py-4">{member?.mobile}</td>
                                        <td className="px-2 py-4">{member?.memberCategory}</td>
                                        <td className="px-2 py-4 font-medium">{new Date().getFullYear() - new Date(member?.age).getFullYear()}</td>
                                        <td className="px-2 py-4">{member?.isMarried?'Yes':'No'}</td>
                                        <td className="px-2 py-4">{member?.yearOfMarriage?member?.yearOfMarriage:'-'}</td>
                                        <td className="px-2 py-4">{member?.district}</td>
                                        <td className="px-2 py-4 font-medium">{member?.church}</td>
                                    </tr>
                                )))}

                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        ):(
            <p className='text-text_secondary text-center'>{props?.data?.AllMembers?.error?.response?.data?.message}</p>
        ))}
       

    </DashboardLayout>
  )
}


const mapState = (data) => ({data:data})


export default connect(mapState, {
    fetchAllCategory,
    getAllMembers
})(MembersList)