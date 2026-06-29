import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = false;

  num1: string = "";
  num2: string = "";

  isActive: boolean = false;

  selectedState: string = "";
  constructor(private router: Router){

  }

  cityArray: string [] = ['Pune', 'Nagpur', 'Mumbai','Thane', 'chandrapur'];

  studentList: any[] = [
    {studId:1, name:'AA', city:'pune', isActive: false },
    {studId:2, name:'BB', city:'Nagpur', isActive: true },
    {studId:3, name:'CC', city:'Mumbai', isActive: false },
  ]

  navigateToAttribute(){
    this.router.navigateByUrl("attributedirective")

  }


  showDiv1() {
    this.isDiv1Visible = true;
  }
    hideDiv1() {
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;
    //also can use if else co ndition
  }
}

