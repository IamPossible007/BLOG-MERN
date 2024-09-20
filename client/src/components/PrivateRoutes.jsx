import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
  const currentUser = useSelector (state => state.currentUser)
  return currentUser ? <Outlet /> : <Navigate to="/sign-in" />
}
