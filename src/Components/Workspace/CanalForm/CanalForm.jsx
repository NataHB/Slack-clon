import React from 'react'
import { useState } from 'react'
import { HiOutlinePlusSm } from "react-icons/hi";
import { addCanalLocalStorage } from '../../../Data/localStorage'
import './CanalForm.css'

export const CanalForm = ({allCanals, setAllCanals, indexWorkspace}) => {

    const [canal, setCanal] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMessage('')
        if ( canal == '' ) {
            setErrorMessage('Debes rellenar el campo')
            return
        }
        if ( canal.length > 12 ) {
            setErrorMessage('El campo no pueden superar los 12 caracteres')
            return 
        }
        if ( allCanals.find((canals) => canals.title.toLowerCase() == canal.toLowerCase())) {
            setErrorMessage('El Canal ya existe')
            return
        }
        addCanal(canal)
        setCanal('')
    }

    const addCanal = (newCanal) => {
        const newCanalObject = {
                title: newCanal,
                messages: [
                    {
                        thumbnail: '/slackbot.png',
                        author: 'Slack Bot',
                        text: 'Bienvenidos a Slack!',
                        time: '19:57',
                        id: 1
                    }
                ],
                id_canal: allCanals.length + 1
            }

        setAllCanals([...allCanals, newCanalObject])
        addCanalLocalStorage(indexWorkspace, newCanalObject)
    }


    return (
        <>
            <form className="CanalForm" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Canal" 
                value={canal} 
                onChange={(e) => setCanal(e.target.value)}
                />
                <button type="submit"><HiOutlinePlusSm style={{width: '20px' , height: '20px', color: 'var(--color-contraste)'}} /></button>
            </form>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </>
    )
}

export default CanalForm