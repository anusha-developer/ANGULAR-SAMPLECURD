import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { studentdata } from '../Student';
// //import { StudentserviceService } from '../studentservice.service';

// @Component({
//   selector: 'app-studentlist',
//   templateUrl: './studentlist.component.html',
//   styleUrls: ['./studentlist.component.css'],


// //}
// // export class StudentlistComponent implements OnInit {
// //   Students: Observable<[studentdata]> | undefined;
// //   studentserviceService: any;

// //   //constructor(private StudstudentdataentserviceService:StudentserviceService,
// //     private router: Router) { }

// //   ngOnInit(): void {
// //     this.reloadData();
// //   }
// //   reloadData() {
// //     this.Students = this.studentserviceService.getStudentlist();
// // }
// // deletestudentdata(id: number) {
// //   this.studentserviceService.deletestudentdata(id)
// //     .subscribe(
// //       (      data: any) => {
// //         console.log(data);
// //         this.reloadData();
// //       },
// //       (      error: any) => console.log(error));
// //     }
// //     Studentdetails(id: number){
// //       this.router.navigate(['details', id]);
// //     }
// //   }


// //=============================servicecode===========================================
//   // //Post
//   // public savestudent (student:any){
//   //   return this.http.post("https://reqres.in/api/users?page=2",student);
//   //  }
   
//   //  //get
//   //  public getstudent (){
//   //  return this.http.get("https://localhost:44351/api/gettblStudent");
//   //  }
   
//   //  //getbyid
//   //  //public getstudentsbyid(id:any){
//   //  //return this.http.get("https://reqres.in/api/users?",id);
//   //  //}
   
   
//   //  //Update
//   //  public updatestudent (id:any){
//   //  return this.http.put("https://reqres.in/api/users?", id);
//   //  }
   
   
//   //  //delete
//   //   public deletestudent (id:any){
//   //  return this.http.delete("https://reqres.in/api/users?id=",id);
//   //  }
// }
