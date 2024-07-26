import React from 'react'
import { HomeList } from '../../Components/index.js'
import { HomeButton } from '../../Components/index.js'
import './HomeScreen.css'

export const HomeScreen = () => {
    return (
        <div className='HomeScreen'>
        <header className='HomeScreen-header'>
            <h1>Bienvenidos a Slack!</h1>
        </header>
        <main className='HomeScreen-main'>
            <section className='HomeList-section'>
            <h2>Workspaces</h2>
            <nav className='HomeList'>
                <HomeList />
            </nav>
            </section>
            
            <section className='HomeButton-section'>
                <HomeButton />
            </section>
        </main>
        </div>
    )
}

export default HomeScreen