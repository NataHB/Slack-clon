import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'

export const ChatList = ({allMessages}) => {
    return (
        <div>
            {allMessages.map((message) => {
                const { author, text, time, thumbnail } = message
                return (
                    <ChatMessage key={message.id} author={author} text={text} time={time} thumbnail={thumbnail} />
                )
            })}
        </div>
    )
}

export default ChatList