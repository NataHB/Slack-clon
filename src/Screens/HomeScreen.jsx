import React from 'react'
import { HomeList } from '../Components/index.js'

export const HomeScreen = () => {
    return (
        <>
        <header>
            <h1>Bienvenidos a Slack!</h1>
        </header>
        <main>
            Seleccionar
            <nav>
                <HomeList />
            </nav>
        </main>
            
            
        </>
    )
}

export default HomeScreen