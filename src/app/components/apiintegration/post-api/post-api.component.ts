import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit  {
  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };
  ngOnInit(): void {
      this.getDepartment();
  }
  deptList: any[]=[];
  http = inject(HttpClient);

  onSave() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
    
      if(res.result) {
        debugger;
        alert("Department Created Success");
        this.getDepartment();
      } else {
        alert(res.message)
      } 
  })
  }
  getDepartment() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any) => {
      console.log("API", res);
      this.deptList = res.data;
    });
  }


  //   onSave() {
  //   this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
  //     if (res.result) {
  //       alert("Department Created Success");
  //       this.getDepartment();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }

}
