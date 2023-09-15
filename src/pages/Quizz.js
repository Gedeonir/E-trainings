import Layout from '../components/Layout'
import React, { useEffect, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import { connect } from 'react-redux';
import { addQuestion, fetchAllCoursesLessons, fetchOneQuizz, getQuestions} from '../redux/Actions/CoursesAction';
import axios from 'axios';
import { CiWarning } from 'react-icons/ci'
import Restricted from '../components/Restricted';

const Quizz = (props) => {
    
    const params=useParams();

    const[confirm,openConfirm]=React.useState(false)
    const [answers,setAnswers]=React.useState([]);

    const [loading,setLoading]=useState(false);
    const navigate=useNavigate()


    const addDataToAnswers = (newData,question) => {
        const updatedAnswers = [...answers, newData];

        if (answers.some(obj=>obj.question==question)) {
            
            const modifiedArray = answers.map(item => {
                if (item.question === question) {
                // Modify the specific property (e.g., "answer") in the object
                return { ...item, answer: newData.answer }; // Replace "modifiedValue" with your desired modification
                }
                return item; // Keep other objects as they are
            });

            setAnswers([]);
            setAnswers(modifiedArray)
        } else {
            setAnswers(updatedAnswers);   
        }
    };
    
    const [response,setResponse]=useState({
        success:null,
        resp:null,
        error:null,
    })

    const handleSubmit=async()=>{
        setLoading(true)
        try {
            const res=await axios.patch(`${process.env.BACKEND_URL}/course/${params.quizz}/marking`,answers,
            {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${sessionStorage.getItem('memberToken')}`
                }
            })


            setResponse({
                ...response,
                success:true,
                resp:res.data.message

            })

            props.fetchOneQuizz(params.id,params.quizz)
        } catch (error) {
            setResponse({
                ...response,
                success:false,
                error:error?.response?.data?.message
            })
        }

        setLoading(false)
    }


    const checkEligibility=(lessons)=>{
        const score=lessons?.filter(lesson=> lesson.completedBy.some((obj) =>obj?.member ==props?.data?.memberProfile?.resp?.data?.getProfile?._id))

        return score
    }

    const checkDecision=(data)=>{
        const score=data?.filter(element=> element.member ==props?.data?.memberProfile?.resp?.data?.getProfile?._id)
        return score
    }

    useEffect(()=>{
        props.getQuestions(params.quizz),
        props.fetchOneQuizz(params.id,params.quizz),
        props.fetchAllCoursesLessons(params.id) 

 
    },[])


  





    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const mixSolutions=(question)=>{
        const solutions=[];
        solutions.push(question.alternateSolution1,question.alternateSolution2,question.alternateSolution3,question.solution)
        
        // // Shuffle the array
        // shuffleArray(solutions);
      
        // // Map the shuffled array
        // const mappedArray = solutions.map((element) => {
        //     return element; // You can add your mapping logic here if needed
        // });
        
        // return mappedArray
        return solutions
    }



  return (
    <Layout>
        {props?.data?.courseLessons?.loading?(
            <div className='min-h-screen max-h-screen items-center flex justify-center'>
                <div className="lg:w-2/5 px-8 py-4 rounded-lg  w-full">

                    <div className="text-text_secondary text-4xl text-center">
                        <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
                            <AiOutlineLoading3Quarters size={15} className="animate-spin w-8 h-8"/>
                        </div>
                        <label className="text-sm">Verifying if you are eligible to sit for this exam</label>
                    </div>
                        
                
                </div>
            </div>
        ):(
            props?.data?.courseLessons?.success?(
                checkEligibility(props?.data?.courseLessons?.resp?.data)?.length < props?.data?.courseLessons?.resp?.data?.length-1?(
                    <div className='min-h-screen max-h-screen items-center flex justify-center'>
                        <div className="lg:w-2/5 px-8 py-4 rounded-lg  w-full">

                            <div className="text-text_secondary text-4xl text-center">
                                <div className='w-8 h-8 text-primary text-center mx-auto mb-2'>
                                    <CiWarning size={15} className="w-8 h-8"/>
                                </div>
                                <label className="text-sm">To sit for this exam you have to complete at least <span className='font-bold'>at least {props?.data?.courseLessons?.resp?.data?.length-1} lesson(s)</span> of the course. So far you have completed <span className='font-bold'>{checkEligibility(props?.data?.courseLessons?.resp?.data)?.length}</span> lesson(s)</label>
                                <div className="flex w-full justify-start my-4">
                                    <button className=" text-secondary text-sm p-2 bg-primary w-full" onClick={()=>navigate(`/courses/${params.id}`,{replace:true})}>Take me back to course</button>
                                </div>
                            </div>
                                
                        
                        </div>
                    </div> 
                ):(

                    props?.data?.oneQuiz?.loading?(
                        <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
                        <AiOutlineLoading3Quarters size={15} className="animate-spin w-8 h-8"/>
                        </div>
                    ):(

                        props?.data?.oneQuiz?.success?(
                            props?.data?.oneQuiz?.resp?.data?.getQuizz?.completedBy.some((obj) => obj?.member === props?.data?.memberProfile?.resp?.data?.getProfile?._id)?(
                                <div className='min-h-screen max-h-screen flex justify-center'>
                                    <div className="lg:w-2/5 px-8 py-4 rounded-lg  w-full">
    
                                        <div className="text-text_secondary text-4xl text-center">
                                            <h1 className="font-bold text-primary">All done</h1>
                                            <label className="text-sm">You have already attempted this quizz.</label>
                                            
                                           
                                            {checkDecision(props?.data?.oneQuiz?.resp?.data?.getQuizz?.completedBy).map(element=>(
                                                <div key={element.score}>
                                                    <p className="text-sm grid"><span className='font-bold'>Submitted on:</span>{new Date(element.at).toLocaleDateString()} at {new Date(element.at).toLocaleTimeString()}</p>
                                                    <p className="text-sm grid"><span className='font-bold'>
                                                        Marks:</span>{props?.data?.getQuestions?.success?(
                                                            <label>{element.score}/{props?.data?.getQuestions?.resp?.data?.length}</label>
                                                        ):(
                                                            <label>-</label>
                                                        )}
                                                    </p>
                                                    <div>
                                                        <p className='text-sm font-bold'>Decision:</p>
                                                        {element.score>=Math.round((props?.data?.getQuestions?.resp?.data?.length)/2)?(
                                                            <div className='bg-primary w-full lg:px-12 px-4 bg-opacity-20 py-2 text-sm'>                                                              
                                                                <p>Thank you for submitting your work. The pass mark was <span className='font-bold'>{Math.round((props?.data?.getQuestions?.resp?.data?.length)/2)}/{props?.data?.getQuestions?.resp?.data?.length}</span> and you have got <span className='font-bold'>{element.score}/{props?.data?.getQuestions?.resp?.data?.length}</span></p>
                                                            </div>
                                                        ):(
                                                            <div className='bg-danger w-full lg:px-12 px-4 bg-opacity-20 py-2 text-sm'>                                                              
                                                                <p>Thank you for submitting your work but unfortunately you did not meet required pass mark. The pass mark was <span className='font-bold'>{Math.round((props?.data?.getQuestions?.resp?.data?.length)/2)}/{props?.data?.getQuestions?.resp?.data?.length}</span> and you have got <span className='font-bold'>{element.score}/{props?.data?.getQuestions?.resp?.data?.length}</span></p>
                                                            </div>
                                                            
                                                        ) }
                                                    </div>
                                                </div>
                                            ))}
                                            
                                            <div className="flex w-full justify-start my-4">
                                                <button className=" text-secondary text-sm p-2 bg-primary w-full" onClick={()=>navigate(`/courses/${params.id}`,{replace:true})}>Take me back to course</button>
                                            </div>
                                        </div>
                                            
                                    
                                    </div>
                                </div>
                            ):(props?.data?.getQuestions?.success?(
                                <div className='w-full grid lg:grid-cols-5 lg:px-8 py-2 overflow-y-auto max-h-screen pb-24 relative'>
                                    
                                    <div className='lg:col-span-4 lg:px-8 px-4 w-full lg:pb-32 relative pt-4 bg-btn_primary'>
                                        <div>
                                            <p className="text-sm text-justify mb-4 text-text_secondary"><span className='font-bold'>Course:</span>{props?.data?.oneQuiz?.resp?.data?.getQuizz?.Course?.courseTitle}</p>
                                            <p className="text-sm text-justify mb-4 text-text_secondary"><span className='font-bold'>Exam:</span>{props?.data?.oneQuiz?.resp?.data?.getQuizz?.QuizName}</p>

                                        </div>
                                        
                                        {props?.data?.getQuestions?.resp?.data?.length==0?(
                                            <div className='h-56 flex items-center justify-center lg:col-span-3'>
                                                <p className='text-text_secondary text-center text-sm'>No question is added yet</p>
                                            </div>
                                        ):(
                                            props?.data?.getQuestions?.resp?.data?.map((question,index)=>(
                                            <div key={index} className="text-text_secondary border border-secondary mb-3 text-sm">
                                                <p className='font-medium flex justify-start gap-2 mb-2 mx-4'><span>{index+1}.</span>{question.question}</p>
                                                {mixSolutions(question)?.map((solution)=>(
                                                    <div className="mx-8" key={solution}>
                                                        <input
                                                        id=""
                                                        className="peer/published bg-primary"
                                                        type="radio"
                                                        name={question.question}
                                                        value={solution}
                                                        onChange={(e) =>
                                                            addDataToAnswers({
                                                                "question":question._id,
                                                                "answer":e.target.value,
                                                            },question._id)
                                                        }
                                                        required
                                                        />
                                                        <label className="peer-checked/published:text-primary px-2">
                                                            {solution}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        )))}
                                        
                                    
                                    </div>
                                    <div className='px-4 py-4 bg-secondary h-full w-full'>
                                        <Link to="#" className='flex mb-4 justify-start text-text_secondary gap-1 text-sm group underline'><span className='group-hover:mx-2 delay-100 duration-500'>View instructions</span> <BsArrowRight className='my-1' size={15}/></Link>
                                        <p className="text-sm text-justify mb-4 text-text_secondary"><span className='font-bold'>Previous score:</span>
                                            {props?.data?.oneQuiz?.resp?.data?.getQuizz?.completedBy.some((obj) => obj?.member === props?.data?.memberProfile?.resp?.data?.getProfile?._id)?(
                                                props?.data?.oneQuiz?.resp?.data?.getQuizz?.completedBy.map((score)=>{
                                                    if (score.member===props?.data?.memberProfile?.resp?.data?.getProfile?._id) {
                                                        return score.score
                                                    }
                                                })
                                            ):(
                                                "-"
                                            )}
                                        </p>
                                        <p className="text-sm text-justify mb-4 text-text_secondary"><span className='font-bold'>Status:</span>
                                        {props?.data?.oneQuiz?.resp?.data?.getQuizz?.completedBy.some((obj) => obj?.member === props?.data?.memberProfile?.resp?.data?.getProfile?._id)?(
                                            "Submitted"
                                        ):(
                                            "Not submitted"
                                        )}
                                        </p>
                                        {props?.data?.getQuestions?.resp?.data?.length>0 &&
                                        <div className='w-full'>
                                            <button size="sm" className={`bg-primary text-sm text-secondary p-2`} onClick={()=>openConfirm(true)}>
                                                Finish and submit
                                            </button>
                                        </div>}

                                    </div>
                                    
                                    {confirm &&
                                    <div className=" absolute flex justify-center items-center w-full min-h-screen bg-secondary bg-opacity-80">
                                        <div className="lg:w-2/5 bg-secondary px-4 py-4 rounded-lg   flex justify-start gap-4 w-full border border-text_secondary_2">
                                            <div className="bg-secondary  text-text_secondary h-20 w-20 p-2 rounded-full text-center flex items-center">
                                                <CiWarning size={50} className='w-20 h-20'/>
                                            </div>
                                            <div className="text-text_secondary text-sm">
                                                <label className="text-sm">Are you sure you want to submit this quizz. This action can not be undone</label>
                                                {response.success?<p className='text-xs text-primary font-bold text-center p-2 bg-primary bg-opacity-20'>{response.resp}</p>
                                                :
                                                <p className={`text-xs text-danger text-center p-1 ${response?.error && 'bg-danger'} bg-opacity-20`}>
                                                    {response.error}
                                                </p>}
                                                <div className="flex w-full justify-start my-4 gap-4">
                                                    <button size="sm" className={`bg-primary text-sm text-secondary p-2 ${loading? 'cursor-not-allowed ':'cursor-pointer'}`} disabled={loading? true : false} onClick={()=>handleSubmit()}>
                                                        {loading?<p className="flex justify-center gap-2"><AiOutlineLoading3Quarters size={20} className="animate-spin h-5 w-5"/><span> Submitting...</span></p>:'Oonfirm and submit'}
                                                    </button>
                                                    <button className=" text-sm p-2 border-primary text-primary border" onClick={()=>openConfirm(false)}>Go back</button>
                                                </div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                    }
                                
                                </div> 
                                ):(
                                    <p></p>
                                )
                            )
                        ):(
                            <p className='text-text_secondary text-center'>{props?.data?.oneQuiz?.error?.response?.data?.message}</p>
                        )
                            
                    )
                )
            ):(
                <div className='min-h-screen max-h-screen items-center flex justify-center'>
                    <div className="lg:w-2/5 px-8 py-4 rounded-lg  w-full">

                        <div className="text-text_secondary text-4xl text-center">
                            <div className='w-8 h-8 text-primary text-center mx-auto mb-2'>
                                <CiWarning size={15} className="w-8 h-8"/>
                            </div>
                            <label className="text-sm">Verfication failed</label>
                        </div>
                            
                    
                    </div>
                </div> 
            )
        )}
        
    </Layout>
  )
}

const mapState=(data)=>({
data:data
})

export default connect(mapState,{
    addQuestion,
    getQuestions,
    fetchOneQuizz,
    fetchAllCoursesLessons
})(Quizz)