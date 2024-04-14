import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate} from 'react-router-dom';
import '../styles/Form.css'

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

const AddEmployee = () => {

    const{identity}=useParams();
    const navigate=useNavigate();

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[emailId,setEmailId]=useState('');

    useEffect(()=>{
        //execute this only if an identity [Id] exists
        if(identity){
            // if identity exists, then it menans that it is an update call, so fill the columns with the respective employee detail
            EmployeeService.getEmployeeById(identity).then((response)=>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmailId(response.data.emailId)
            })
        }
    },[])

    const fun=(e)=>{
        e.preventDefault()
        const employee={firstName,lastName,emailId}
        console.log(employee)
        if(identity){
            EmployeeService.updateEmployeeById(identity,employee).then((response)=>{})
            navigate('/')
        }
        else
        {
            EmployeeService.addEmployee(employee).then((response)=>{
                navigate('/')
            })
        }

        setFirstName('')
        setLastName('')
        setEmailId('')

    }

    const title=()=>{
        if(identity)
        {
            return <h2 className='text-center my-4'>UPDATE EMPLOYEE DETAILS</h2>
        }
        else 
        {
         return <h2 className='text-center my-4'>ENTER EMPLOYEE DETAILS</h2>
        }
    }


  return (
    <div className='container'>
        {title()}
        <form>
            <div className="container my-2 form-element">
                <label htmlFor="firstName">Enter FirstName</label>
                <input 
                type="text"
                name="firstName"
                placeholder=' First Name'
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                />
            </div>
            <div className="container my-2 form-element">
                <label htmlFor="lastName">Enter LastName</label>
                <input 
                type="text" 
                name="lastName"
                placeholder=' Last Name'
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className="container my-2 form-element">
                <label htmlFor="emailId">Enter emailId-ID</label>
                <input 
                type="text" 
                name="emailId"
                placeholder=' emailIdID'
                value={emailId}
                onChange={(e)=>setEmailId(e.target.value)}/>
            </div>
            <button className='btn btn-success' onClick={(e)=>fun(e)}>SUBMIT</button>
            <Link to="/" className='btn btn-danger mx-2'>CANCEL</Link>
        </form>
    </div>
  )
}

export default AddEmployee
