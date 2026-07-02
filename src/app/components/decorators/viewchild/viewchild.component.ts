import { Component, viewChild , ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit{
   @ViewChild('txt') textBox?: ElementRef;
  // @ViewChild(AlertComponent) alertComp?: AlertComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    debugger;
    // const alertMode =  this.alertComp?.alertMode;
  }

}
