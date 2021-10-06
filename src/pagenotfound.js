import React from 'react'
import { Link } from 'react-router-dom'


class Pagenotfound extends React.Component {
    render() {
        return (
            <div className="py-5 text-center" >
                <h1 className="display-1">404 ERROR</h1>
                <h3>This is Page it Not Available...</h3>
                <Link to="/image">GOTO HOME PAGE</Link>
            </div>
        )
    }
}
export default Pagenotfound
