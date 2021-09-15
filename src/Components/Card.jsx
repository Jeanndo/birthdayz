import React from 'react'
import ListBirthDays from './List'

const Card = () => {
    return (
        
        <div className="card">
            <div className="app-name">Birthdayz</div>
            <br/>
            <label>4 birthdays today</label>
            <div className="list-container">
           <ListBirthDays/>
           <ListBirthDays/>
           <ListBirthDays/>
           <ListBirthDays/>
           <ListBirthDays/>
           <ListBirthDays/>
           <ListBirthDays/>
        </div>
        <button className="view-all-btn">View All</button>
        </div>
    )
}
export default Card