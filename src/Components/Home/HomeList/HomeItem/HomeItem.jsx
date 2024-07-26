import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomeItem.css'


export const HomeItem = ({ title, thumbnail, id}) => {
    return (
        <div className='HomeItem'>
            <div className='HomeItem-info'>
                <img src={thumbnail}></img>
                <h3>{title}</h3>
            </div>
            <NavLink to ={`/workspace/${id}/1`}>
                <button className='HomeItem-btn'>
                    Ir al Workspace
                </button>
            </NavLink>
        </div>
    )
}

export default HomeItem