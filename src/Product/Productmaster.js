import React, { useState } from 'react';
import Productorder from './Productorder';

function Productmaster() {

    const[id ,setId] = useState();
    const[brand ,setBrand] = useState();
    const[name ,setName] = useState();
    const[code,setcode]=useState();

    function pid(event) {
        setId(event.target.value)
    } 
    function pbrand(event) {
        setBrand(event.target.value)
    } 
    function pname(event) {
        setName(event.target.value)
    } 
    function pcode(event) {
        setcode(event.target.value)
    }

    return (
        <>
            <h1> <center> :: Product Detalis :: </center></h1>
            <table>
                <tr>
                    <td> Product Id : </td>
                    <td> <input type="number" onChange={pid}/> </td>
                </tr>
                <tr>
                    <td> Brand : </td>
                    <td> <input type="text" onChange={pbrand}/> </td>
                </tr>
                <tr>
                    <td> Product Name : </td>
                    <td> <input type="text" onChange={pname}/> </td>
                </tr>
                <tr>
                    <td> Product Code : </td>
                    <td> <input type="number" onChange={pcode}/> </td>
                </tr>
            </table>
            {/* onclick={updateproduct} */}
            <center> <button > Next </button> </center>
            <Productorder productId={id} brand={brand} productName={name} productCode={code}/>
        </>
    )
}
export default Productmaster;