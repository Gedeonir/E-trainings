import React, { useEffect } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import {BsArrowRight} from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Radio } from "@material-tailwind/react";
import {AiOutlineFileAdd} from "react-icons/ai";
import AddQuestion from './AddQuestion';
import { connect } from 'react-redux';
import { addQuestion, getQuestions } from '../../../redux/Actions/CoursesAction';

const ViewQuizDetails = (props) => {

    const params=useParams();

    const[open,setOpen]=React.useState(false)
    const [formData,setFormData]=React.useState({
        question:"",
        solution:"",
        alternateSolution1:"",
        alternateSolution2:"",
        alternateSolution3:""
    })


    const handleSubmit=(event)=>{
        event.preventDefault()
        props.addQuestion(formData,params.quizz);
        props.getQuestions(params.quizz)
    }

    useEffect(()=>{
        props.getQuestions(params.quizz)
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
        
        // Shuffle the array
        shuffleArray(solutions);
      
        // Map the shuffled array
        const mappedArray = solutions.map((element) => {
            return element; // You can add your mapping logic here if needed
        });
        
        return mappedArray
    }

  return (
    <DashboardLayout>
        <div className='w-full grid lg:grid-cols-5 lg:px-8 py-2'>
            <div className='col-span-4 overflow-y-auto max-h-screen min-h-screen lg:px-8 px-4 w-full lg:pb-32 relative pt-4 bg-btn_primary'>
                {props?.data?.getQuestions?.success?(
                    props?.data?.getQuestions?.resp?.data?.map((question,index)=>(
                        <div className="text-text_secondary">
                            <p className='font-bold flex justify-start gap-2 mb-2'><span>{index+1}.</span>{question.question}</p>
                            {mixSolutions(question)?.map((solution)=>(
                                <div className="mx-4" key={solution}>
                                    <input
                                    id=""
                                    className="peer/published bg-primary"
                                    type="radio"
                                    name={question.question}
                                    value={solution}
                                    //   onChange={(e) =>
                                    //     setFormData({
                                    //       ...formData,
                                    //       gender: e.target.value,
                                    //     })
                                    //   }
                                    defaultChecked={solution ==question.solution}
                                    disabled={solution ==question.solution?false:true}
                                    required
                                    />
                                    <label className="peer-checked/published:text-sky-500 px-2">
                                        {solution}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))
                ):(
                    <p></p>
                )}
                
                {open &&
                <div className='absolute w-full top-0 left-0 right-0 z-40 pt-12 bg-primary bg-opacity-40 min-h-screen max-h-screen overflow-y-hidden flex items-center  lg:px-8 px-2'>
                   <AddQuestion formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
                </div>
                }
            </div>
            <div className='px-4 py-4'>
                <h1 className='text-text_secondary font-bold text-sm py-2'>Questions</h1>
                <div className='grid grid-cols-4 gap-2 mb-4'>
                    <div className='h-8 w-8 px-2 py-2 rounded-sm cursor-pointer  bg-text_secondary_2 shadow-md text-center text-sm font-bold text-text_secondary'>
                        <p>1</p>
                    </div>
                    <div className='h-8 w-8 px-2 py-2 rounded-sm cursor-pointer bg-text_secondary_2 shadow-md text-center text-sm font-bold text-text_secondary'>
                        <p>2</p>
                    </div>
                    <button className='h-8 w-8 px-2 py-2 rounded-sm cursor-pointer bg-text_secondary_2 bg-opacity-70 text-center text-sm font-bold text-text_secondary' onClick={()=>setOpen(!open)}>
                        <AiOutlineFileAdd/>
                    </button>
                </div>

                <Link to="#" className='flex mb-4 justify-start text-text_secondary gap-1 text-sm group underline'><span className='group-hover:mx-2 delay-100 duration-500'>View instructions</span> <BsArrowRight className='my-1' size={15}/></Link>
                <p className="text-sm text-justify mb-4 text-text_secondary"><span className='font-bold'>Timer:</span>00:00:00</p>
                
                
                <div className='w-full'>
                    <button size="sm" className='bg-primary text-sm text-secondary p-2'>Finish and submit</button>
                </div>

            </div>
        
        </div>    
    </DashboardLayout>
  )
}

const mapState=(data)=>({
data:data
})

export default connect(mapState,{
    addQuestion,
    getQuestions
})(ViewQuizDetails)