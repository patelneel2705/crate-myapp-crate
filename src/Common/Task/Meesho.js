import React, { useState } from "react";

function Meesho() {

    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState();
    const [dis, setDis] = useState(0);
    const [disValue, setDisValue] = useState(0);
    const [finalamount,setFinalamount]= useState();



    function value(event) {
        // debugger
        setQuantity(event.target.value);
    }

    function decrease() {
        debugger
        if (quantity > 1) {
            setQuantity(parseInt(quantity) - 1);
            setTotal((parseInt(quantity) - 1) * price);
            subTotal(discount,disValue,(parseInt(quantity) - 1))
        }
    }

    function increase() {
        setQuantity(parseInt(quantity) + 1);
        setTotal((parseInt(quantity) + 1) * price);
        subTotal(discount,disValue,(parseInt(quantity) + 1))
    }

    function prices(event) {
        setPrice(event.target.value);
        setTotal(quantity * parseInt(event.target.value));
        subTotal(discount,disValue,quantity,parseInt(event.target.value))
    }
    function discounts(event) {
        if(event.target.value == "select"){
            setDis(0)
            setDisValue();
        }
        setDiscount(event.target.value)
    }
    function fixes(event) {
        setDisValue(parseInt(event.target.value));
        subTotal(discount,parseInt(event.target.value),quantity);
    }

    function subTotal(selectedDiscount,value,newQuantity,newPrice){
        
        debugger
        if(newPrice!=undefined){
            prices=newPrice;
        }else{
            prices=price;
        }

        if (selectedDiscount == 'Fix') {
            setDis(value)
        } else if(selectedDiscount == 'Percentage') {
            var finalDiscount = (newQuantity * prices * parseInt(value)) / 100;
            setDis(finalDiscount);
        }
    }

    function cal(){
        setFinalamount(total - dis);
    }

    return (
        <>
        
            Quantity : <button onClick={decrease}>-</button><input type="number" value={quantity} onChange={value} /><button onClick={increase}>+</button><br />
        
            <br />
            Price : <input type="number" onChange={prices} /><br /><br />
            Total : <span>{total}</span>
            <br /><br />

            Discount : &nbsp;
            <select onChange={discounts}>
                <option value="select"></option>
                <option value="Fix">Fix</option>
                <option value="Percentage">Percentage</option>
            </select>&nbsp;&nbsp;
            {
                discount == 'Fix' || discount == 'Percentage' ? <span><input type="number" placeholder="Enter Fixed Discount" onChange={fixes} value={disValue} /></span> : null
            }
            <br /><br />

            Discount Price : <span>{dis}</span><br /><br />

            Calculate  : <button onClick={cal}>Calculate</button><br /><br />

            Final Amount : <span>{finalamount}</span><br />

        </>
    )
}
export default Meesho;