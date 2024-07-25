import React from 'react'

export const ChatMessage = ({author, text, time, thumbnail}) => {
    return (
        <div>
                <img src={thumbnail} alt="thumbnail" />
                <p>{author}</p>
                <p>{text}</p>
                <p>{time}</p>
        </div>
    )
}

export default ChatMessage