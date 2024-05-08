import React ,{useState}from 'react';
import PersonalProfile from './PersonalProfile';
import GuestProfile from './GuestProfile';

function ConditionalLoggedIn(){
    const[loggedIn,setLoggedIn]=useState(true);

    return(
        <>
            {loggedIn ?
                <PersonalProfile name={'Neel'}></PersonalProfile> : <GuestProfile></GuestProfile>
            }
        </>
    )

    // if(loggedIn){
    //     return(
    //         <>
    //             <PersonalProfile></PersonalProfile>
    //         </>
    //     )
    // }else{
    //     return(
    //         <>
    //            <GuestProfile></GuestProfile>
    //         </>
    //     )
    // }
}
export default ConditionalLoggedIn;