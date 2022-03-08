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

            <label>Birthday</label>
            <div className='multiple-input-container'>
              <input 
                id='dob_day'
                type='number'
                name='dob_day'
                placeholder='DD'
                required={true}
                value={''}
                onChange={handleChange}
              />
              <input 
                id='dob_month'
                type='number'
                name='dob_month'
                placeholder='MM'
                required={true}
                value={''}
                onChange={handleChange}
              />
              <input 
                id='dob_year'
                type='number'
                name='dob_year'
                placeholder='YYYY'
                required={true}
                value={''}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
              <div className='multiple-input-container'>
              <input 
                id='man-gender-identity'
                type='radio'
                name='gender_identity'
                value='man'
                onChange={handleChange}
                checked={false}
              />
               <label htmlFor='man-gender-identity'>Man</label>
              <input 
                id='woman-gender-identity'
                type='radio'
                name='gender_identity'
                value='woman'
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor='woman-gender-identity'>Woman</label>
              <input 
                id='more-gender-identity'
                type='radio'
                name='gender_identity'
                value='more'
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor='more-gender-identity'>More</label>
            </div>


            <label htmlFor='show-gender'>Show gender on my profile</label>
            <input 
                id='show-gender'
                type='checkbox'
                name='show_gender'  
                onChange={handleChange}
                checked={false}
              />

            <label>Show me</label>
            <div className='multiple-input-container'>
              <input 
                  id='man-gender-interest'
                  type='checkbox'
                  name='gender_interest'
                  value='man'  
                  onChange={handleChange}
                  checked={false}
                />
                <label htmlFor='man-gender-interest'>Man</label>
              <input 
                  id='woman-gender-interest'
                  type='checkbox'
                  name='gender_interest' 
                  value='woman' 
                  onChange={handleChange}
                  checked={false}
                />
                 <label htmlFor='woman-gender-interest'>Woman</label>
              <input 
                  id='everyone-gender-interest'
                  type='checkbox'
                  name='gender_interest' 
                  value='everyone' 
                  onChange={handleChange}
                  checked={false}
                />
                <label htmlFor='more-gender-interest'>Everyone</label>
               </div>

               <label htmlFor='about'>About me</label>
                <input 
                  id='about'
                  type='text'
                  name='about'
                  required={true}
                  placeholder='Always ready for a good fight'
                  value={""}
                  onChange={handleChange}
                />
                <input type='submit' />
          </section>

          <section>
          <label htmlFor='url'>Profile</label>
            <div className='photo-container'>
              <input 
                type='url'
                name='url'
                id='url'
                onChange={handleChange}
                required={true}
              />
              
            </div>
          </section>

        </form>
      </div>
    </>
  )
}

export default Onboard