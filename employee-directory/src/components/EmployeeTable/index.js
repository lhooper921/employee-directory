import React from "react"
import EmployeeRow from "../EmployeeRow/index"
import Header from "./Header/index"
import "./EmployeeTable.css"

function EmployeeTable(){

    return(
        <table>
            <Header />
        
        <tbody>
    <EmployeeRow 
       image="https://randomuser.me/api/portraits/men/89.jpg"
       firstname="Mister"
       lastname="Christmas"
       phone="123-456-7890"
       email="h.christmas@wow.com"
       dob="12-25-1987"
    />
        </tbody>
        
        </table>
    )
}

export default EmployeeTable