import React, { useState } from "react";
import Child from './Child';

function Parent() {

    const [message, setMessage] = useState();
    const [qutvalue, setQutvalue] = useState();
    const [pricevalue, setPricevalue] = useState();
    const [total, setTotal] = useState();

    const ChooseMessage = (message, qut, price) => {
        setMessage(message)
        setQutvalue(qut);
        setPricevalue(price);
        setTotal(qut * price);
    }

    return (
        <>
            <h1> {message}</h1>
            <p> Quantity : {qutvalue} </p>
            <p> Price : {pricevalue} </p>
            <h3> Total : {total} </h3>

            <Child ChooseMessage={ChooseMessage} />
        </>
    )
}
export default Parent;
