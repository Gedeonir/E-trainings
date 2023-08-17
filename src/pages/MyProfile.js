import React from 'react'
import { connect } from 'react-redux';

const MyProfile = (props) => {
  return (
    <div>MyProfile</div>
  )
}

const mapState=(data)=>({
    data:data
  })
  
  export default connect(mapState)( MyProfile)