import React from 'react'

const Navbar = ({ authToken, setShowModal, showModal, setIsSignUp}) => {

  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false)
  }

  return (
      <nav>
        <div className='logo-container'>
          <h1>Fight Club</h1>
          </div>
            
            {!authToken && <button 
            className='nav-btn'
            onClick={handleClick}
            disabled={showModal}
            >Log in</button>}
        
    </nav>
  )
}

export default Navbar