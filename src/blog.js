import React from 'react'

//step-1
import { connect } from 'react-redux';

//step-3: calling Redux Action Files
import EmpAction from './actions/empAction'
import ProductsAction from './actions/productsAction'
import UsersAction from './actions/usersActions'

//Step-4: Redux Object - is to "map" multiple actions together as a single prop
import { bindActionCreators } from 'redux'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    componentDidMount() {
        this.props.EmpAction()//step-7
        this.props.ProductsAction()
        this.props.UsersAction()
    }

    render() {
        return (
            <div className="text-center p-5">
                <h2>REDUX STORE EMP STATE OBJECT</h2>
                {/* step-11*/}
                <table className="bg-dark text-white w-25 mx-auto">
                    <thead>
                        <th>S.NO</th>
                        <th>ID</th>
                        <th>EMAIL</th>
                    </thead>
                    {
                        this.props.empData.map((res, i) => {
                            return (
                                <tbody key={i} className="border ">
                                    <td>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                </tbody>


                            )
                        })
                    }

                </table>


                {
                    this.props.usersData.map((res, i) => {
                        return (<ul type="none" key={i}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                        </ul>)
                    })
                }

                {
                    this.props.productsData.map((res, i) => {
                        return (<ul type="none" key={i}>
                            <li>{res.id}</li>
                            <li>{res.title}</li>
                            <li>{res.body}</li>
                        </ul>)
                    })
                }

            </div >
        )
    }
}



//Step-8: Get the Store data 
let mapStateToProps = (state) => {
    //step-9

    console.log(state)

    //step-10
    return ({
        empData: state.EmpReducer,
        productsData: state.ProductsReducer,
        usersData: state.UsersReducers
    })
}

//Step-5: Dispatch the actions To send the request to Reducers then submit to store
let mapDispatchToProps = (dispatch) => {
    //step-6
    return bindActionCreators({ EmpAction, ProductsAction, UsersAction }, dispatch)
}

//step-2
export default connect(mapStateToProps, mapDispatchToProps)(Blog)
