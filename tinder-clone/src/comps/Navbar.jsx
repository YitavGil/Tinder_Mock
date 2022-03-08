import React from 'react';
import {FaFistRaised} from 'react-icons/fa'

const Navbar = ({ setShowModal, showModal, setIsSignUp}) => {

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false)
  }

    const authToken = true;
  return (
      <nav>
        <div className='logo-container'>
          <h1><FaFistRaised />Fight Club</h1>
          </div>
            
            {authToken && <button 
            className='nav-btn'
            onClick={handleClick}
            disabled={showModal}
            >Log in</button>}
        
    </nav>
  )
}

export default Navbar