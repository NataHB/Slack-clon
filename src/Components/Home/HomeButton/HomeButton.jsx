import React from 'react'
import { Link } from 'react-router-dom'
import './HomeButton.css'

export const HomeButton = () => {
    return (
        <div className='HomeButton'>
            <h3>Quieres crear un nuevo Workspace?</h3>
            <Link to ={'workspace/new'}>
                <button className='HomeButton-btn'>New Workspace</button>
            </Link>
        </div>
    )
}

export default HomeButton