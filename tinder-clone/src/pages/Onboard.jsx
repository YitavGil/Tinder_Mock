import React, {useState} from 'react';
import Navbar from '../comps/Navbar'

const Onboard = () => {

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  return (
    <>
      <Navbar
      setShowModal={() => {}}
      showModal={false}
      />
      <div className='onboarding'>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor='first_name'>First Name</label>
            <input 
              id='first_name'
              type='text'
              name='first_name'
              placeholder='First Name'
              required={true}
              value={''}
              onChange={handleChange}
            />

            <label htmlFor='dob_day'>Birthday</label>
            <input 
              id='first_name'
              type='text'
              name='first_name'
              placeholder='First Name'
              required={true}
              value={''}
              onChange={handleChange}
            />
          </section>

        </form>

      </div>
    </>
  )
}

export default Onboard