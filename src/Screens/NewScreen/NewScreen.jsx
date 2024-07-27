import React from 'react'
import { NewForm } from '../../Components/New/NewForm/NewForm'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import './NewScreen.css'

export const NewScreen = () => {
    return (
        <>
        <header className='NewScreen-header'>
            <Link to="/"><HiOutlineArrowSmLeft style={{width: '25px' , height: '25px', color: 'var(--color-contraste)'}}/></Link>    
        </header>
        <main className='NewScreen-main'>
            <h1>Crea un nuevo Workspace</h1>
            <p>Completa los siguientes campos para crear un nuevo Workspace con un canal. Debe tener como maximo 12 caracteres.</p>
            <NewForm />
        </main>
        </>
    )
}

export default NewScreen