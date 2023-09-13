import Layout from '../components/Layout'
import React, { useEffect, useState } from 'react'
import {BsArrowRight} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom';
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import { connect } from 'react-redux';
import { addQuestion, fetchOneQuizz, getQuestions} from '../redux/Actions/CoursesAction';
import axios from 'axios';
import { CiWarning } from 'react-icons/ci'
fetchOneQuizz

const Quizz = (props) => {
    
    const params=useParams();

    const[confirm,openConfirm]=React.useState(false)
    const [answers,setAnswers]=React.useState([]);

    const [loading,setLoading]=useState(false);


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

            console.log(res);

            props.fetchOneQuizz(params.id,params.quizz)
        } catch (error) {
            console.log(error)
        }

        setLoading(false)
    }

    useEffect(()=>{
        props.getQuestions(params.quizz),
        props.fetchOneQuizz(params.id,params.quizz)
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
        {props?.data?.oneQuiz?.loading?(
            <div className='w-8 h-8 text-primary text-center mx-auto my-8'>
              <AiOutlineLoading3Quarters size={15} className="animate-spin w-8 h-8"/>
            </div>
        ):(
            props?.data?.oneQuiz?.success?(
                <div className='w-full grid lg:grid-cols-5 lg:px-8 py-2 overflow-y-auto max-h-screen pb-24 relative'>
                    <div className='lg:col-span-4 lg:px-8 px-4 w-full lg:pb-32 relative pt-4 bg-btn_primary'>
                        <div>
                            <p className="text-sm text-justify mb-4 text-text_secondary"><span className='font-bold'>Course:</span>{props?.data?.oneQuiz?.resp?.data?.getQuizz?.Course?.courseTitle}</p>
                            <p className="text-sm text-justify mb-4 text-text_secondary"><span className='font-bold'>Quizz:</span>{props?.data?.oneQuiz?.resp?.data?.getQuizz?.QuizName}</p>

                        </div>
                        {props?.data?.getQuestions?.success?(
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
                            ))
                        ):(
                            <p></p>
                        )}
                    
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
                        <div className='w-full'>
                            <button size="sm" className={`bg-primary text-sm text-secondary p-2`} onClick={()=>openConfirm(true)}>
                                Finish and submit
                            </button>
                        </div>

                    </div>
                    {confirm &&
                    <div className=" absolute flex justify-center items-center w-full min-h-screen bg-secondary bg-opacity-80">
                        <div className="lg:w-2/5 bg-secondary px-4 py-4 rounded-lg   flex justify-start gap-4 w-full border border-text_secondary_2">
                            <div className="bg-secondary  text-text_secondary h-20 w-20 p-2 rounded-full text-center flex items-center">
                                <CiWarning size={50} className='w-20 h-20'/>
                            </div>
                            <div className="text-text_secondary text-sm">
                                <label className="text-sm">Are you sure you want to submit this quizz. This action can not be undone</label>
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
                <p className='text-text_secondary text-center'>{props?.data?.oneQuiz?.error?.response?.data?.message}</p>
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
    fetchOneQuizz
})(Quizz)