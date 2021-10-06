import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
let url = "http://localhost:3001/services"
export default function Hooksapi() {
    var [api, setapi] = useState([])
    var [msg, setMsg] = useState("")
    var getdata = () => {
        axios
            .get(url)
            .then((res) => { setapi(res.data) })
    }
    useEffect(() => { getdata() }, [])

    // var deletethedata = (id) => {


    //     if (window.confirm(`do yo want to delete the ${id}`))

    let deletethedata = async (id) => {
        if (window.confirm(`Delete the Record NUmber is ${id} ?`)) {
            await axios.delete(`${url}/${id}`)
                .then(() => { setMsg(`deleted the record ${id}`) })
            getdata();
            window.setTimeout(() => { setMsg('') }, 3000)
        }
    }


    return (
        <>
            <div className="container p-5">

                {
                    api.map((res, i) => {
                        return (
                            <ul key={i}>
                                <li>{res.name}</li>
                                <li>{res.email}</li>
                                <li>{res.phno}</li>
                                <br />
                                <Link className="btn btn-outline-primary" to={`/hookssignup/view/${res.id}`}>view</Link>
                                <Link className="btn btn-outline-primary" to={`/hookssignup/edit/${res.id}`}>Edit</Link>
                                <Link className="btn btn-outline-primary" onClick={() => { deletethedata(res.id) }}>delete</Link>
                            </ul>
                        )
                    })
                }
            </div>

            <p style={{ color: 'red', fontSize: '25px', textAlign: "center" }}>{msg}</p>
        </>
    )
}

