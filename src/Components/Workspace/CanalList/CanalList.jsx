import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CanalForm } from '../CanalForm/CanalForm'
import { useState } from 'react'
import './CanalList.css'

export const CanalList = ({ showCanals, canals, allCanals, setAllCanals, indexWorkspace }) => {

    const { id } = useParams()
    const [showForm, setShowForm] = useState(false);

    const handleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <nav className={`CanalList ${showCanals ? 'show' : ''}`}>
            <ul className='CanalList-ul'>
                <h3>Canales</h3>
                {
                    canals.map((canal, index) => {
                        const { title, id_canal } = canal
                        return (
                            <NavLink key={index} to={`/workspace/${id}/${id_canal}`}>
                                <li>{title}</li>
                            </NavLink>
                        )
                    })
                }
                {!showForm && (
                <button className ='CrearCanal-btn' onClick={handleForm}>
                    + Añadir canal
                </button>
                )}
                {showForm && (
                    <>
                        <CanalForm allCanals={allCanals} setAllCanals={setAllCanals} indexWorkspace={indexWorkspace} />
                        <button className='CancelarCanal-btn' onClick={handleForm}>Cancelar</button>
                    </>
                )}
                
    
            </ul>
        </nav>
    )
}

export default CanalList