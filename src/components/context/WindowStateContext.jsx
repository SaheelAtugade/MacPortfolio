import React, { Children, createContext, useContext, useState } from 'react'

export const stateContext =  createContext()

const WindowStateContext = ({children}) => {
    const [windowState, setWindowState] = useState({
    github: false,
    skills: false,
    resume: false,
    spotify: false,
    cli: false,
    calender: false,
    mail: false,
    link: false
  })
  return (
    <stateContext.Provider value={{windowState, setWindowState}}>
        {children}
    </stateContext.Provider>
  )
}

export default WindowStateContext
export const useWindowStateContext = () => useContext(stateContext)