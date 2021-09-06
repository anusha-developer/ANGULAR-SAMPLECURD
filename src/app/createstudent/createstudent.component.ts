// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import{ studentdata}from './../Student';
// //import{ StudentserviceService} from './../studentservice.service';

// @Component({
//   selector: 'app-createstudent',
//   templateUrl: './createstudent.component.html',
//   styleUrls: ['./createstudent.component.css']
// })
// export class CreatestudentComponent implements OnInit {
//  student: studentdata=new studentdata();
//   submitted = false;

//   constructor(private StudentserviceService: StudentserviceService,
//     private router: Router) { }

//   ngOnInit(): void {
//   }
  
//   newEmployee(): void {
//     this.submitted = false;
//     this.student = new studentdata();
// }
// save() {
//   this.StudentserviceService
//   .createstudentdata(this.student).subscribe((data: any) => {
//     console.log(data)
//     this.student = new studentdata();
//     this.gotoList();
//   }, 
//     (  error: any) => console.log(error));
// }
// onSubmit() {
//   this.submitted = true;
//   this.save();    
// }
// gotoList() {
//   this.router.navigate(['/Students']);
// }

// Submit(){
//   "submitted";
// }
// }
