import React from "react";


function ClickEvent() {

    function buttonClick(){
        prompt("Enter Your Name!")
    }

    return (
        <>
            <button onDoubleClick={buttonClick}> Click Me </button>
            <br></br>
            <br></br>
            <input type="radio" name="gender"/> Male 
            <input type="radio" name="gender"/> Female
            <br></br>
            <br></br>
            <input value="HTML"  type="checkbox"/> HTML
            <input value="CSS" type="checkbox"/> CSS
            <input value="JAVAScript" type="checkbox"/> JAVAScript
            <input value="React" type="checkbox"/> React
        </>
    )
} 
export default ClickEvent;