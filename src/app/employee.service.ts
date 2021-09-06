import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: any;
 
  //private baseUrl = 'https://localhost:44322/api/EmployeeDb';
  

  constructor(private http: HttpClient) { }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`https://localhost:44322/api/EmployeeDb`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post('https://localhost:44322/api/SaveEmployeeDb', employee);
  }

  updateEmployee(Id: number, value: any): Observable<Object> {
    return this.http.put(`https://localhost:44322/api/UpdateEmployeeDb`, Id);
  }

  deleteEmployee(Id: number): Observable<any> {
    return this.http.delete(`https://localhost:44322/api/DeleteEmployeeDb`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
