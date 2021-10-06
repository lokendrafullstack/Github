
import React, { Component } from 'react';

class arraylist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: null,
            password: null,
            emails: null,
            textareas: null,
            select: null,
            checkfirst: null,
            checksecond: null,
            radiofirst: null,
            radiosecond: null
        }
    }
    Handle = (res) => {
        this.setState({
            uname: res.target.value,
            para1: this.state.uname
        })
    }
    Handlepassword = (res) => {
        this.setState({
            password: res.target.value,
            para2: this.state.password
        })
    }
    Handles = (res) => {
        this.setState({
            // uname: res.target.value
            emails: res.target.value,
            paraemail: this.state.emails

        })
    }
    Handlestextarea = (res) => {
        this.setState({
            // uname: res.target.value
            textareas: res.target.value,
            paratextarea: this.state.textareas

        })
    }
    Handlesselect = (res) => {
        this.setState({
            select: res.target.value

        })
    }

    handlecheckbox1 = (res) => {
        this.setState({
            checkfirst: res.target.value = "frontend",
            checksecond: res.target.value = ""

        })
    }
    handlecheckbox2 = (res) => {
        this.setState({
            checksecond: res.target.value = "Backend",
            checkfirst: res.target.value = ""

        })
    }
    handleradio1 = (res) => {
        this.setState({
            radiofirst: res.target.value = "Male",
            radiosecond: res.target.value = ""


        })
    }
    handleradio2 = (res) => {
        this.setState({
            radiosecond: res.target.value = "Female",
            radiofirst: res.target.value = ""

        })
    }

    handlesform = () => {
        if (this.state.name == undefined || this.state.name == "") {

        }

        alert(`  
                  Your name:${this.state.uname}
                  Your password:${this.state.password}
                  Your email: ${this.state.emails}
                  textarea content:${this.state.textareas}
                  You are select:${this.state.select} 
                  You are selected:${this.state.checkfirst} and You are selected:${this.state.checksecond}
                  You are selected:${this.state.radiofirst} and You are selected:${this.state.radiosecond}`)

    }
    render() {
        return (
            <>
                <div className="container p-5">
                    <form onSubmit={this.handlesform}>
                        <br />
                        <label className="form-label">Name</label>
                        <br />
                        <input type="text" className="form-control w-25" value={this.state.uname} onChange={this.Handle.bind(this)} /><span>{this.state.para1}</span>
                        <br />
                        <label className="form-label">Password</label>
                        <br />
                        <input type="password" className="form-control w-25" value={this.state.password} onChange={this.Handlepassword.bind(this)} /><span>{this.state.para2}</span>
                        <br />
                        <label className="form-label">Email</label>
                        <br />
                        <input type="email" className="form-control w-25" value={this.state.emails} onChange={this.Handles.bind(this)} /><span>{this.state.emails}</span>
                        <br />
                        <label className="form-label">Comments</label>
                        <br />
                        <textarea className="form-control w-25" value={this.state.textareas} onChange={this.Handlestextarea.bind(this)} ></textarea><span>{this.state.paratextarea}</span>
                        <br />
                        <select className=" w-25 form-select" value={this.state.select} onChange={this.Handlesselect.bind(this)} >
                            <option>Select one course</option>
                            <option>React</option>
                            <option>Angular</option>
                            <option >Vue</option>
                        </select>
                        <br />
                        <input type="checkbox" className="form-check-input" value={this.state.checkfirst} onChange={this.handlecheckbox1.bind(this)} /> Frontend
                        <input type="checkbox" className="form-check-input" value={this.state.checksecond} onChange={this.handlecheckbox2.bind(this)} /> Backend
                        <br /><br />
                        <input type="radio" className="form-check-input" value={this.state.radiofirst} name="gender" onChange={this.handleradio1.bind(this)} /> Male
                        <input type="radio" className="form-check-input" value={this.state.radiosecond} name="gender" onChange={this.handleradio2.bind(this)} /> Female
                        <br /><br />

                        <button type="submit" className="btn btn-outline-primary">Get form data</button>
                    </form>
                </div>

            </>
        );
    }
}

export default arraylist;