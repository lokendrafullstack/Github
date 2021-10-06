
import axios from 'axios'
import React, { useState } from 'react'



var url = "http://localhost:3001/services"
export default function Hoosksignupapi(props) {
    var [object, setobject] = useState({
        name: '',
        email: '',
        phno: ''
    })

    var handleNameTextbox = (e) => {
        setobject({ ...object, [e.target.name]: e.target.value })
    }

    var HandleFormData = (h) => {
        h.preventDefault();

        var formdata = {
            name: `${object.name}`,
            email: `${object.email}`,
            phno: `${object.phno}`
        }

        axios.post(url, formdata)
            .then(() => {
                //window.alert("....CREATED...");
                props.history.push('/hookssignup')
            });

    }





    var { name, email, phno } = object

    return (
        <>
            <div className="container p-5">
                <h2>SENDING THE DATA TO THE HOOKS API</h2>

                <form onSubmit={HandleFormData.bind(this)}>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="name"
                            value={name}
                            onChange={handleNameTextbox.bind(this)} required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            value={email}
                            onChange={handleNameTextbox.bind(this)} required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input
                            type="number"
                            class="form-control"
                            name="phno"
                            value={phno}
                            onChange={handleNameTextbox.bind(this)} required />
                    </div>



                    <button className="btn btn-outline-success" type="submit">Submit</button>
                </form>

            </div>
        </>
    )
}
