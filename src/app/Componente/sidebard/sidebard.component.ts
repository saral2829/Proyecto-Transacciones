import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrls: ['./sidebard.component.css'],
})
export class SidebardComponent {
  title: string = '{ expensable }';

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
