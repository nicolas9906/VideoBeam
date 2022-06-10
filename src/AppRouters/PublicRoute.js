import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'




export const PublicRoute = ({children,uid}) => {

 
 
  return uid
  ? <Navigate to="/SelectVid"/>
  : children
};