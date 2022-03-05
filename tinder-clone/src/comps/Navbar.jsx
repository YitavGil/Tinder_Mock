import React from 'react'

const Navbar = ({ authToken }) => {
  return (
      <nav>
        <div className='logo-container'>
          <h1>Fight Club</h1>
          </div>
            
            {!authToken && <button className='nav-btn'>Log in</button>}
        
    </nav>
  )
}

export default Navbar