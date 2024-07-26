import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { traerLS } from '../../Data/localStorage.js'
import { useEffect, useState } from 'react'
import { WorkspaceNav } from '../../Components/index.js'
import { CanalScreen } from '../CanalScreen/CanalScreen.jsx'
import { CanalList } from '../../Components/index.js'
import './WorkspaceScreen.css'


export const WorkspaceScreen = () => {
    const [showCanals, setShowCanals] = useState(false)
    const [indexWorkspace, setIndexWorkspace] = useState('')
    const [allCanals, setAllCanals] = useState([])

    const { id } = useParams() 

    const WORKSPACES = traerLS()
    const workspace = WORKSPACES.find((workspace) => {
        return (workspace.id == id)
    })
    const { title, canals } = workspace

    const handleDisplayCanals = () => {
        setShowCanals(!showCanals)
    }

    useEffect(() => {
        WORKSPACES.map((workspace,index) => {
            if(workspace.id == id){
                setIndexWorkspace(index)
            }
        })
    }, []
    )

    useEffect(() => {
        setAllCanals(canals)
    }, [])


    return (
        <>
        <WorkspaceNav 
            handleDisplayCanals={handleDisplayCanals} 
            title={title} 
            valueCanalList={showCanals ? 'Cerrar' : 'Canales'}
        />
        <CanalList 
            title={title} 
            canals={canals}  
            showCanals={showCanals}
            allCanals={allCanals} 
            setAllCanals={setAllCanals} 
            indexWorkspace={indexWorkspace}
        />
        <CanalScreen 
            indexWorkspace={indexWorkspace} 
            canals={canals} 
        />
        </>
    
    )
}

export default WorkspaceScreen;
