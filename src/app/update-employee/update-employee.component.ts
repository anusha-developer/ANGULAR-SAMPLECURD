import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  Id: number=0;
  employee: Employee = new Employee;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();

    this.Id = this.route.snapshot.params['Id'];
    
    this.employeeService.getEmployee(this.Id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.Id, this.employee)
      .subscribe((data: any) => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
     this.updateEmployee();    
   }
  // OnSubmit(){
  //   alert("submitted");
  // }
  gotoList() {
    this.router.navigate(['/employees']);
  }
}

