import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

let url = `http://localhost:3001/services`

export default (props) => {

    let [userData, setStateUserData] = useState({
        name: '',
        email: '',
        phno: ''
    });

    //get_parameter_value with destructuring
    let { idno } = useParams();


    useEffect(() => {
        axios
            .get(`${url}/${idno}`)
            .then((result) => setStateUserData(result.data))
    }, []);


    //Destructuring...
    var { name, email, phno } = userData

    let formDatahandling = (e) => {
        setStateUserData({ ...userData, [e.target.name]: e.target.value });
    }


    let submitHandler = (e) => {
        e.preventDefault();

        var FormData =
        {
            name: `${userData.name}`,
            email: `${userData.email}`,
            phno: `${userData.phno}`
        }

        axios.put(`${url}/${idno}`, FormData)
            .then(() => {
                //window.alert("....UPDATED..."); 
                props.history.push('/hookssignup')
            });

    }




    return (<>
        <div className="container p-5">
            <h4 className="text-center">EDIT COMPONENT PAGE</h4>


            <form onSubmit={submitHandler.bind(this)}>

                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="text" class="form-control"
                        value={name} name="name"
                        onChange={formDatahandling.bind(this)} />
                </div>

                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control"
                        value={email} name="email"
                        onChange={formDatahandling.bind(this)} />
                </div>


                <div class="mb-3">
                    <label class="form-label">Phone</label>
                    <input type="number" class="form-control"
                        value={phno} name="phno"
                        onChange={formDatahandling.bind(this)}
                    />
                </div>

                <div class="mb-3">
                    <Link className="btn btn-success mx-2" to="/hookssignup">GOTO BACK</Link>
                    <button type="submit" class="btn btn-warning text-white" value="Update">Update</button>

                </div>

            </form>

        </div>
    </>)
}
