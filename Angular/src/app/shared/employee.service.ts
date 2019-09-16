  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { map } from 'rxjs/operators';
//import { toPromise } from 'rxjs/operator';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  readonly baseURL = 'http://localhost:300/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp : Employee){
    return this.http.post(this.baseURL, emp);
  }
}
