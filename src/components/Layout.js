import React, { Children } from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div className='w-full overflow-x-hidden'>
        <NavBar/>
        <div>{children}</div>
    </div>
  )
}

export default Layout