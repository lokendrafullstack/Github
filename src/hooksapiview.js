import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'



export default (props) => {

    var [userData, setStateUserData] = useState({
        id: '',
        name: '',
        email: '',
        phno: ''
    });

    //get paramter value
    let { idno } = useParams();

    //destructuring for object
    let { id, name, email, phno } = userData

    //RESTAPI_CALLS
    useEffect(() => {

        const url = `http://localhost:3001/services/${idno}`
        axios.get(url).then((result) => setStateUserData(result.data));

    }, []);

    return (<>
        <div className="container p-5">
            <h2>VIEW COMPONENT PAGE</h2>

            <p>
                {idno} th Record Data
            </p>

            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{email}</li>
                <li>{phno}</li>
            </ul>

            <table>

            </table>

            <Link className="btn btn-success" to="/hookssignup">GOTO BACK</Link>

        </div>
    </>)
}
