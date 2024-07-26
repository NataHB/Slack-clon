import React from 'react'
import './ChatMessage.css'

export const ChatMessage = ({author, text, time, thumbnail}) => {
    return (
        <div className='ChatMessage'>
            <img src={thumbnail} alt="thumbnail" />
            <div>
                <div className='ChatMessage-info'>
                    <h3>{author}</h3>
                    <p className='time'>{time}</p>
                </div>
                <p className='text'>{text}</p>
            </div>
        </div>
    )
}

export default ChatMessage