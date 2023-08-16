import React from 'react'

const links = ["Home", "About", "Education", "Skills", "Contact"];

const NavBar = () => {
  return (
    <nav className='navbar'>
      {links.map((link) => {
        return <a href={`#${link}`}>{link}</a>
      })}
    </nav>
  )
}

export default NavBar
