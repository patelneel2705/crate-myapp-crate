import React from "react";
import Childclass from './Childclass';

class Perentclass extends React.Component {
    constructor() {
        super();

        this.state = { 
            sub1 : "",
            sub2 : "",
            sub3 : "",
            sub4 : "",
            sub5 : "",
            total : "",
            perc : "",
            grade : ""
        }
    }

    english(evenet){
        this.setState({sub1 : evenet.target.value});
    }
    hindi(evenet){
        this.setState({sub2 : evenet.target.value});
    }
    account(evenet){
        this.setState({sub3 : evenet.target.value});
    }
    gujrati(evenet){
        this.setState({sub4 : evenet.target.value});
    }
    dBMS(evenet){
        this.setState({sub5 : evenet.target.value});
    }

    updateMark() {
        this.setState({
            total : parseInt(this.state.sub1) + parseInt(this.state.sub2) + parseInt(this.state.sub3) + parseInt(this.state.sub4) + parseInt(this.state.sub5) ,
            perc : (parseInt(this.state.sub1) + parseInt(this.state.sub2) + parseInt(this.state.sub3) + parseInt(this.state.sub4) + parseInt(this.state.sub5)) / 5
        });

        var per = (parseInt(this.state.sub1) + parseInt(this.state.sub2) + parseInt(this.state.sub3) + parseInt(this.state.sub4) + parseInt(this.state.sub5) )/ 5;

        if(per>90){
            this.setState({grade: 'A'})
        }else{
            this.setState({grade: 'E'})
        }
    }

    render() {

        return (
            <>
                <table >
                    <tr>
                        <th> Subject </th>
                        <th> Marks </th>
                    </tr>
                    <tr>
                        <td> English </td>
                        <td> <input type="number"  onChange={this.english.bind(this)} /></td>
                        {/* <span> {this.state.sub1} </span> */}
                    </tr>
                    <tr>
                        <td> Hindi </td>
                        <td> <input type="number" onChange={this.hindi.bind(this)} /></td>
                    </tr>
                    <tr>
                        <td> Account </td>
                        <td> <input type="number"  onChange={this.account.bind(this)} /></td>
                    </tr>
                    <tr>
                        <td> gujrati </td>
                        <td> <input type="number" onChange={this.gujrati.bind(this)}  /></td>
                    </tr>
                    <tr>
                        <td> DBMS </td>
                        <td> <input type="number"  onChange={this.dBMS.bind(this)} /></td>
                    </tr>
                    <button onClick={() => this.updateMark()}> Calculate </button>
                    <Childclass obj={{total:this.state.total, perc:this.state.perc, grade:this.state.grade}}></Childclass>
                </table>
            </>
        )
    }
}
export default Perentclass;