import React, { useState } from "react";
import Child from "./Child";

function Perent() {

    const [sub1, setSub1] = useState();
    const [sub2, setSub2] = useState();
    const [sub3, setSub3] = useState();
    const [sub4, setSub4] = useState();
    const [sub5, setSub5] = useState();
    const [total, setTotal] = useState();
    const [Percntage, setPercntage] = useState();
    const [grade,setGrade] = useState();

    function English(event) {
        setSub1(event.target.value)
    }

    function Hindi(event) {
        setSub2(event.target.value)
    }

    function Account(event) {
        setSub3(event.target.value)
    }

    function State(event) {
        setSub4(event.target.value)
    }

    function DBMS(event) {
        setSub5(event.target.value)
    }

    function updatemarks() {

        setTotal(parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5));

        var Total = parseInt(sub1) + parseInt(sub2) + parseInt(sub3) + parseInt(sub4) + parseInt(sub5);
        setPercntage(Total / 5);

        var per = Total / 5;
        if (per >= 90) {
            setGrade("A");
        }
        else if (per >= 70 && per < 90) {
            setGrade("B");
        }
        else if (per >= 50 && per < 70) {
            setGrade("C");
        }
        else if (per >= 35 && per < 50) {
            setGrade("D");
        }
        else {
            setGrade("Fail");
        }
    }

return (
    <>
        <h2> Marks Detali table </h2>
        <table >
            <tr>
                <th> Subject </th>
                <th> Marks </th>
            </tr>
            <tr>
                <td> English </td>
                <td> <input type="number" placeholder="Enter Your Marks !" onChange={English} /></td>
            </tr>
            <tr>
                <td> Hindi </td>
                <td> <input type="number" placeholder="Enter Your Marks !" onChange={Hindi} /></td>
            </tr>
            <tr>
                <td> Account </td>
                <td> <input type="number" placeholder="Enter Your Marks !" onChange={Account} /></td>
            </tr>
            <tr>
                <td> State </td>
                <td> <input type="number" placeholder="Enter Your Marks !" onChange={State} /></td>
            </tr>
            <tr>
                <td> DBMS </td>
                <td> <input type="number" placeholder="Enter Your Marks !" onChange={DBMS} /></td>
            </tr>
            <Child mark={total} percntage={Percntage} grade={grade}></Child>
            <button onClick={updatemarks}> Calculate </button>

        </table>
    </>
)
}
export default Perent;