import React, {useState} from 'react';
import Navbar from '../comps/Navbar';
import AuthModal from '../comps/AuthModal';

const Home = ({ authToken }) => {
  const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

  return (
    <div className='overlay'>
        <Navbar authToken = {authToken}/>
        <div className='home'>
            <h1>Home Page</h1>
            <button className='primary-btn' onClick={handleClick}>
                {authToken ? 'Logout' : 'Create Account'}
            </button>

            {showModal && (
                <AuthModal setShowModal={setShowModal}/>
            )}

        </div>
    </div>
  )
}

export default Home
