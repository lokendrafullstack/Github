import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import { Card, Row, Col, Button, } from 'react-bootstrap'

let url = "http://localhost:3001/services"
class Importapi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            msg: ''

        }
    }

    componentDidMount() {
        axios.get(url).then((res) => this.setState({ users: res.data })).catch(() => console.error("appi data finished failed"))
    }

    handleDeleteRequest = async (id) => {

        if (window.confirm(`Do You delete ${id} Record Now?`)) {


            /*
            if (axios.delete(`${restapi_url}/${id}`)) {
                window.alert(`Record Number ${id} is Deleted`)
                this.setState({ msg: `Record Number ${id} is Deleted` })
            }
            */

            await axios
                .delete(`${url}/${id}`)
                .then(() => {
                    this.setState({
                        msg: `Record Number ${id} is Deleted`
                    })
                })

            await axios
                .get(url)
                .then((result) => this.setState({ users: result.data }))

            window.setTimeout(() => { this.setState({ msg: '' }) }, 5000)

        }
    }

    render() {
        return (
            <div className="container p-5">
                <h2 className="text-center">Rest Api</h2>
                <Row>
                    {
                        this.state.users.map((result, i) => {
                            return (
                                <Col key={i} lg="3" md={2} sm={6} xs={12}>
                                    <Card className="text-center" key={i} >
                                        <Card.Header> {i + 1}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{result.name}</Card.Title>
                                            <Card.Text>
                                                {result.email}
                                            </Card.Text>
                                            {result.phno}
                                        </Card.Body>
                                        <Card.Footer className="text-muted">
                                            <Link to={`/reactapi/view/${result.id}`} className="btn btn-primary">View</Link>
                                            <Link to={`/reactapi/edit/${result.id}`} className="btn btn-success">Edit</Link>
                                            <button
                                                onClick={() => this.handleDeleteRequest(result.id)}
                                                className="btn btn-danger">Delete</button>

                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
                <output className="text-danger">{this.state.msg}</output>

            </div>
        );
    }
}

export default Importapi;