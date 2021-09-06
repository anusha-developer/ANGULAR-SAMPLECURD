import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
//import { CreatestudentComponent } from './createstudent/createstudent.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
// import { InsertstudentComponent } from './insertstudent/insertstudent.component';
// import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
// import { StudentlistComponent } from './studentlist/studentlist.component';
// import { StudentupdateComponent } from './studentupdate/studentupdate.component';


const routes: Routes = [
  // {path:'createstudent',component:CreatestudentComponent},
  // {path:'Studentlist',component:StudentlistComponent},
  // {path:'Studentdetails',component:StudentdetailsComponent},
  // {path:'Studentupdate',component:StudentupdateComponent},
  // {path:'Insertstudent',component:InsertstudentComponent},
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
