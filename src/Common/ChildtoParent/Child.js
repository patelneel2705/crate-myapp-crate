import React, { useState } from "react";

function Child({ChooseMessage}) {
    const [qutvalue, setQutvalue] = useState();
    const [pricevalue, setPricevalue] = useState();

    function qut(event) {
        setQutvalue(parseInt(event.target.value));
    }

    function price(event) {
        setPricevalue(parseInt(event.target.value));
    }

    return (
        <div>
            <h1>Child Component</h1>
            Quantity : <input type="text" placeholder="Quantity" onChange={qut} />
            <br></br>
            <br></br>
            Price : <input type="text" placeholder="Price per unit" onChange={price} />
            <br></br>
            <br></br>
            <button onClick={()=>ChooseMessage("Parent Component",qutvalue,pricevalue)}>Calculate total</button><br></br>
        </div>
    );
}
export default Child;

