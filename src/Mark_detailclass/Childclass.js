import React from "react";

class Childclass extends React.Component{
    constructor() {
        super();
        
    }

    render() {
        return (
            <>
                <h2> total mark : {this.props.obj.total} </h2>
                <h2> Percntage : {this.props.obj.perc} </h2>               
                <h2> grade : {this.props.obj.grade} </h2>
               
            </>
        )
    }
}
export default Childclass;