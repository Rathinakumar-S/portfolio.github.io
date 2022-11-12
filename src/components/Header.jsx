import React from 'react'
import {HashLink} from "react-router-hash-link"


const Header = () => {
  return (
    
    <nav>
      <h1>React JS  Developer</h1>
      <main>
        <HashLink to={"/#Home"}>Home</HashLink>
        <HashLink to={"/#About Me"}>About Me</HashLink>
        <HashLink to={"/#Projects"}> Skills/Projects</HashLink>
        <HashLink to={"/#Contact"}>Contact</HashLink>
      </main>

    </nav>
    
  )
}

export default Header
