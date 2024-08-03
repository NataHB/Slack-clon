import React from 'react'
import { useParams } from 'react-router-dom'
import { traerLS } from '../../Data/localStorage.js'
import { useEffect, useState } from 'react'
import { WorkspaceNav, CanalList } from '../../Components/index.js'
import { CanalScreen } from '../CanalScreen/CanalScreen.jsx'
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import './WorkspaceScreen.css'


export const WorkspaceScreen = () => {
    const [showCanals, setShowCanals] = useState(false)
    const [indexWorkspace, setIndexWorkspace] = useState('')
    const [allCanals, setAllCanals] = useState([])
    const [canalFiltered, setCanalFiltered] = useState([])
    const [search, setSearch] = useState('')

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
                setAllCanals(allCanals)
                setCanalFiltered(allCanals)
            }
        })
    }, []
    )

    useEffect(() => {
        if (!search.trim()) {
            setCanalFiltered(canals);
        } else {
            setCanalFiltered(canals.filter((canal) =>
                canal.title.toLowerCase().includes(search.toLowerCase())
            ));
        }
    }, [search])


    return (
        <>
        <WorkspaceNav 
            handleDisplayCanals={handleDisplayCanals} 
            title={title} 
            valueCanalList={showCanals 
            ? 
            <HiOutlineChevronUp style={{width: '24px' , height: '24px', color: 'var(--color-contraste)'}}/> 
            : 
            <HiOutlineChevronDown style={{width: '24px' , height: '24px', color: 'var(--color-contraste)'}}/>}
        />
        <CanalList 
            title={title} 
            canals={canalFiltered}  
            showCanals={showCanals}
            search={search}
            setSearch={setSearch}
            allCanals={canalFiltered}
            setAllCanals={setCanalFiltered} 
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
