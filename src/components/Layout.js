import React, { Children } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { memberFetchProfileAction } from '../redux/Actions/membersAction';
import { connect } from 'react-redux';



const Layout = (props) => {
  
  React.useEffect(() => { 
    props.memberFetchProfileAction();
  }, [])

  
  
  return (
    <div className='max-h-screen overflow-hidden'>
      <NavBar/>
      <div>{props.children}</div>
    </div>
  )
}


const mapState=(data)=>({
  data:data
})

export default connect(mapState,{
  memberFetchProfileAction
}) (Layout)