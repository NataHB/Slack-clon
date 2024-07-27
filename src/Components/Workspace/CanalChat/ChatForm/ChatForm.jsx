import React, { useState } from 'react';
import { addMessageLocalStorage } from '../../../../Data/localStorage';
import { HiOutlinePaperAirplane } from "react-icons/hi";
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
            thumbnail: '/yo.jpg',
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
            <button type="submit"><HiOutlinePaperAirplane style={{width: '17px' , height: '17px', color: 'var(--color-blanco)'}} /></button>
        </form>
    )
}

export default ChatForm;