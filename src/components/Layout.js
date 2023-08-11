import React, { Children } from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <div className='mt-4'>{children}</div>
    </div>
  )
}

export default Layout