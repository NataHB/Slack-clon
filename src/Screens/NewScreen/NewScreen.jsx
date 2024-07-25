import React from 'react'
import { NewForm } from '../../Components/New/NewForm/NewForm'
import { Link } from 'react-router-dom'

export const NewScreen = () => {
    return (
        <>
        <header>
            <Link to="/">Volver</Link>    
            <h1>Crea un nuevo Workspace</h1>
        </header>
        <main>
            <NewForm />
        </main>
        </>
    )
}

export default NewScreen