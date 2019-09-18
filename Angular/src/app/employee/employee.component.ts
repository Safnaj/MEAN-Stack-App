import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeesList();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }  
  }

  //Insert via Employee Service
  onSubmit(form: NgForm) {
    if(form.value._id == ""){
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);    
        this.refreshEmployeesList(); 
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }else{ //Updating Employee
      this.employeeService.putEmployee(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshEmployeesList(); 
        M.toast({ html: 'Updated Successfully', classes: 'rounded'});
      });
    }
  }

  //Get All Employees
  refreshEmployeesList(){
    this.employeeService.getEmployeeList().subscribe((res)=>{
      this.employeeService.employees = res as Employee[];
    });
  }

  //Select for Edit
  onEdit(emp : Employee){
    this.employeeService.selectedEmployee = emp;
  }

  //Delete Employee
  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to Delete this record ?')== true){
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeesList(); 
        this.resetForm(form);
        M.toast({ html: 'Deleted Successfully', classes: 'rounded'});
      });      
    }
  }
  

}
