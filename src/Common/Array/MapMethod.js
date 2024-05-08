import React, { useState } from "react";

function MapMethod() {

    const students = ['Neel', 'Utsav', 'Harshil', 'Karan', 'Jay'];
    const colors = ['Yellow', 'Black', 'Green', 'Gray', 'White'];
    const columns = ['First Name', 'Last Name', 'Age', 'Email', 'Address'];
    const studentsList = [
        {
            fname: 'Patel', lname: 'Neel', age: 21, email: 'neel6645@gmail.com', address: [{ Pincode: '390510', city: 'Surat', State: 'Gujarat' },
            { Pincode: '390511', city: 'Amreli', State: 'Gujarat' },
            { Pincode: '390512', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            fname: 'Butani', lname: 'Utsav', age: 20, email: 'neel6645@gmail.com', address: [{ Pincode: '390510', city: 'Surat', State: 'Gujarat' },
            { Pincode: '390511', city: 'Amreli', State: 'Gujarat' },
            { Pincode: '390512', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            fname: 'Desai', lname: 'Harshil', age: 19, email: 'neel6645@gmail.com', address: [{ Pincode: '390510', city: 'Surat', State: 'Gujarat' },
            { Pincode: '390511', city: 'Amreli', State: 'Gujarat' },
            { Pincode: '390512', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            fname: 'Satani', lname: 'Karan', age: 21, email: 'neel6645@gmail.com', address: [{ Pincode: '390510', city: 'Surat', State: 'Gujarat' },
            { Pincode: '390511', city: 'Amreli', State: 'Gujarat' },
            { Pincode: '390512', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            fname: 'Maniya', lname: 'Jay', age: 2, email: 'neel6645@gmail.com', address: [{ Pincode: '390510', city: 'Surat', State: 'Gujarat' },
            { Pincode: '390511', city: 'Amreli', State: 'Gujarat' },
            { Pincode: '390512', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
        {
            fname: 'Radadiya', lname: 'Smit', age: 21, email: 'neel6645@gmail.com', address: [{ Pincode: '390510', city: 'Surat', State: 'Gujarat' },
            { Pincode: '390511', city: 'Amreli', State: 'Gujarat' },
            { Pincode: '390512', city: 'Rajkot', State: 'Gujarat' }
            ]
        },
    ]

    const employeeList = [
        { fname: 'Butani', lname: 'Utsav', age: 20, email: 'neel6645@gmail.com', address: 'Surat' },
        { fname: 'Desai', lname: 'Harshil', age: 19, email: 'neel6645@gmail.com', address: 'Amreli' },
        { fname: 'Satani', lname: 'Karan', age: 22, email: 'neel6645@gmail.com', address: 'Rajkot' },
        { fname: 'Patel', lname: 'Neel', age: 22, email: 'neel6645@gmail.com', address: 'Surat' },
        { fname: 'Maniya', lname: 'Jay', age: 21, email: 'neel6645@gmail.com', address: 'Amreli' },
        { fname: 'Radadiya', lname: 'Smit', age: 22, email: 'neel6645@gmail.com', address: 'Bhavnagar' },
    ];
    debugger
    const empList = employeeList.filter(record => record.address == 'Amreli' && record.fname == 'Desai' && record.lname == 'Harshil');

    const city = ['Surat', 'Amreli', 'Rajkot', 'Ahmedabad', 'Junagadh'];

    // const numbers=[1,3,5,7,9,11];
    
    // const newNumbers=numbers.map(num=>num * 2);
    // console.log(newNumbers);

    // const newSum = numbers.reduce((accume,currentVal)=> accume + currentVal);
    // console.log(newSum);

    // const arrFilter = numbers.filter(num=> num>6);
    // console.log(arrFilter);
    return (
        <>
            <div>
                {students.map(student => <p>{student}</p>)}
            </div>

            <div>
                <ul>
                    {colors.map(abcd => <li><p>{abcd}</p></li>)}
                </ul>
            </div>

            <div>
                <table border="1" width={1250}>
                    <tr>
                        {columns.map(col => <th>{col}</th>)}
                    </tr>
                    {studentsList.map((stud) =>
                        <tr>
                            <td>{stud.fname}</td>
                            <td>{stud.lname}</td>
                            <td>{stud.age}</td>
                            <td>{stud.email}</td>
                            <td>
                                <table width="100%">
                                    {
                                        stud.address.map((data) =>
                                            <tr>
                                                <td>{data.Pincode}</td>
                                                <td>{data.city}</td>
                                                <td>{data.State}</td>
                                            </tr>
                                        )
                                    }
                                </table>
                            </td>
                        </tr>
                    )}
                </table>
                <br></br>
                <br></br>
            </div>

            <div>
                <table border="1" width={1250}>
                    <tr>
                        {columns.map(col => <th>{col}</th>)}
                    </tr>
                    {empList.length > 0 ? empList.map((emp) =>
                        <tr>
                            <td>{emp.fname}</td>
                            <td>{emp.lname}</td>
                            <td>{emp.age}</td>
                            <td>{emp.email}</td>
                            <td>{emp.address}</td>
                        </tr>
                    ) : 'Record not found.'}

                </table>
            </div>
            {/* City : <select>
                {city.map(ct => <option>{ct}</option>)}
            </select> */}
        </>
    )

}
export default MapMethod;