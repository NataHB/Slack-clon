import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'
import WorkspaceScreen from './Screens/WorkspaceScreen/WorkspaceScreen.jsx'
import NewScreen from './Screens/NewScreen/NewScreen.jsx'

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/workspace/:id' element={<WorkspaceScreen />} />
            <Route path='/workspace/new' element={<NewScreen />}/>
            <Route path='/workspace/:id/:idCanal' element={<WorkspaceScreen />}/>
        </Routes>
    )
}

export default App
