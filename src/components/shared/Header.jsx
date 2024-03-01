import React from 'react'
import './style/header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  const body=document.querySelector('body');

  const hanleDark=()=>{
    body.classList.toggle('dark')
  
  }
  return (
    <header className='header_continer'>
      
         <h1><Link to='/'> Ecommerce</Link></h1>
        
        <ul className='nav-bar'>
       
         
          <li ><Link to='/login'><ion-icon name="people"></ion-icon></Link></li>
          <li><Link to='/purchases'><ion-icon name="archive"></ion-icon></Link></li>
          <li><Link to='cart'><ion-icon name="cart"></ion-icon></Link></li>
          <li onClick={hanleDark}><a><ion-icon name="contrast"></ion-icon></a></li>
          
          
        </ul>
      
    </header>
  )
}

export default Header
