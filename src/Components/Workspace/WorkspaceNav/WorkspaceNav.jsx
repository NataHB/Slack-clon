import React from 'react'
import { NavLink } from 'react-router-dom'
import './WorkspaceNav.css'

export const WorkspaceNav = ({handleDisplayCanals, valueCanalList, title}) => {
    return (
        <header className='WorkspaceNav'>
            <div>
                <h1>{title}</h1>
            </div>
            <div className='WorkspaceNav-btns'>
                <NavLink to={'/'}>
                    <button>Salir</button>
                </NavLink>
                <button className="toggle-canals-btn" onClick={handleDisplayCanals}>{valueCanalList}</button>
            </div>
        </header>
    )
}

export default WorkspaceNav