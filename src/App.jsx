import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import WorkspaceScreen from './Screens/WorkspaceScreen/WorkspaceScreen.jsx'
import NewScreen from './Screens/NewScreen/NewScreen.jsx'

import './App.css'

function App() {
    const [darkMode, setDarkMode] = useState( localStorage.getItem('darkMode') === 'true' ? true : false )


    const toggleTheme = () => {
        setDarkMode(!darkMode)
    };

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
        if (darkMode) {
            document.body.classList.add('dark-theme')
        } else {
            document.body.classList.remove('dark-theme')
        }
    }, [darkMode])

    return (
        <>
            
            <Routes>
                <Route path='/' element={<HomeScreen darkMode={darkMode} toggleTheme={toggleTheme}/>} />
                <Route path='/workspace/:id' element={<WorkspaceScreen />} />
                <Route path='/workspace/new' element={<NewScreen  />}/>
                <Route path='/workspace/:id/:idCanal' element={<WorkspaceScreen />}/>
            </Routes>
        </>
    )
}

export default App
