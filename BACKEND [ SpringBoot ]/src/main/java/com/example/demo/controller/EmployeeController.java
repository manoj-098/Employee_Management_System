package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import java.util.*;

import com.example.demo.employeeDTO.EmployeeDTO;
import com.example.demo.model.EmployeeModel;
import com.example.demo.repository.EmployeeRepository;;

@CrossOrigin("*")
@RestController	
@RequestMapping("/Employee")
public class EmployeeController {
	
	@Autowired
	EmployeeRepository repo;
	EmployeeDTO dto;
	
	@PostMapping("/addEmployee")
	public EmployeeModel addEmployee(@RequestBody EmployeeDTO dto) {
		
		EmployeeModel obj=new EmployeeModel();
		
		obj.setEmailId(dto.getEmailId());
		obj.setFirstName(dto.getFirstName());
		obj.setLastName(dto.getLastName());
		return repo.save(obj);
	}
	
	@GetMapping("/getAllEmployee/{offset}")
	public List<EmployeeModel> getAllEmployee(@PathVariable int offset)
	{
		Page<EmployeeModel> page= repo.findAll(PageRequest.of(offset, 5));
	    List<EmployeeModel> employeeList = page.getContent();
	    return employeeList;
		
//		return repo.findAll();
	}
	
	@GetMapping("/getEmployeeById/{Id}")
	public EmployeeModel getEmployeeById(@PathVariable Integer Id) {
		return repo.findById(Id).get();	
	}
	
	@PutMapping("/updateEmployeeById/{Id}")
	public EmployeeModel updateEmployeeById(@PathVariable Integer Id, @RequestBody EmployeeModel employee) {
		EmployeeModel target=repo.findById(Id).get();
		target.setFirstName(employee.getFirstName());
		target.setLastName(employee.getLastName());
		target.setEmailId(employee.getEmailId());
		return repo.save(target);
	}
	
	@DeleteMapping("/deleteEmployeeById/{Id}")
	public void deleteEmployeeById(@PathVariable Integer Id)
	{
		repo.deleteById(Id);
	}

}
