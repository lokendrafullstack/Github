import React from 'react';


var emp = ["charle", "nuton", "christoper"]

var person = [{
    id: 1,
    name: "sarath"
},

{
    id: 2,
    name: "react"
},
{
    id: 3,
    name: "angular"
}]


function arraylist() {

    return (
        <>
            {/* {
                emp.map((value, index) => <h1>{value}</h1>)
            } */}
            {
                person.map((value, index) => {
                    return (<ul key={index}>
                        <li>{index}-{value.id}</li>
                        <li>{index}-{value.name}</li>
                    </ul>)
                })
            }
        </>
    );
}

export default arraylist;
