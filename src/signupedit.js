import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



let restapi_url = "http://localhost:3001/services"


export default class Signup extends Component {

    constructor(props) {
        super(props)

        this.state =
        {
            name: '',
            email: '',
            phno: '',
            nameErr: '',
            emailErr: '',
            phnoErr: '',
            msg: ''
        }
    }

    componentDidMount() {
        axios.get(`${restapi_url}/${this.props.match.params.id}`).then((res) => this.setState(res.data))
            .catch(() => console.error("appi data finished failed"))
    }

    handleNameTextbox = (input) => {
        this.setState({ name: input.target.value })
    }

    handleEmailTextbox = (input) => {
        this.setState({ email: input.target.value })
    }

    handlePhoneTextbox = (input) => {
        this.setState({ phno: input.target.value })
    }


    HandleFormData = (e) => {
        e.preventDefault();
        var formData = {
            "name": this.state.name,
            "email": this.state.email,
            "phno": this.state.phno,
        }

        /*
                alert(`  
                Name: ${this.state.name} 
                Email: ${this.state.email}
                Phno: ${this.state.phno}  
                `)
        */
        /* Model-1
        axios
        .post(restapi_url, formData)
        .then(()=>window.alert("Account Created"))
        */
        /* Model-2
        axios
        .post(restapi_url, formData)
        .then(()=>setState({msg:"Account Created" }))
        */
        /* Model-3 */
        axios
            .put(`${restapi_url}/${this.props.match.params.id}`, formData)
            .then(() => this.props.history.push('/reactapi'))
    }


    render() {
        console.log(this.props)
        var { name, email, phno, msg } = this.state
        return (<>
            <div className="p-5 w-50 mx-auto">
                <h3 className="text-center py-2">USER SIGNP FORM </h3>
                <form onSubmit={this.HandleFormData.bind(this)}>
                    <div class="mb-3">
                        <label class="form-label">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            name="name"
                            value={name}
                            onChange={this.handleNameTextbox.bind(this)} required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            value={email}
                            onChange={this.handleEmailTextbox.bind(this)} required />
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input
                            type="number"
                            class="form-control"
                            name="phno"
                            value={phno}
                            onChange={this.handlePhoneTextbox.bind(this)}
                            required
                        />
                    </div>

                    <div class="mb-3">
                        <button type="submit" class="mx-2 btn btn-success">UPDATE</button>
                        <Link to="/reactapi" class="btn btn-primary">GOT0 BACK</Link>

                        <span className="text-success">{msg}</span>
                    </div>



                </form>


            </div>
        </>)
    }
}