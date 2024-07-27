import React from 'react'
import './ChatHeader.css'

export const ChatHeader = ({ title }) => {
    return (
        <header className='ChatHeader'>
            <h2>{'# '+ title}</h2>
        </header>
    )
}

export default ChatHeader