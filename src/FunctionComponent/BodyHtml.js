import React from "react";
import Logo from '../logo.svg';

function Body() {
    return (
        <>
            <h1> HTML REVISION </h1>
            <table border={1} width={1230} cellPadding={2} cellSpacing={5}>
                <tr>
                    <th> Name </th>
                    <th> ROll no </th>
                    <th> CITY </th>
                    <th> NUMBER </th>
                </tr>
                <tr>
                    <th> NEEL </th>
                    <th> 1 </th>
                    <th> SUrat </th>
                    <th> 8734852313 </th>
                </tr>
                <tr>
                    <th> Utsav </th>
                    <th> 2 </th>
                    <th> SUrat </th>
                    <th> 8734852313 </th>
                </tr>
                <tr>
                    <th> Harshil </th>
                    <th> 1 </th>
                    <th> SUrat </th>
                    <th> 8734852313 </th> 
                </tr>
            </table>
            <img src={Logo} width={150} height={150} />
            <div>
                <ul>
                    <li> 1 </li>
                    <li> 2 </li>
                    <li> 3 </li>
                    <li> 4 </li>
                </ul>
            </div>
                {/* L-1 */}
            <div>
                <h1> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</h1>
                <h2> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</h2>
                <h3> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</h3>
                <h4> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</h4>
                <h5> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</h5>
                <h6> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</h6>

                <p> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</p>

                <center> React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.</center>
                <hr></hr>
                <pre> React can be used to build web, mobile, and desktop applications,           making it a versatile framework for cross-platform development.</pre>

                <progress value="50" max="100"></progress>
            </div>

            {/* L-2 */}
            <div align="center">
                <b> React </b>
                <i> React </i>
                <u> React </u>
                <strike> React </strike>
                <sup> React </sup>
                <sub> React </sub>
                <big> React</big>
                <small> React</small>
            </div>

            {/* L-3 */}
            <div>
                <mark> React </mark>
                <strong> React </strong>
                <q> React </q>
                <address> 145 , abc bullding , vr-mall, l.h.road </address>
                <abbr title="HTML CSS"> React </abbr>
                <em> React</em>

            </div>
        </>
    )
}
export default Body;