import React, { useEffect, useRef } from 'react'

import logo_icon from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

import './Navbar.scss'
import { logout } from '../../firebase'

const Navbar = () => {

    const navRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-scroll')
            }else{
                navRef.current.classList.remove('nav-scroll')
            }
        })
    })


  return (
    <div ref={navRef} className='navbar navbar-expand justify-content-between'>
        <div className="navbar-left d-flex">
            <a href="#" className='navbar-brand'>
                <img src={logo_icon} alt="netflix-icon" className='logo'/>
            </a>
            <ul className='navbar-nav ms-2'>
                <li className='nav-item me-3'><a href="#" className='nav-link active'>Home</a></li>
                <li className='nav-item me-3'><a href="#" className='nav-link'>TV Shows</a></li>
                <li className='nav-item me-3'><a href="#" className='nav-link'>Movies</a></li>
                <li className='nav-item me-3'><a href="#" className='nav-link'>New & Popular</a></li>
                <li className='nav-item me-3'><a href="#" className='nav-link'>My List</a></li>
                <li className='nav-item me-3'><a href="#" className='nav-link'>Browse by Language</a></li>
            </ul>
        </div>
        <div className="navbar-right d-flex">
            <img src={search_icon} alt="search" className='nav-item me-4' />
            <img src={bell_icon} alt="bell-icon" className='nav-item me-4' />
            <img src={profile_img} alt="profile" className='nav-item me-1' />
        

            <div className="nav-item dropdown">
                {/* <img src={caret_icon} alt="caret" /> */}
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={caret_icon} alt="" />
                </a>
                <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                    <li className="dropdown-item"><p onClick={()=>{logout()}}>Sign Out</p></li>
                    <li className="dropdown-item"><p>Switch Account</p></li>
                </ul>
            </div>



        </div>
    </div>
  )
}

export default Navbar