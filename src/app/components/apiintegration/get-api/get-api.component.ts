import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: any [] = [];
  customerList: any [] = [];
  alertMsg : string = '';
  constructor(private http: HttpClient) {
    this.getAllUser();
    debugger;
    

  }
  // changeMSg() {
  //   this.alertMsg = 'THHJJHJ'
  // }
  getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
       this.userList = result;
    })
  }

  getAllCustomer() {
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomers").subscribe((res:any)=>{
      debugger;
      this.customerList =  res.data;
    }
    )
  }
}
