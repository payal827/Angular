import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Constant } from '../constant/contsant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
//  apiURl: string= 'https://projectapi.gerasim.in/api/Complaint/';

 constructor(private http: HttpClient) {}

 getAllDept() {
  debugger;
  return this.http.get(Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT )

 }
 saveNewDept(obj:any) {
  return this.http.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS}`,obj)
 }
 addTwoNo(num1: number, num2:number){
  debugger;
  return num1+num2;
 }
  
}
