import React, { useState } from "react";


function Input() {
    const[value1,setValue1]=useState();
    const[value2,setValue2]=useState();
    const[formula,setformula]=useState();

    //     const [text, setText] = useState(false);
    //     const [chang, setchang] = useState('');
    //     const [gender, setGender] = useState(false);
    //     const[city,setCity] = useState('Not Selected');
    //     const[changcity,setChangcity] =useState();

    // function name(event) {
    //     setchang(event.target.value)
    //     setText(false);
    //     var res = event.target.value.replace(/\D/g, '');
    // }

    // function Districts(event){
    //     setCity(event.target.value)
    //     setChangcity(false);
    // }

    function firstvalue(event){
        setValue1(event.target.value);
    }
    function secvalue(event){
        setValue2(event.target.value);
    }
    function calculate(event){
        setformula(event.target.value);
    }

    var plus = parseInt(value1) + parseInt(value2);
    var minus = parseInt(value1) - parseInt(value2);
    var asterisk = parseInt(value1) * parseInt(value2);
    var division = parseInt(value1) / parseInt(value2);

    return (
        <>
            {
        /* <center> <h3> Input Box </h3> </center>
            Name : <input type="text" onChange={name} /> &nbsp;<br/><br/>
            <button onClick={() => setText(true)}> Click </button> &nbsp;
            {
                text ? <h3> Your name :{chang} </h3> : ''
            }  
            &nbsp;<br/><br/>
            Number : <input type="number" />
            &nbsp;<br/><br/>
            Gender: 
            <input type="radio" name="radiobox" onClick={()=>setGender(false)}/> Male
            <input type="radio" name="radiobox" onClick={()=>setGender(false)} /> Female
            <input type="radio" name="radiobox" onClick={()=>setGender(true)} /> Other
            <br/>
            {
                gender ? <input type="text" /> : 'Your Select : '
            }
            &nbsp;<br/><br/>
        
            Select your Districts in Gujarat : <br/>
            <select name="Districts" onChange={Districts}>
                <option value="Gujarat"> Gujarat </option>
                <option value="Ahmedabad"> Ahmedabad </option>
                <option value="Amreli"> Amreli </option>
                <option value="Mehsana"> Mehsana </option>
                <option value="Navsari"> Navsari </option>
                <option value="Vadodara"> Vadodara </option>
                <option value="Jamnagar"> Jamnagar </option>
                <option value="Surat"> Surat </option>
            </select>
            {
                city ? <h3> Your Districts :{city} </h3> : ''
            }
            &nbsp;<br/><br/>
            <hr/>   
            <input type="checkbox"/> Russia 
            <input type="checkbox"/> Vietnam 
            <input type="checkbox"/> Nepal 
            <input type="checkbox"/> India  
            <input type="checkbox"/> Germany   
            <hr/> */}
            Enter your Marks:
            &nbsp;<br /><br />
            value 1: &nbsp; <input type="number" onChange={firstvalue} />
            <br /><br />
            value 2: &nbsp; <input type="number" onChange={secvalue} />
            <br /><br />
            Select your mathematical operations : &nbsp; 
            <select name="mathematical" onChange={calculate}>
                <option value="Select"> Select </option>
                <option value="plus"> plus </option>
                <option value=" minus"> minus </option>
                <option value="asterisk"> asterisk </option>
                <option value="division"> division </option>
            </select>
            <br /><br />
            Your ans : &nbsp;
            <span> </span>
            {/* <input type="number"/> */}
            {
                formula == 'plus'? <span> {plus} </span> : 
                formula == 'minus'? <span> {minus} </span> : 
                formula == 'asterisk'? <span> {asterisk} </span> : 
                formula == 'division'? <span> {division} </span> : 
                ''
            }
        </>
    )
}
export default Input;