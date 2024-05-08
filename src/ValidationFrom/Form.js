import React,{useState} from "react";
import Validation from './Validation.css';

function Form() {
    const[value,setValue]=useState();

    function handleChange(event){
        debugger
        // var res = event.target.value.replace(/[^\\a-z\\]/g, '');  //only Small
        // var res = event.target.value.replace(/[^\\A-Z\\]/g, '');  //only Capital 
        // var res = event.target.value.replace(/[^\\a-z\A-Z\\]/g, '');  //Small and capital both
        // var res = event.target.value.replace(/\D/g,'');  // only Digit Number
        var res = event.target.value.replace(/[^\\a-z\A-Z\0-9\\]/g, '');  //Number and Text both
        // (/\./g);
        // (/^\d*\.?\d*$/);
        setValue(res);
    }
    return (
        <>
            <div className="app">
                Number : <input type="text" value={value} placeholder="Enter number here..." onChange={handleChange}/>
                {/* <form onSubmit={handleSubmit} autocomplete="off">
                    <h1>Register</h1>
                    <div className="formInput">
                        <label>Email</label>
                        <br></br>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="formInput">
                        <label>Password</label>
                        <br></br>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter a strong password..."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="clsbutton">Submit</button>
                </form > */}
            </div >
        </>
    )
}
export default Form;