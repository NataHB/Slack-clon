import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiX } from "react-icons/hi";

import './WorkspaceNav.css'

export const WorkspaceNav = ({handleDisplayCanals, valueCanalList, title}) => {
    return (
        <header className='WorkspaceNav'>
            <h1>{title}</h1>
            <div className='WorkspaceNav-btns'>
                <button className="toggle-canals-btn" onClick={handleDisplayCanals}>{valueCanalList}</button>
                <NavLink to={'/'}>
                    <HiX style={{width: '20px' , height: '20px', color: 'var(--color-contraste)'}}/>
                </NavLink>
            </div>
        </header>
    )
}

export default WorkspaceNav