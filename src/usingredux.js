import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmpActionss from './actions/empAction'
import ProductsActions from './actions/productsAction'
import Useraction from './actions/usersActions'

class usingredux extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.EmpActionss()
        this.props.ProductsActions()
        this.props.Useraction()
    }

    render() {
        return (
            <>
                <div>
                    {
                        this.props.empdata.map((res, id) => {
                            return (
                                <h2>{res.id}</h2>,
                                <h2>{res.name}</h2>
                            )
                        })
                    }

                </div>
                {
                    this.props.productsdata.map((res, id) => {
                        return (
                            <h2>{res.id}</h2>,
                            <h2>{res.title}</h2>
                        )
                    })
                }
                {
                    this.props.Userdata.map((result, i) => {
                        return (
                            <h6>{result.id}</h6>
                        )
                    })
                }
            </>
        );
    }
}

var map1 = (state) => {
    console.log(state)

    return ({
        empdata: state.EmpReducer,
        productsdata: state.ProductsReducer,
        Userdata: state.UsersReducers
    })

}
var map2 = (dispatch) => {
    return bindActionCreators({ EmpActionss, ProductsActions, Useraction }, dispatch)
}

export default connect(map1, map2)(usingredux)