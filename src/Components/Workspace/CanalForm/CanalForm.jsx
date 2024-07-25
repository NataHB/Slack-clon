import React from 'react'
import { useState } from 'react'
import { addCanalLocalStorage } from '../../../Data/localStorage'

export const CanalForm = ({allCanals, setAllCanals, indexWorkspace}) => {

    const [canal, setCanal] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addCanal(canal)
        setCanal('')
    }

    const addCanal = (newCanal) => {
        const newCanalObject = {
                title: newCanal,
                messages: [
                    {
                        thumbnail: '',
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
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Canal" 
                value={canal} 
                onChange={(e) => setCanal(e.target.value)}
                />
                <button type="submit">Crear</button>
            </form>
    )
}

export default CanalForm