import React from 'react'
import { traerLS, addWorkspaceLocalStorage } from '../../../Data/localStorage'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const NewForm = () => {

    const workspaces = traerLS()


    const [allWorkspaces, setAllWorkspaces] = useState(workspaces)
    const [newWorkspace, setNewWorkspace] = useState([])
    const [newCanal, setNewCanal] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (newWorkspace == '' || newCanal == '') {
            return alert('Por favor rellene todos los campos')
        }
        if (allWorkspaces.find((workspace) => workspace.title == newWorkspace)) {
            return alert('Ya existe un Workspace con ese nombre')
        }
        if (allWorkspaces.find((workspace) => workspace.canals.find((canal) => canal.title == newCanal))) {
            return alert('Ya existe un Canal con ese nombre')
        }
        if (newWorkspace.length > 9 || newCanal.length > 9) {
            return alert('El Workspace o Canal no puede tener mas de 9 caracteres')
            
        }
        addWorkspace(newWorkspace, newCanal)
        setNewWorkspace('')
        setNewCanal('')
    }

    const addWorkspace = (newWS, newCL ) => {
        const newWorkspaceObject = {
            title: newWS,
            thumbnail: '',
            canals: [
                {
                    title: newCL,
                    messages: [
                        {
                            thumbnail: '',
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
            <form onSubmit={handleSubmit}>
                <label>
                    Workspace:
                </label>
                <input 
                    type="text" 
                    placeholder="Workspace" 
                    value={newWorkspace} 
                    onChange={(e) => setNewWorkspace(e.target.value)}
                    />

                <label>
                    Canal:
                </label>
                <input 
                    type="text" 
                    placeholder="Canal" 
                    value={newCanal} 
                    onChange={(e) => setNewCanal(e.target.value)}
                    />
                <button type="submit">Crear</button>
                <Link to={'/'}>
                <button>Cancelar</button>
                </Link>
            </form>
            
        </>       
    )
}

export default NewForm