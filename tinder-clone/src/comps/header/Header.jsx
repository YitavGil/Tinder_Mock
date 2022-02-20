import React from 'react';
import './header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <AccountCircleIcon fontSize='large' className='header-icon' />
        </IconButton>

        <img
        className='header-logo'
        src='https://i.fbcd.co/products/resized/resized-750-500/handstrong-42332287049ccebc1ec304294e138296424a888734a2c1301698867d73374a27.jpg'
        alt='logo'
         />
        <IconButton>
            <ChatIcon fontSize='large' className='header-icon' />
        </IconButton>


    </div>
  )
}

export default Header