import React from 'react'
import EmployeeService from '../services/EmployeeService'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';  -- useHistory is replaced by useNavigate in latest version of react-router-dom
import '../styles/Delete.css'

const DeleteEmployeeById = () => {

    const{identity}=useParams();
    const navigate=useNavigate();

    const deleteEmployee=()=>{
        EmployeeService.deleteEmployeeById(identity).then((response)=>{
            navigate('/')
        })
    }

  return (
    <div className='container'>
        <div className="jumbotron">
      <h4 className='text-center'>Are you sure want to delete?</h4>
      <button className="btn btn-danger" onClick={()=>deleteEmployee()}>YES</button>
      <Link className="btn btn-success mx-4" to='/'>NO</Link>    
    </div>
    </div>
  )
}

export default DeleteEmployeeById
