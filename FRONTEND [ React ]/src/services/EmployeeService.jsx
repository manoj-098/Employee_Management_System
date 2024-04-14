import axios from 'axios'

const GET_ALL_EMPLOYEE_URL='http://localhost:8080/Employee/getAllEmployee'
const ADD_EMPLOYEE_URL='http://localhost:8080/Employee/addEmployee'
const GET_EMPLOYEE_BY_ID_URL='http://localhost:8080/Employee/getEmployeeById'
const UPDATE_EMPLOYEE_BY_ID_URL='http://localhost:8080/Employee/updateEmployeeById'
const DELETE_EMPLOYEE_BY_ID_URL='http://localhost:8080/Employee/deleteEmployeeById'



class EmployeeService{

    getAllEmployees(offset)
    {
        return axios.get(GET_ALL_EMPLOYEE_URL+'/'+offset)
    }

    addEmployee(employeeObject)
    {
        return axios.post(ADD_EMPLOYEE_URL,employeeObject)
    }
    getEmployeeById(employeeId)
    {
        return axios.get(GET_EMPLOYEE_BY_ID_URL+'/'+employeeId)
    }
    updateEmployeeById(employeeId,employee)
    {
        return axios.put(UPDATE_EMPLOYEE_BY_ID_URL+'/'+employeeId, employee)
    }
    deleteEmployeeById(employeeId)
    {
        return axios.delete(DELETE_EMPLOYEE_BY_ID_URL+'/'+employeeId)
    }
}
// export default new EmployeeService()  

// ------------or-------------

const obj=new EmployeeService()
export default obj