import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'
import DeleteEmployeeById from './DeleteEmployeeById'

const ListEmployee = () => {

    const navigate=useNavigate();
    const[employees,setEmployee]=useState([])
    const[offset,setOffset]=useState(0);
    useEffect(()=>{

      //  axios.get(SITE_URL).then((response)=>{setEmployee(response.data)}) 
      
      // ---------or---------

    EmployeeService.getAllEmployees(offset).then((response)=>{
      setEmployee(response.data)
    })
    },[])

    const addEmployee=()=>{
      navigate('/addEmployee')
    }
    const nextPage=()=>{
      // navigate(`/getAllEmployees/${offset+1}`)
      // setOffset(offset+1)
    const nextOffset = offset + 1;
    EmployeeService.getAllEmployees(nextOffset).then((response) => {
      if(response.data!=null)
       { setEmployee(response.data);
          setOffset(nextOffset);
       }
    })
      console.log(offset)
    }

    const prevPage=()=>{
      const prevOffset=offset>0?offset-1:0;
      EmployeeService.getAllEmployees(prevOffset).then((response)=>{
        setEmployee(response.data);
        setOffset(prevOffset)
      })
    }

  return (
    <div className='container'>
      <h2 className="text-center mt-4">EMPLOYEE LIST</h2>
      {/* <button className='btn btn-primary my-4 d-flex'><Link to="/addEmployee">ADD EMPLOYEE</Link></button> */}
      {/* <Link to='/addEmployee' className='btn btn-primary my-4 d-flex w-25 p-2'><span>ADD EMPLOYEE</span></Link> */}
      <button className='btn btn-primary d-flex mb-4' onClick={addEmployee}>ADD EMPLOYEE</button>
      <table className='table table-striped'>
        <thead> 
          <tr>
          <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EmailID</th>
            <th>Actions</th>
          </tr>   
        </thead>
        <tbody>
            {
                employees.map(employee=>(
                    <tr key={employee.id}>
                        <td>{employee.id}</td> 
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>
                          <Link to={`/getEmployeeById/${employee.id}`} className='btn btn-success'>UPDATE</Link>
                          <Link to={`/deleteEmployeeById/${employee.id}`} className='btn btn-danger mx-4'>DELETE</Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
      <button className='btn btn-primary mb-5 ml-5' onClick={prevPage}>{`< `}PREV</button>
      <button className='btn btn-primary mb-5 ml-5' onClick={nextPage}>NEXT {`>`}</button>
    </div>
  )
}

export default ListEmployee
