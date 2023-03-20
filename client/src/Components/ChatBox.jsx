import React from 'react';
import ChatInput from './ChatInput';
import Header from './Header';
import MessageBox from './MessageBox';

function ChatBox() {
    return (
        <div>
           <Header/> 
           <MessageBox/>
           <ChatInput/>
        </div>
    );
}

export default ChatBox;