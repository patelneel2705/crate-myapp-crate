import React from "react";

function Orderdetails(props) {
    return (
        <>
            {/* <h3> {Props.pqty}  </h3>
            <h3> {Props.pprice}  </h3>
            <h3> {Props.pdiscout}  </h3> */}

            <h1><center> :: Order Price ::</center></h1>
            {props.discout}
            <table>
                <tr>
                    <td> Sub Total :</td>
                    <input type="number"/>
                </tr>
                <tr>
                    <td> Discout :</td>
                    <input type="number"/>
                </tr>
                <tr>
                    <td> Final Amount :</td>
                    <input type="number"/>
                </tr>
            </table>
        </>
    )
}
export default Orderdetails;