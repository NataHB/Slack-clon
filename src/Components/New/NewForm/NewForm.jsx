import React from 'react'
import { traerLS, addWorkspaceLocalStorage } from '../../../Data/localStorage'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NewForm.css'

export const NewForm = () => {

    const workspaces = traerLS()


    const [allWorkspaces, setAllWorkspaces] = useState(workspaces)
    const [newWorkspace, setNewWorkspace] = useState([])
    const [newCanal, setNewCanal] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMessage('')
        if (newWorkspace == '' || newCanal == '') {
            setErrorMessage('Debes rellenar ambos campos')
            return
        }
        if (allWorkspaces.find((workspace) => workspace.title == newWorkspace)) {
            setErrorMessage('El Workspace ya existe')
            return 
        }
        if (allWorkspaces.find((workspace) => workspace.canals.find((canal) => canal.title == newCanal))) {
            setErrorMessage('El Canal ya existe')
            return
        }
        if (newWorkspace.length > 12 || newCanal.length > 12) {
            setErrorMessage('Los campos no pueden superar los 12 caracteres')
            return 
        }
        addWorkspace(newWorkspace, newCanal)
        setNewWorkspace('')
        setNewCanal('')
    }

    const addWorkspace = (newWS, newCL ) => {
        const newWorkspaceObject = {
            title: newWS,
            thumbnail: '/thumnail_slack_verde.png',
            canals: [
                {
                    title: newCL,
                    messages: [
                        {
                            thumbnail: '/slackbot.png',
                            author: 'Slack Bot',
                            text: 'Bienvenidos a Slack!',
                            time: '19:57',
                            id: 1
                        }
                    ],
                    id_canal: 1
                }
            ], 
            id: allWorkspaces.length + 1
        }
        
        setAllWorkspaces([...allWorkspaces, newWorkspaceObject])
        addWorkspaceLocalStorage(newWorkspaceObject)
    }
    
    

    return (
        <>
            <form className='NewForm' onSubmit={handleSubmit}>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                <input 
                    type="text" 
                    placeholder="Workspace" 
                    value={newWorkspace} 
                    onChange={(e) => setNewWorkspace(e.target.value)}
                    />

                <input 
                    type="text" 
                    placeholder="Canal" 
                    value={newCanal} 
                    onChange={(e) => setNewCanal(e.target.value)}
                    />

                <div className='form-btns'>
                <button type="submit">Crear</button>
                <Link to={'/'}>
                <button>Cancelar</button>
                </Link>
                </div>
            </form>
            
        </>       
    )
}

export default NewForm