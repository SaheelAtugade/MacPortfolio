import React from 'react'
import './nav.scss'
import DateTime from './DateTime'

const Nav = ({ windowState }) => {

   const isAnyWindowOpen = Object.values(windowState).some(value => value === "maximize");

  return (
    <nav style={isAnyWindowOpen?{zIndex: 0}:{zIndex: 20}}>
        <div className="left">
            <div className="nav-icon">
                <img src="/navbar_icon/apple.svg" alt="" />
            </div>
            
            <div className="nav-item">
                <p>Saheel Atugade</p>
            </div>
            <div className="nav-item">
                <p>file</p>
            </div>
            <div className="nav-item">
                <p>window</p>
            </div>
            <div className="nav-item">
                <p>terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="/navbar_icon/wifi.svg" alt="" />
            </div>
            <div className="nav-item">
                <DateTime/>
            </div>
        </div>
    </nav>
  )
}

export default Nav