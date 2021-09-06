import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CreatestudentComponent } from './createstudent/createstudent.component';
// import { StudentlistComponent } from './studentlist/studentlist.component';
// import { StudentupdateComponent } from './studentupdate/studentupdate.component';
// import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { HttpClientModule } from '@angular/common/http';

import { InsertstudentComponent } from './insertstudent/insertstudent.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    // CreatestudentComponent,
    // StudentlistComponent,
    // StudentupdateComponent,
    // StudentdetailsComponent,
    InsertstudentComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
