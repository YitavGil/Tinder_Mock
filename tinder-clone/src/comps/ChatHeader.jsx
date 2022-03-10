import React from 'react';
import { FaSignOutAlt } from "react-icons/fa";

const ChatHeader = () => {
  return (
    <div className='chat-container-header'>
        <div className='profile'>
            <div className='img-container'>
                <img src=''/>
            </div>
                <h3>User Name</h3>
        </div>
        <FaSignOutAlt/>
    </div>
  )
}

export default ChatHeader