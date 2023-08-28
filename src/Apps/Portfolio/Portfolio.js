import React from 'react'
import "./Portfolio.css"
import MyResume from "./assets/OshinResume.pdf"
import MyProfilePic from "./assets/profile_pic.jpg"
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='container'>
    <img className='my-profile-pic' src={MyProfilePic} alt='Oshins Profile Pic'/>
  <div className='logo_holder'>
    <div className='logo_holder__rotate'>
      <svg className='logo_holder__right' enable-background='new 0 0 94.852 96.499' height='96.499px' id='Layer_1' space='preserve' version='1.1' viewBox='0 0 94.852 96.499' width='94.852px' x='0px' y='0px'>
        <polygon fill='#FFFFFF' points='48.689,0 0,91.806 8.844,96.499 52.842,13.537 81.316,28.635 62.492,63.968 73.908,63.968   94.852,24.482 '></polygon>
      </svg>
      <svg className='logo_holder__left' enable-background='new 0 0 94.852 96.499' height='96.499px' id='Layer_1' space='preserve' version='1.1' viewBox='0 0 94.852 96.499' width='94.852px' x='0px' y='0px'>
        <polygon fill='#FFFFFF' points='48.689,0 0,91.806 8.844,96.499 52.842,13.537 81.316,28.635 62.492,63.968 73.908,63.968   94.852,24.482 '></polygon>
      </svg>
    </div>
    <svg className='logo_holder__text' enable-background='new 0 0 331 129.667' height='129.667px' id='Layer_1' space='preserve' version='1.1' viewBox='0 0 331 129.667' width='331px' x='0px' y='0px'>
      <text className='my-name' x={12} y={60} fill='white'>OSHIN</text>
      <text className='my-name' x={12} y={125} fill='white'>POJTA.</text>
    </svg>
    <h2>FullStack Software Developer <br/><br/>( MERN - Mongo Express React NodeJS )</h2>
    <nav>
      <Link target="_blank" to={MyResume}>Resume</Link>
      <Link target="_blank" to={"https://the-daily-planet.netlify.app"}>News App</Link>
      <Link target="_blank" to={'https://github.com/oshinpojta'}>Github</Link>
      <Link target="_blank" to={'https://www.linkedin.com/in/oshin-pojta/'}>LinkedIn</Link>
      <Link target="_blank" to={"https://movie-toaster.netlify.app"}>Movie Toaster</Link>
      <Link to={"/"}>Chat App (Coming Soon)</Link>
      {/* <Link target="_blank" to={"/"}>Chat App (Coming Soon)</Link>
      <Link target="_blank" to={"/"}>Chat App (Coming Soon)</Link> */}
    </nav>
  </div>
</div>

  )
}

export default Portfolio
