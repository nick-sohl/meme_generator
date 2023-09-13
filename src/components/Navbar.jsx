import React from 'react'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className="nav-logo">
            <img src="./images/troll_face.svg" alt="troll-face" />
            <h1>Meme Generator</h1>
        </div>
        <p className='project'>React Course - Project 3</p>
    </nav>
  )
}

export default Navbar