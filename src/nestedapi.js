import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
let url = "http://localhost:3001/services"

export default class RestDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        axios.get(`${url}/${this.props.match.params.id}`)
            .then((res) => this.setState(res.data))
            .catch(() => console.error("APIDATA FECTHING FAILED"))

        /*
            fetch(restapi_url)
                .then(res => res.json())
                .then((result) => this.setState({ users: result }))
        */
    }

    render() {
        console.log(this.props);
        var { id, name, email, phno } = this.state

        return (
            <div className="text-center p-5">
                <h2>Record No {this.props.match.params.id} Details are:</h2>
                <br />
                <div className="card bg-secondary w-50 mx-auto text-white p-3" style={{ boxShadow: '0px 0px 10px black' }}>
                    <h1>{id}</h1>
                    <div className="card-title">
                        {name}
                    </div>
                    <h2>{email}</h2>
                    <div className="card-body">
                        {phno}
                    </div>
                    <Link to="/reactapi" className="btn btn-primary text-white p-2">GO BACK</Link>
                    <br />
                    <button className="btn btn-light text-dark p-2" >Print</button>
                </div>
            </div>
        )
    }
}