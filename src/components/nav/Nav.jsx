import React from 'react'
import { useState } from 'react'

import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook,BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = ({theme}) => {
  const [activeNav, setActiveNav] = useState('#')
  const [activeLink, setActiveLink] = useState('1')
  

  return (
    <div className={`${theme} navigation`}>
      <ul>
        <li onClick={() => (setActiveLink('1'))} className={`list ${activeLink === '1' ? 'active': ''}`}>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
            <span className='icon'><AiOutlineHome /></span>
            <span className='text'>Home</span>
          </a>
        </li>
        <li onClick={() => (setActiveLink('2'))} className={`list ${activeLink === '2' ? 'active': ''}`}>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
            <span className='icon'><AiOutlineUser /></span>
            <span className='text'>About</span>
          </a>
        </li>
        <li onClick={() => (setActiveLink('3'))} className={`list ${activeLink === '3' ? 'active': ''}`}>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
            <span className='icon'><BiBook /></span>
            <span className='text'>Experience</span>
          </a>
        </li>
        <li onClick={() => (setActiveLink('4'))} className={`list ${activeLink === '4' ? 'active': ''}`}>
        <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
            <span className='icon'><RiServiceLine /></span>
            <span className='text'>Portfolio</span>
          </a>
        </li>
        <li onClick={() => (setActiveLink('5'))} className={`list ${activeLink === '5' ? 'active': ''}`}>
        <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
            <span className='icon'><BiMessageSquareDetail /></span>
            <span className='text'>Contact</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>







    // <nav>
    //   <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
    //   <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
    //   <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
    //   <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
    //   <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    // </nav>
  )
}

export default Nav
