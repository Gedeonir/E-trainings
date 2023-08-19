import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected({ token, children,route }) {
  if (!token) {
    return <Navigate to={route} replace />
  }
  return children
}
export default Protected