import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import AddEmployee from './components/AddEmployee';
import DeleteEmployeeById from './components/DeleteEmployeeById';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/getAllEmployees/:offset" element={<ListEmployee />}></Route>
          <Route path='/addEmployee' element={<AddEmployee />}></Route>
          <Route path='/getEmployeeById/:identity' element={<AddEmployee />}></Route> {/* Parameters in a endPoint must be separated with colon */}
          {/* <Route path="/Employee/getAllEmployee" element={<ListEmployee />}></Route> */}
          <Route path='/deleteEmployeeById/:identity' element={<DeleteEmployeeById />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
