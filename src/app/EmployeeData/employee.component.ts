import { Component } from '@angular/core';

@Component({
  selector: 'employee',
  templateUrl: 'app/EmployeeData/employee.component.html',
})
export class EmployeeDetails  { 
  name : string = 'Parth';
  email : string = 'Parth5502@gmail.com';
  contact : string = '9425405502';
  loc : string = 'Indore';
 }
