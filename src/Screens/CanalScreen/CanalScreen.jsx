import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ChatForm, ChatHeader, ChatList } from '../../Components'
import './CanalScreen.css'

export const CanalScreen = ({canals, indexWorkspace}) => {

    const {idCanal} = useParams()
    const [indexCanal, setIndexCanal] = useState('')
    const [allMessages, setAllMessages] = useState([])

    const canal = canals.find((canal) => {
        return canal.id_canal == Number(idCanal)
    })
    const {messages, title } = canal

    useEffect(() => {
        setAllMessages(messages)
        canals.map((canal, index) => {
            if(canal.id_canal == Number(idCanal)){
                setIndexCanal(index)
            }
        })
    }, [messages])


    return (
        <main className='CanalScreen'>
            <ChatHeader title={title} />
            <ChatList allMessages={allMessages} />
            <footer>
            <ChatForm indexWorkspace={indexWorkspace} indexCanal={indexCanal} allMessages={allMessages} setAllMessages={setAllMessages}/>
            </footer>
        </main>

    )
}

export default CanalScreen