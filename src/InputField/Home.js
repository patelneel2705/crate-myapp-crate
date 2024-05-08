import React,{useState} from 'react';

function Home(){
    const[data,setData]=useState('');
    const[print,setPrint]=useState(false);
    const[status,setStatus]=useState(true);
    const[disability,setDisability]=useState(false);
    const[value,setValue]=useState('No');

    function getData(event){
        setData(event.target.value);
        setPrint(false);
    }

    function getDisability(event){
        debugger
        setValue(event.target.value)
    }

    return( 
        <>
            <h2>Input Fileds</h2>
            <input type="text" onChange={getData}/><br/><br/>
            <button onClick={()=>setPrint(true)}>Click</button><br/><br/>

            Enter Data : {print ? <span>{data}</span> : ''}

            <button onClick={()=>setStatus(true)}>Show</button>
            <button onClick={()=>setStatus(false)}>Hide</button><br/><br/>

            {/* You have any disability? : <input type="radio" name="disability" onChange={()=>setDisability(true)}/>Yes <input type="radio" name="disability" onChange={()=>setDisability(false)}/>No<br></br> */}
            You have any disability? : <input type="radio" name="disability" onChange={getDisability} value="Yes"/>Yes <input type="radio" name="disability" onChange={getDisability} value="No"/>No<br></br>

            {
                value == 'Yes' ? <input type="text" placeholder='Enter disability here....'/> : ''
            }

            {/* {
                disability ? <input type="text" placeholder='Enter disability here....'/> : ''
            } */}
            {/* {
                status ? <input type="text"/> : ''
            } */}
     </>   
    )
}
export default Home;