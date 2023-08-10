import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom';
import {BsArrowRight,BsSearch} from 'react-icons/bs'
import Card2 from '../components/Card2';
import {IoCloseOutline} from 'react-icons/io5'
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const cards2=[1,2,3]
const cards=[1,2,3,4,5,6,7,8,9,0]
const Homepage = () => {

    const [toogleSearch,setToogleSearch]=React.useState(false);
  return (
    <Layout>
        <div className='lg:px-14 px-4 py-4'>      
            <div className='mb-4 py-4'>
                <div className='flex justify-between'>
                    <h1 className='grid text-primary font-medium lg:text-2xl text-lg mb-4'>Continue <span className='text-text_secondary font-bold lg:text-3xl text-xl'>Where you left of</span></h1>
                    <Link to="#" className='mt-8 flex justify-start text-text_secondary gap-1 text-sm group'><span className='group-hover:mx-2 delay-100 duration-500'>Browse my courses</span> <BsArrowRight className='my-1' size={15}/></Link>
                        
                </div>
                <div className='grid lg:grid-cols-3 gap-8 py-2'>              
                    {cards2.map((card,index)=>(
                        <Card2 key={index} progressPercentage={index*5*5}/>
                    ))}
                </div>
            
            </div>

            <div className='mb-4 py-4'>
                <div className='lg:flex justify-between gap-4 relative'>
                    <h1 className='grid text-primary font-medium lg:text-2xl text-lg mb-4 w-full'>Find the right <span className='text-text_secondary font-bold lg:text-3xl text-xl'>Course for you</span></h1>
                    <div className='flex lg:justify-end justify-between lg:gap-4 gap-2 w-full h-8 mt-8 text-text_secondary font-medium lg:px-8'>
                        <label className='text-primary cursor-pointer delay-100 duration-500  border-b-2'>All</label>
                        <label className='cursor-pointer  hover:border-b-2'>Junior</label> 
                        <label className='cursor-pointer  hover:border-b-2'>Golden</label> 
                        <label className='cursor-pointer  hover:border-b-2'>Flower</label> 
                        <label className='cursor-pointer  hover:border-b-2'>Eagle</label>
                        <label className='cursor-pointer  hover:border-b-2'>Excellent</label>

                        <div className='text-text_secondary font-bold relative text-lg mt-1'>
                            <BsSearch  className='cursor-pointer hover:text-primary' onClick={()=>setToogleSearch(!toogleSearch)}/>

                        </div>
                    </div>                    
                </div>

                <div className={`text-text_secondary font-bold relative py-2 shadow-sm ${toogleSearch?'block':'hidden'}`}>
                    <BsSearch size={20} className='cursor-pointer hover:text-primary absolute top-4 left-4'/>
                    <input type="text" className="px-12 text-text_secondary text-sm outline-none block w-full p-2.5 dark:bg-gray-700 placeholder-text_secondary_2" placeholder="Type in keyword" autoFocus="autofocus" required/>
                    <IoCloseOutline size={20} className='cursor-pointer hover:text-primary absolute top-4 right-4'/>
                </div>

                <div className='grid lg:grid-cols-4 gap-8 py-2 my-4'>              
                    {cards.map((card,index)=>(
                        <Card key={index} progressPercentage={index*5*5} id={index}/>
                    ))}
                </div>
            </div>

        


        </div>
    </Layout>
  )
}

export default Homepage