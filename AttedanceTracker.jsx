import { useState } from "react";

export const AttedanceTracker =() =>{
    const [students , setStsudent] =useState([
        {name:"John", isPresent: true},
        {name:"Jane", isPresent: false},
        {name:"Bob", isPresent: true},
        // {name:"Bob", isPresent: true},
    ])

    const totalStudent= students.length;
    const presentCount=students.filter(student => student.isPresent).length;
    const averageAttend = ((presentCount/totalStudent)*100);



    return(
        <div className="container">
            <h1>Attendance Tracker</h1>
            <ul>
                {students.map((student ,index)=>{
                    return(
                        <li key={index}>
                            {student.name} -{student.isPresent ? "Present" : "Absent"}
                        </li>
                    )
                })}
            </ul>
            <p> Total Students : {totalStudent}</p>
            <p>Number of Students Present: {presentCount}</p>
            <p>Percentage of Students Present :{averageAttend}</p>
        </div>
    )
}