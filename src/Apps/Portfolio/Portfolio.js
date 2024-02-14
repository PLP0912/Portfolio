import React from 'react'
import "./Portfolio.css"
import MyResume from "./assets/Resume.pdf"
import MyProfilePic from "./assets/profile_pic.jpg"
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='container'>
    <img className='my-profile-pic' src={MyProfilePic} alt='Profile Pic'/>
  <div className='logo_holder'>
    <div className='logo_holder__rotate'>
      <svg className='logo_holder__right' enable-background='new 0 0 94.852 96.499' height='96.499px' id='Layer_1' space='preserve' version='1.1' viewBox='0 0 94.852 96.499' width='94.852px' x='0px' y='0px'>
        <polygon fill='#FFFFFF' points='48.689,0 0,91.806 8.844,96.499 52.842,13.537 81.316,28.635 62.492,63.968 73.908,63.968   94.852,24.482 '></polygon>
      </svg>
      <svg className='logo_holder__left' enable-background='new 0 0 94.852 96.499' height='96.499px' id='Layer_1' space='preserve' version='1.1' viewBox='0 0 94.852 96.499' width='94.852px' x='0px' y='0px'>
        <polygon fill='#FFFFFF' points='48.689,0 0,91.806 8.844,96.499 52.842,13.537 81.316,28.635 62.492,63.968 73.908,63.968   94.852,24.482 '></polygon>
      </svg>
    </div>
    <svg className='logo_holder__text' enable-background='new 0 0 331 129.667' height='129.667px' id='Layer_1' space='preserve' version='1.1' viewBox='0 0 331 129.667' width='370px' x='0px' y='0px'>
      <text className='my-name' x={12} y={60} fill='white'>Prasanth</text>
      <text className='my-name' x={12} y={125} fill='white'>PLP</text>
    </svg>
    <h2>(UX/UI) Junior Product Designer<br/><br/>( FIGMA - Frame Illustort G Micro Animations )</h2>
    <nav>
      <Link target="_blank" to={MyResume}>Resume</Link>
       <Link target="_blank" to={'https://medium.com/@plprasanth1999'}>Medium</Link>
      <Link target="_blank" to={'https://www.behance.net/prasanthp12'}>Behance</Link>
      <Link target="_blank" to={'https://www.linkedin.com/in/prasanth-p-435b05242/'}>LinkedIn</Link>
      <Link target="_blank" to={'https://8248774342'}>Contact Me</Link>
      <Link target="_blank" to={'https://medium.com/@plprasanth1999'}>Upcoming Projects</Link>
    </nav>
  </div>
</div>

  )
}

export default Portfolio
