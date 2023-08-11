import React,{useState,useEffect} from 'react'
import DashboardLayout from '../components/DashboardLayout'



export default function AdminHome() {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  
  return (
    <DashboardLayout>
      <div className='px-8 w-full mx-auto relative max-h-screen overflow-y-auto'>
      </div>
      
    </DashboardLayout>
  )
}

