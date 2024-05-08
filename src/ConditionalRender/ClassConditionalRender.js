import React from 'react';
import PersonalProfile from './PersonalProfile';
import GuestProfile from './GuestProfile';

class ClassConditionalRender extends React.Component{
   constructor(){
        super();
        this.state={
            loggedIn:true
        }
   }

   render(){
    {
        return (this.state.loggedIn == true ?   <h2>Welcome to Personal Profile</h2> : <h2>Welcome to Guest Profile</h2>)
    }
    // if(this.state.loggedIn == true){
    //     return(
    //         <>
    //             <h2>Welcome to Personal Profile</h2>
    //         </>
    //     )
    // }else{
    //     return(
    //         <>
    //           <h2>Welcome to Guest Profile</h2>
    //         </>
    //     )
    // }
   }
   
  
}
export default ClassConditionalRender;