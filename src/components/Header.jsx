import React from 'react'
import './header.css'
import image from '../assets/logo.png'
import { Link } from 'react-router-dom';
 

function Header() {
    console.log(process.env.PUBLIC_URL);
  return (
    <header  className='flex justify-content-between align-items-center px-5'>
      {/* <span>Code Cafe</span> */}
      <img height={60} src={image} alt="" />
      <ul className='h-full flex gap-5 align-items-center justify-content-center'>
        <Link style={{textDecoration:'none',color:"white",fontWeight:"bold"}} to='/'>
        <li className='pt-3'>Home</li>

        </Link>
        <Link style={{textDecoration:'none',color:"white",fontWeight:"bold"}} to='/checkout'>
        <li className='pt-3'>Checkout</li>

        </Link>
      </ul>
    </header>
  )
}

export default Header
