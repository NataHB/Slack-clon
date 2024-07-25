import React from 'react'
import { Link } from 'react-router-dom'

export const HomeButton = () => {
    return (
        <div>
            <Link to ={'workspace/new'}>
                <button>New Workspace</button>
            </Link>
        </div>
    )
}

export default HomeButton