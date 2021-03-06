import React from 'react';
import ChatHeader from './ChatHeader';
import ChatDisplay from './ChatDisplay';
import MatchDisplay from './MatchDisplay';

const ChatContainer = () => {
  return (
    <div className='chat-container'>
        <ChatHeader />

        <div>
            <button className='option'>Matches</button>
            <button className='option'>Chat</button>
        </div>

        <MatchDisplay />

        <ChatDisplay />
    </div>
  )
}

export default ChatContainer