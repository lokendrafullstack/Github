import React, { Component } from 'react';

class formvalidation extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <form className="w-50 mx-auto">
                    <div className="input-group input-group-sm mb-3">

                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <button onClick={this.handler}>click</button>
                </form>
            </>
        );
    }
}

export default formvalidation;