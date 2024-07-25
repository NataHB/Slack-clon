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
            <h2>Canales</h2>
            <ul>
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
                <button onClick={handleForm}>
                    Crear Canal
                </button>
                )}
                {showForm && (
                    <>
                        <CanalForm allCanals={allCanals} setAllCanals={setAllCanals} indexWorkspace={indexWorkspace} />
                        <button onClick={handleForm}>
                            Cancelar
                        </button>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default CanalList