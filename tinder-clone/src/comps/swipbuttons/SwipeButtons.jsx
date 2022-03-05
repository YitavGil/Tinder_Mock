import React from 'react';
import './swipeButtons.css';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import { IconButton } from '@mui/material';

const SwipeButtons = () => {
  return (
    <div className='swipe-btns'>
        <IconButton className='swipe-btn left'>
            <CloseIcon fontSize='large'/>
        </IconButton>
        
        <IconButton className='swipe-btn repeat'>
            <ReplayIcon fontSize='large'/>
        </IconButton>
        
        <IconButton className='swipe-btn right'>
            <SportsMmaIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default SwipeButtons