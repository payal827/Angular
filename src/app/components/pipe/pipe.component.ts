import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable,map } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe, AsyncPipe,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName: string = 'angular';
  currentDate: Date = new Date();

  // currentTime : Observable<string> = new Observable<string>;
  currentTime: Observable<Date> = new Observable<Date>();

  student: any = {
    name: "payAL",
    city:  'wani',
    empId: 123,
    state: undefined
  };
   currentRole: string = '';


  constructor() {
    this.currentTime= interval(1000).pipe(map(() => new Date() ));
    

    
  }


}
