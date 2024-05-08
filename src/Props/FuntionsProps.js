import React, { useState } from "react";

function FunctionProps(Props){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");

    function chang(){
        setName("Neel")
        setEmail("neel6645@gmail.com")
        setNumber("8734852313")
    }

    return(
        <>
            <h2> Name : {name} </h2>
            <h2> Email : {email} </h2>
            <h2> Number : {number} </h2>
            <h3> Address :</h3>
            <h2> area: {Props.Address.area} </h2>
            <h2> city: {Props.Address.city} </h2>
            <h2> State: {Props.Address.State} </h2>

            <button onClick={chang}> Chang Value </button>
        </>
    )
}
export default FunctionProps;