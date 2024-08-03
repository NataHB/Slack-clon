import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { CanalForm } from '../CanalForm/CanalForm'
import { HiSearch, HiX } from "react-icons/hi";
import { useState } from 'react'
import './CanalList.css'

export const CanalList = ({ setSearch ,showCanals, canals, allCanals, setAllCanals, indexWorkspace }) => {

    const { id } = useParams()
    const [showForm, setShowForm] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const handleForm = () => {
        setShowForm(!showForm)
    }

    const handleSearch = () => {
        setShowSearch(!showSearch)
        if (showSearch) {
            setSearch('')
        }
    }

    return (
        <nav className={`CanalList ${showCanals ? 'show' : ''}`}>
            <ul className='CanalList-ul'>
                {!showSearch ? (
                    <div className='search-header'>
                        <h3>Canales</h3>
                        <button className='search-btn' onClick={handleSearch}>
                            <HiSearch style={{width: '18px' , height: '18px', color: 'var(--color-contraste)'}}/>
                        </button>
                    </div>
                )
                :(
                    <>
                        <div className='search-header' style={{justifyContent: 'space-between', padding: '3px 10px', backgroundColor: 'var(--color-terciario)', borderRadius: '25px'}}>
                            <button className='search-btn'>
                                <HiSearch style={{width: '18px' , height: '18px', color: 'var(--color-contraste)'}}/>
                            </button>
                            <input 
                                type="text" 
                                placeholder="Busca un canal" 
                                className='search-input'
                                onChange={(e) => setSearch(e.target.value.toLowerCase())}>
                            </input>
                            <button className='search-btn' onClick={handleSearch}>
                                <HiX style={{width: '18px' , height: '18px', color: 'var(--color-contraste)'}}/>
                            </button>
                        </div>
                        
                    </>
                )}
                {canals.length === 0 ? (
                    <li className='no-canals'>No existen canales</li>
                ) : (
                    canals.map((canal, index) => {
                        const { title, id_canal } = canal
                        return (
                            <NavLink key={index} to={`/workspace/${id}/${id_canal}`}>
                                <li> {'# '+ title} </li>
                            </NavLink>
                        )
                    })
                )
                }
                {!showForm ?(
                <button className ='CrearCanal-btn' onClick={handleForm}>
                    + Añadir canal
                </button>
                )
                :(
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