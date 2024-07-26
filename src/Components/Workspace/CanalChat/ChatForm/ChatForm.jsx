import React, { useState } from 'react';
import { addMessageLocalStorage } from '../../../../Data/localStorage';
import './ChatForm.css'

export const ChatForm = ({ indexWorkspace, indexCanal, allMessages, setAllMessages }) => {
    
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (message === '') {
            return
        }
        addMessage(message)
        setMessage('')
    }

    const addMessage = (newMessage) => {
        const newMessageObject = {
            thumbnail: '',
            author: 'Naty',
            text: newMessage,
            time: '19:57',
            id: allMessages.length + 1
        }
        
        setAllMessages([...allMessages, newMessageObject])
        addMessageLocalStorage(indexWorkspace, indexCanal, newMessageObject)
    }

    return (
        <form className="ChatForm" onSubmit={handleSubmit}> 
            <input 
                type="text" 
                placeholder="Escribe tu mensaje" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">En</button>
        </form>
    )
}

export default ChatForm;