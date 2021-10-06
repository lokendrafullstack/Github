import React from 'react'
import Child from './child'

export default function Parent() {
    var email = "kumar.vijay@gmail.com"
    var emp = [1, "ABC", "abc@gmail.com"]
    function My() { return "This is Function" }
    var myname = "these is the statement"
    return (<>
        <div className="container p-5 border my-5">
            <h2>Parent Component</h2>
            {myname}
            <br />
            {email}-
            {My()}
            <Child email={email} uname="kumar" id="5" emp={emp} names={myname} my={My()} />
        </div>
    </>)
}