import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
    div1Visiable: boolean = true;
  isWarnigDivVisiable: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';

  // constructor(private deptService: DepartmentService) {
  //   this.deptService.onRoleChange$.subscribe((res:string)=>{
  //     debugger;
  //   })
  //   this.deptService.role$.subscribe((res:string)=>{
  //     debugger;
  //   })
  // }

  showDiv1() { 
    this.div1Visiable = true;
  }
  hideDiv1() { 
    this.div1Visiable = false;
  }
  toggleDiv2() { 
    this.isWarnigDivVisiable = !this.isWarnigDivVisiable;
  }

}
