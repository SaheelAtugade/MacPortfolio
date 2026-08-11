import React from 'react'
import MacWindow from './MacWindow'
import "./calender.scss"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const Calender = () => {

    const [value, onChange] = useState(new Date());
  return (
    <MacWindow dimensions={{ width: "25vw", height: "55vh", x: 30, y: 200 }} windowTitle="Calender" id="calender">
        <div className="calender-window">
            <Calendar  onChange={onChange} value={value} />
        </div>
    </MacWindow>
  )
}

export default Calender