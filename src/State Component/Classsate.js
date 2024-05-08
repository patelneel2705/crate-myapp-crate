import React from "react";

class ClassComponent extends React.Component {
    constructor() {
        super();
        this.state = { mark1: "Mark1:", mark2: "Marks2", mark3: "Marks3" };
    }
    updateMark() {
        this.setState({ mark1: "50" });
        this.setState({ mark2: "60" });
        this.setState({ mark3: "70" });
    }
    render() {
        return (
            <>
                <table border={2} width={1000} height={200}>
                    <tr>
                        <th> Student no.</th>
                        <th> Name </th>
                        <th> Marks </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> Harshil </td>
                        <td> {this.state.mark1} </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td> Utsav </td>
                        <td> {this.state.mark2} </td>
                    </tr>
                    <tr>
                        <td> 3 </td>
                        <td> Sneh </td>
                        <td> {this.state.mark3} </td>
                    </tr>
                </table>
                <button onClick={() => this.updateMark()}> Click me</button>
            </>
        );
    }
}
export default ClassComponent;