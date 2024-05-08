import React from "react";
import { useState } from "react";

function FunctionComponent() {
    const [mark1, setMark1] = useState(0);
    const [mark2, setMark2] = useState(0);
    const [mark3, setMark3] = useState(0);


    function updateMark() {
        setMark1(60);
        setMark2(mark2 + 15);
        setMark3(mark3 - 15)
    }
    return (
        <>
            <table border={2} width={1000} height={200}>
                <tr>
                    <th> Student no.</th>
                    <th> Name </th>
                    <th> Marks </th>
                </tr>
                <tr>
                    <td> 1 </td>
                    <td> Harshil </td>
                    <td> {mark1} </td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td> Utsav </td>
                    <td> {mark2} </td>
                </tr>
                <tr>
                    <td> 3 </td>
                    <td> Sneh </td>
                    <td> {mark3} </td>
                </tr>
            </table>
            <center> <button onClick={updateMark} width={50} height={50}> Click Me </button> </center>
        </>
    )
}
export default FunctionComponent;