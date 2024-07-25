import React from 'react'
import { NavLink } from 'react-router-dom'


export const HomeItem = ({ title, thumbnail, id}) => {
    return (
        <div>
            <div>
                <img src={thumbnail}></img>
                <h3>{title}</h3>
            </div>
            <NavLink to ={`/workspace/${id}/1`}>
                <button>
                    Ir al Workspace
                </button>
            </NavLink>
        </div>
    )
}

export default HomeItem