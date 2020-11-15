import React from "react";
// import EmployeeData from "./EmployeeData"
function EmployeeRow(props) {
    return (
        <tr>
       <td><img src={props.image}></img></td>
       <td>{props.firstname}</td>
       <td>{props.lastname}</td>
       <td>{props.phone}</td>
       <td>{props.email}</td>
       <td>{props.dob}</td>
            

        </tr>
    );
}
export default EmployeeRow;