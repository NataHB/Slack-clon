import React from 'react'
import { setLS, traerLS } from '../../../Data/localStorage'
import HomeItem from './HomeItem/HomeItem'
import HomeButton from '../HomeButton/HomeButton'

export const HomeList = () => {

    setLS()

    const WORKSPACES = traerLS()

    return (
        <>
                    {
                        WORKSPACES.map((workspace, index) => {
                            const { title, thumbnail, id } = workspace
                            return(
                                < HomeItem key={index} title={title} thumbnail={thumbnail} id={id} />
                            )
                        })
                    }
                    <HomeButton />
        </>
    )
}

export default HomeList