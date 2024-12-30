import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function Counter(){

    const [counter, setCounter]=useState(0);

    return(
        <React.Fragment>
            <h1>Counter : {counter}</h1>
            <button className="btn btn-primary" onClick={()=>setCounter(()=>counter+1)}>Increment+

            </button>
            <button className="btn btn-primary" onClick={()=>setCounter(()=>counter-1)}>Decrement -</button>
        </React.Fragment>
    )


}

export default Counter;