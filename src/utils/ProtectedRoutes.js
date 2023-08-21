import React from 'react'
import { Navigate } from 'react-router-dom'

export function Protected({children,route }) {
  const token =sessionStorage.getItem('memberToken');

  console.log("token in protected",token);
  if (!token) {
    return <Navigate to={route} replace />
  }
  return children
}

export function ProtectedAdmin({children,route }) {
  const token =sessionStorage.getItem('userToken');

  console.log("token in protected",token);
  if (!token) {
    return <Navigate to={route} replace />
  }
  return children
}
