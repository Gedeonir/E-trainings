import React from 'react'
import {CiMenuKebab} from 'react-icons/ci'

export default function Notifications(props) {
    const [filterOption,setFilterOption]=React.useState('All')

    const options=[
        {
            option:"Mark as read",
            icon:''
        },
        {
            option:"Remove notification",
            icon:''
        },
        {
            option:"Mute IG",
            icon:''
        }
    ]

    const [openNotificationAction,setOpenNotificationAction]= React.useState(false)
    const [openNotificationAction2,setOpenNotificationAction2]= React.useState(false)

  return (

    <div className={`lg:py-2 bg-secondary z-40 absolute top-0 right-0 bottom-0 left-0 bg-opacity-50 max-h-screen transform duration-1000 delay-300 ease-in-out ${props.openNotificationAction?'translate-x-0':'translate-x-full'}`}>
        <div className={`bg-secondary w-full lg:max-w-md max-h-screen min-h-screen overflow-y-auto shadow-lg drop-shadow-lg py-4 ml-auto `}>
            <div className='sticky top-0 bg-secondary z-40 px-3'>
                <div className="cursor-pointer hover:font-bold transition duration-150 ease-in-out ml-auto flex gap-2 text-text_secondary mb-2" onClick={()=>props.setOpenNotificationAction(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                    Close
                </div>
                <div className='w-full lg:flex block justify-between'>
                    <div className='w-full flex justify-start py-2 text-sm text-text_secondary'>
                        <div className={`px-2 h-8 py-1 rounded-l-lg border border-text_secondary_2 hover:bg-btn_primary cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out`}>
                            <p>All</p>
                        </div>
                        <div className='px-2 h-8 py-1 border border-text_secondary_2 hover:bg-btn_primary  cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out'>
                            <p>Unread</p>
                        </div>
                        <div className='px-2 h-8 py-1 border border-text_secondary_2 hover:bg-btn_primary cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out'>
                            <p>Read</p>
                        </div>
                        <div className='px-2 h-8 py-1 rounded-r-lg border border-text_secondary_2 hover:bg-btn_primary cursor-pointer hover:text-secondary hover:border-btn_primary transition duration-150 ease-in-out'>
                            <p>From Swiplot</p>
                        </div>

                    </div>
                    <div className='py-2 h-8 lg:px-4'>
                        <button className='focus:outline-none px-2 py-1 transition h-8 w-32 duration-150 ease-in-out hover:bg-text_primary bg-btn_primary text-secondary rounded-md text-sm flex gap-2'>Mark all as read</button>
                    </div>
                </div>
                <div className='left-0 right-0 w-full flex justify-between mb-4 mt-4'>
                    <div className='w-full flex justify-start py-2 text-sm text-text_secondary'><h1>Notifications(10)</h1></div>
                
                    <div className='py-1 items-end lg:px-4'>
                        <button className='text-text_secondary w-32 text-left hover:text-opacity-70 text-sm focus:outline-none transition duration-150 ease-in-out'>Clear Notifications</button>
                    </div>
                </div>
            </div>
            <div className='relative px-2'>
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>         
                <div className='flex justify-between gap-2 w-full mb-2 relative  rounded-lg text-text_secondary cursor-pointer hover:bg-text_secondary hover:bg-opacity-5  duration-500 transition-all delay-100 ease-in-out'>
                    <div className='flex justify-start gap-2 py-2 px-2 w-full'>
                        <div className="h-8 rounded-full w-8 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat relative"></div>
                        <div className="block">
                            <div className='flex justify-start gap-2 flex-wrap w-full'><p className="text-md font-bold">IG</p><p className='font-normal text-md'>Likes your plot</p></div>
                            <p className="text-sm font-light opacity-50">12 minutes ago</p>
                        </div> 
                    </div>
                    <div className='py-2 px-3 relative h-8'>
                        <CiMenuKebab onClick={()=>setOpenNotificationAction(!openNotificationAction)}/>
                        {openNotificationAction&& 
                            <div className='absolute w-48 right-6 top-5 bg-secondary drop-shadow-lg rounded-b-lg rounded-l-lg'>
                                <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
                                    {options.map((option)=>{
                                        return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10">{option.option} {option.icon}</button>
                                    })}
                                </ul>
                            </div>
                        }
                    </div>

                    
                </div>            
            </div>
        </div>
    </div>
  )
}
