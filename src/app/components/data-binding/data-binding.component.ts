import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
     courseName: string = "angular 18";
     stateName: string = "Maharashtra";
     inputType = "checkbox";
     rollNo: number = 123;
     isIndian: boolean = false;
     currentDate: Date = new Date();
     firstName = signal("Payal Gadage")

     constructor(){
      
     }
     changeCourseName(){
      this.courseName = "React Js"
     }
     showAlert(msg: string){

      alert(msg);

     }
}
