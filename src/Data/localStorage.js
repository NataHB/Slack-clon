import WORKSPACES from "./MOOK"

const setLS = () => {

    const value = localStorage.getItem('WORKSPACES')

    if(value === null){

        const WS_string = JSON.stringify(WORKSPACES)

        localStorage.setItem('WORKSPACES', WS_string)
    }
}

const traerLS = () => {

    const WS_string = localStorage.getItem('WORKSPACES')

    const WS_object = JSON.parse(WS_string)

    return WS_object
}

const addMessageLocalStorage = (indexWorkspace, indexCanal, message) => {
    const WORKSPACES = traerLS()

    WORKSPACES[indexWorkspace].canals[indexCanal].messages.push(message)

    localStorage.setItem('WORKSPACES', JSON.stringify(WORKSPACES))
}

const addCanalLocalStorage = (indexWorkspace, canal) => {
    const WORKSPACES = traerLS()

    WORKSPACES[indexWorkspace].canals.push(canal)

    localStorage.setItem('WORKSPACES', JSON.stringify(WORKSPACES))
}

const addWorkspaceLocalStorage = (workspace) => {
    const WORKSPACES = traerLS()

    WORKSPACES.push(workspace)

    localStorage.setItem('WORKSPACES', JSON.stringify(WORKSPACES))
}


export { setLS, traerLS, addMessageLocalStorage, addCanalLocalStorage, addWorkspaceLocalStorage }