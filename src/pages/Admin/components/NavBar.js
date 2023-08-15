import React from 'react'
import WMLogo from "../../../assets/WMLogo.PNG"
import {HiMenuAlt1} from 'react-icons/hi'
import AdventistLogo from "../../../assets/AdventistLogo.png"


export const navBarOptions=[
  {
    option:"Profile",
    icon:<div className="h-4 px-2 rounded-full w-4 bg-[url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-2747449.jpg&fm=jpg)] bg-cover bg-center bg-no-repeat"/>,
    path:'/profile'

  },
  {
    option:'Sign out',
    icon:''
  }

]

export default function NavBar(props) {

  return (
    <header aria-label="Site Header" className="body-font sticky top-0 z-40 w-full py-2 lg:px-8 px-4 bg-[white]">
      <div className="flex justify-between gap-2">
        <div className='flex justify-start gap-2'>
          <div className="lg:hidden block text-text_secondary" onClick={()=>props.setOpenMobileMenu(true)}>
            <HiMenuAlt1 size={25}/>
          </div>
          <div className="flex items-center w-24">
            <img src={WMLogo} className='w-full h-full object-cover'/>
          </div>
        </div>

        <div className="flex items-center w-6">
          <img src={AdventistLogo} className='w-full h-full object-cover'/>
        </div>
      </div>
      
    </header>

  )
}
