import React, { useState } from 'react';
import Orderdetails from './Orderdetails';

function Productorder(Props) {

    const [qty, setQty] = useState();
    const [price, setPrice] = useState();
    const [discout, setDiscout] = useState();

    const [subtotal, setSubtotal] = useState();
    const [productdiscout,setProductdiscout ] = useState() ;
    const [finalamount, setFinalamount] = useState();

    function pqty(event) {
        setQty(event.target.value);
    }
    function pprice(event) {
        setPrice(event.target.value)
    }
    function pdiscout(event) {
        setDiscout(event.target.value)
    }

    function next() {
        debugger
        setSubtotal(parseInt(qty) * parseInt(price));

        var Total = parseInt(qty) * parseInt(price);
        var discoutPrice = Total * parseInt(discout) / 100;
        setProductdiscout (discoutPrice);

    }
    return (
        <>
            {/* <h3> {Props.productId}  </h3>
            <h3> {Props.brand}  </h3>
            <h3> {Props.productName}  </h3> 
            <h3> {Props.productCode}  </h3> */}

            <h1><center> :: Product Order::</center></h1>
            <table>
                <tr>
                    <td> Qty :</td>
                    <input type="number" onChange={pqty} />
                </tr>
                <tr>
                    <td> Price :</td>
                    <input type="number" onChange={pprice} />
                </tr>
                <tr>
                    <td> Discout :</td>
                    <input type="number" onChange={pdiscout} />
                </tr>
            </table>
            <center> <button onClick={next}> Next </button> </center>
            <Orderdetails pqty={qty} pprice={price} discout={productdiscout}/>
        </>
    )
}
export default Productorder;