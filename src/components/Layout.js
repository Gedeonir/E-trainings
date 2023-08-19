import React, { Children } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { memberFetchProfileAction } from '../redux/Actions/membersAction';
import { connect } from 'react-redux';

function getToken() {
  const tokenString = sessionStorage.getItem('memberToken');
  const userToken = JSON.parse(tokenString);
  return userToken
}


const Layout = (props) => {
  const token = getToken();
  const navigate=useNavigate()


  const parseToken=(jwtToken)=>{
    try {
      return JSON.parse(atob(jwtToken.split('.')[1]));
    } catch (error) {
      return null
    }
  }

  
  React.useEffect(() => { 
    props.memberFetchProfileAction();
  }, [])
  
  
  return (
    <div>
        <NavBar/>
        <div className='mt-4'>{props.children}</div>
    </div>
  )
}


const mapState=(data)=>({
  data:data
})

export default connect(mapState,{
  memberFetchProfileAction
}) (Layout)