import React from 'react'

export default function Child({ email, uname, emp, id, names, my }) {

    //console.log(props)
    //Object Destructuring....
    //var { email, uname, emp, my } = props;
    return (
        <div className="container p-5 border my-5">
            <h2>CHILD Component</h2>

            {id}-{uname}-{email}-<br /><br />

            {emp.map((res, i) => <p>{res}</p>)}

            {my}-{names}

        </div>
    )
}