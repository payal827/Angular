import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loggedUserData: any;
  router = inject(Router)

  logoff() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }

}
