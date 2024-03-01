import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const Privacidad = () => {
 if(localStorage.getItem('token')){
    return <Outlet/>
    
 }else{
    return <Navigate to='/login'/>
 }
}

export default Privacidad
