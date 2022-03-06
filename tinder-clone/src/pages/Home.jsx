import React, {useState} from 'react';
import Navbar from '../comps/Navbar';
import AuthModal from '../comps/AuthModal';

const Home = ({ authToken }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }

  return (
    <div className='overlay'>
        <Navbar 
        authToken={authToken} 
        setShowModal={setShowModal} 
        showModal={showModal}
        setIsSignUp={setIsSignUp}
        />
        <div className='home'>
            <h1 className='primary-title'>Home Page</h1>
            <button className='primary-btn' onClick={handleClick}>
                {authToken ? 'Logout' : 'Create Account'}
            </button>

            {showModal && (
                <AuthModal setShowModal={setShowModal}
                setIsSignUp={setIsSignUp}
                isSignUp={isSignUp}
                />
            )}

        </div>
    </div>
  )
}

export default Home
