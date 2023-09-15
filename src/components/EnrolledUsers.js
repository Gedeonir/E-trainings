import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../redux/Actions/CoursesAction'


function EnrolledUsers(props){

    const checkDecision=(data,id)=>{
        const score=data?.filter(element=> element.member ==id)
        return score
    }

    console.log(props);

    useEffect(()=>{
        props.getQuestions(props?.quizzes[0]?._id) 
    },[])


    return(
        <div className="block">
            <div className='flex justify-between mb-4 w-full'>
                <h1 className="text-text_secondary font-bold text-sm">All enrolled members list</h1>
                {/* {location.pathname.includes("users/admin/courses") &&
                <button className='text-sm text-primary' onClick={()=>exportToExcel()}><FaFileExport size={20}/></button>} */}
            </div>

            <div className='grid lg:grid-cols-4 grid-cols-2 gap-2'>
                {props.enrolledTrainees?.length <=0 ?(
                    <div className='h-56 flex items-center justify-center lg:col-span-3'>
                        <p className='text-text_secondary text-center text-sm'>No member is enrolled yet</p>
                    </div>
                ):(props.enrolledTrainees?.map((member,index)=>(
                    <div key={index} className='h-56 border border-secondary rounded-md'>
                        <div className='px-2  py-2'>
                            <div className="grid text-text_secondary mb-1">
                                <p className='text-xs font-semibold text-center'>Names:</p>
                                <p className="text-xs truncate text-center">{member.member.fullNames}</p>
                            </div>

                            <div className="grid text-text_secondary mb-1">
                                <p className='text-xs font-semibold text-center'>ID:</p>
                                <p className="text-xs truncate text-center">{member.member.ID}</p>
                            </div>

                            <div className="grid text-text_secondary mb-1">
                                <p className='text-xs font-semibold text-center'>Category:</p>
                                <p className="text-xs truncate text-center">{member.member.traineeCategory}</p>
                            </div>

                            <div className="grid text-text_secondary mb-1">
                                <p className='text-xs font-semibold text-center'>Status:</p>
                                <p className="text-xs truncate text-center">
                                    {props.data?.oneCourse?.resp?.data?.getCourse?.completedBy.some((obj) => obj?.member === member.member._id)?'Completed':'Pending/failed'}
                                </p>
                            </div>

                            {props.quizzes?.map(quizz=>
                                !quizz.completedBy.some((obj) => obj?.member === member.member._id)?(
                                    <>
                                    <div className="grid text-text_secondary mb-1">
                                        <p className='text-xs font-semibold text-center'>Score:</p>
                                        <p className="text-xs truncate text-center">No submission</p>
                                    </div>
                                    <div className="grid text-text_secondary mb-1">
                                        <p className='text-xs font-semibold text-center'>Decision:</p>
                                        <p className="text-xs truncate text-center">-</p>
                                    </div>
                                    </>
                                ):(
                                    checkDecision(quizz.completedBy,member.member._id).map(element=>(
                                        <>
                                            <div className="grid text-text_secondary mb-1">
                                                <p className='text-xs font-semibold text-center'>Score:</p>
                                                <p className="text-xs truncate text-center">
                                                {props?.data?.getQuestions?.success?(
                                                    <label>{element.score}/{props?.data?.getQuestions?.resp?.data?.length}</label>
                                                ):(
                                                    <label>-</label>
                                                )}
                                                </p>
                                            </div>
                
                                            <div className="grid text-text_secondary mb-1">
                                                <p className='text-xs font-semibold text-center'>Decision:</p>
                                                
                                                {props?.data?.getQuestions?.success?(
                                                    element.score>=Math.round((props?.data?.getQuestions?.resp?.data?.length)/2)?(
                                                
                                                        <p className="text-xs truncate text-center text-primary font-semibold">Passed</p>
                                                        
                                                    ):(
                                                        <p className="text-xs truncate text-center text-danger font-semibold">Failed/Retake</p>
                                                            
                                                    )):(<label>-</label>) }
                                            </div>
                                        </>
                                    ))
                                )
                            )}
           
                        </div>
                    </div>
                )))} 
            </div>
        </div>
    )
}

const mapState=(data)=>({
    data:data
})

export default connect(mapState,{
    getQuestions
})( EnrolledUsers)