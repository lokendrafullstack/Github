import React, { Component } from 'react';
import axios from "axios"
let url = "https://fakestoreapi.com/products"
class Interview extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(url).then((res) => this.setState({ users: res.data })).catch(() => console.error("appi data finished failed"))
    }

    render() {

        return (
            <>
                <div>
                    {
                        this.state.users.map((res, id) => {
                            return (<h2>{res.id}</h2>)
                        })
                    }
                </div>
            </>
        );
    }
}

export default Interview;