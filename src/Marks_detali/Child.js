import React from "react";


function Child(Props){

    return(
        <>
        <h3> Marks : {Props.mark}  </h3>
        <h3> Percntage : {Props.percntage} % </h3>
        <h3> Grade : {Props.grade}  </h3>
       </>
    )
}
export default Child;