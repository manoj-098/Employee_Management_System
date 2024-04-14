import React, { useState,useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

const GetEmployeeById = () => {

    const{identity}=useParams() // The name that has been used in the endPoint URL must only be used here, any other names gives error 
    
    const[employees,setEmployees]=useState([])
    const fun=()=>{
               EmployeeService.getEmployeeById(identity).then((response)=>{
                setEmployees(response.data)
            console.log(response.data)
            console.log("EMPLOYEE DATA",employees)
        })
    }

    useEffect(() => {
        console.log("EMPLOYEE DATA", employees);
    }, [employees]);

  return (
    <div>
        <h2>GET EMPLOYEE BY ID</h2>
        <button className='btn btn-primary d-flex' onClick={()=>fun()}>GET EMPLOYEE</button>
        <div>
                <ul>
                    <li>{employees.firstName}</li>
                    <li>{employees.lastName}</li>
                    <li>{employees.emailId}</li>
                </ul>
        </div>
    </div>
  )
}

export default GetEmployeeById
