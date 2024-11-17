import { useState } from "react";

export const DerivedState = () =>{
    const [users ,userState] = useState([
        {name:"Alice" ,age: 25},
        {name:"Bob" ,age: 35},
        {name:"Charlie" ,age: 85},
        {name:"Angles" ,age: 45},
    ]);

    console.log(users);
    const userCount =users.length;
    const averageAge = users.reduce((accum,curelm) => accum + curelm.age,0 )/ userCount  ;

    return(
        <>
        <div className="main-div mt-10">
            <h1>User List</h1>
            <ul>
                {
                    users.map((user, index) => {
                        return (
                            <li key={index}>
                                {user.name} - {user.age}
                            </li>
                        )
                        })
                }
            </ul>
            <p>Total User: {userCount}</p>
            <p>Average Age: {averageAge}</p>
        </div>
        </>
    )
}