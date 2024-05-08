import React from 'react';
import '../Common/Css/style.css';
import image from '../Common/image/Rectangle 16.png';

function React_css() {
    return (
        <>
            <h1 className='headtag'> Welcome To React_css </h1>
            <div className='setdiv'>
                {/* <img className='Img' src={image} />  */}
            </div>
            <br></br>
            <table className='clsTable'>
                <tr>
                    <th> Surat </th>
                    <th> Surat </th>
                    <th> Surat </th>
                    <th> Surat </th>
                </tr>
                <tr>
                    <td> 1 </td>
                    <td> 1 </td>
                    <td> 1 </td>
                    <td> 1 </td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td> 2 </td>
                    <td> 2 </td>
                    <td> 2 </td>
                </tr>
                <tr>
                    <td> 3 </td>
                    <td> 3 </td>
                    <td> 3 </td>
                    <td> 3 </td>
                </tr>
                <tr>
                    <td> 4 </td>
                    <td> 4 </td>
                    <td> 4 </td>
                    <td> 4 </td>
                </tr>
            </table>
            <br></br>
            <div>
                <div className='clsFloat'> div 1 </div>
                <div className='classFloat'> div 2 </div>
            </div>
            <br></br>
            <div className='clear'>
                <p className='clsDi'> Welcome To CSS display inline </p>
                <p className='clsDib'> Welcome To CSS display inline-block </p>
                <p className='clsDb'> Welcome To CSS display block </p>
                <p className='clsDn'> Welcome To CSS display none </p>
            </div>
            <div>
                <button className='clsBtn'> Click Me </button>
            </div>
            <br></br>
            <div>
                <div className='clsfixed'> Position Fixe 1 </div>
                <div className='clsPosition'> 
                    <p> Position absolute 2 </p>
                </div>
            </div>
        </>
    )
}
export default React_css;