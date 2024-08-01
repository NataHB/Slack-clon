import React from 'react'
import { HomeList, HomeButton } from '../../Components/index.js'
import { IoSunny, IoMoon } from "react-icons/io5";
import './HomeScreen.css'

export const HomeScreen = ({darkMode, toggleTheme}) => {
    return (
        <div className='HomeScreen'>
        <button className={ 'dark-mode-btn' } onClick={toggleTheme}>
            {darkMode 
            ? 
            <IoSunny  style={{width: '28px' , height: '28px', color: 'var(--color-contraste)'}}/> 
            : 
            <IoMoon style={{width: '25px' , height: '25px', color: 'var(--color-contraste)'}}/> 
            }
        </button>
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