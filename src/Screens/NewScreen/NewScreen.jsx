import React from 'react'
import { NewForm } from '../../Components/New/NewForm/NewForm'
import { Link } from 'react-router-dom'
import './NewScreen.css'

export const NewScreen = () => {
    return (
        <>
        <header className='NewScreen-header'>
            <Link to="/">Volver</Link>    
        </header>
        <main className='NewScreen-main'>
            <h1>Crea un nuevo Workspace</h1>
            <p>Completa los siguientes campos para crear un nuevo Workspace con un canal. Debe tener como maximo 9 caracteres.</p>
            <NewForm />
        </main>
        </>
    )
}

export default NewScreen