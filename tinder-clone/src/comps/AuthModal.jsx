import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ setShowModal, isSignUp, setIsSignUp }) => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(null);

  let navigate = useNavigate()

  console.log('test', isSignUp);
  // const isSignUp = true
    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if(isSignUp && (password !== confirmPassword)) {
          setError('Passwords do not match!')
          return
        }

         const response = await axios.post('http://localhost:8000/signup', { email, password});

         const success = response.status === 201
         if(success) navigate('/onboard')

      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='auth-modal'>
        <div className='close-icon' onClick={handleClick}>X</div>
        <h2>{isSignUp ? 'CREATE ACCOUNT' : 'Log In'}</h2>
        <p>By entering the fight club you agree to our terms and conditions. Learn how we process your data in our Privacy Policy and Cookie Policy</p>
        <form onSubmit={handleSubmit}>
          <input
          type='email'
          id='email'
          name='email'
          placeholder='email'
          required={true}
          onChange={(e) => setEmail(e.target.value) }
          />
          <input
          type='password'
          id='password'
          name='password'
          placeholder='password'
          required={true}
          onChange={(e) => setPassword(e.target.value) }
          />
         {isSignUp && <input
          type='password'
          id='password-check'
          name='password-check'
          placeholder='confirm password'
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value) }
          />}
          <input className='secondary-btn' type='submit' />
          <p>{error}</p>

          </form>
          <hr/>
          <h2>Fight!</h2>
    </div>
  )
}

export default AuthModal