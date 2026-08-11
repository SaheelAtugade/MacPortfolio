import React from 'react'
import "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useWindowStateContext } from './context/WindowStateContext'

const Dock = () => {
  const {setWindowState} = useWindowStateContext();
  
  return (
    <footer className='dock'>
        <div
        onClick={()=>{setWindowState(prev => ({...prev, github: "minimize"}))}}
        className="icon github"><img src="/dock-icons/github.svg"/></div>
        <div
        onClick={()=>{setWindowState(prev=>({...prev, skills: "minimize"}))}}
        className="icon note"><img src="/dock-icons/note.svg"/></div>
        <div
        onClick={()=>{setWindowState(prev => ({...prev, resume: "minimize"}))}}
        className="icon pdf"><img src="/dock-icons/pdf.svg"/></div>
        <div
        onClick={()=>{setWindowState(prev => ({...prev, calender: "minimize"}))}}
        className="icon calender"><img src="/dock-icons/calender.svg"/></div>
        <div
        onClick={()=>{setWindowState(prev => ({...prev, spotify: "minimize"}))}}
        className="icon spotify"><img src="/dock-icons/spotify.svg"/></div>
        <div
        onClick={()=>{setWindowState(prev => ({...prev, mail: "minimize"}))}}
        className="icon mail"><img src="/dock-icons/mail.svg"/></div>
        <div
        onClick={() => window.open("https://www.linkedin.com/in/sahil-atugade/", "_blank")}
        className="icon link"><img src="/dock-icons/link.svg"/></div>
        <div
        onClick={()=>{setWindowState(prev => ({...prev, cli: "minimize"}))}}
        className="icon cli"><img src="/dock-icons/cli.svg"/></div>
    </footer>
  )
}

export default Dock