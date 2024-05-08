import React, { useState } from 'react';
import Secconditional from './Secconditional';
import Thirdconditional from './Thirdconditional';
import Homeconditional from './Homeconditional';

function Mainconditional() {
    const [btn, setbtn] = useState();

    function menu(event) {
        setbtn(event.target.value);
    }

    return (
        <>
            <center><h3>Main Conditional</h3></center>
            <input type="radio" value="home" name="mainbtn" onChange={menu} /> Home
            <input type="radio" value="about" name="mainbtn" onChange={menu} /> About us
            <input type="radio" value="contact" name="mainbtn" onChange={menu} /> Contact us

            {
                btn == "home" ? <Homeconditional></Homeconditional> :
                    btn == "about" ? <Secconditional></Secconditional> :
                        btn == "contact" ? <Thirdconditional></Thirdconditional> : ''
            }

        </>
    )
}
export default Mainconditional;