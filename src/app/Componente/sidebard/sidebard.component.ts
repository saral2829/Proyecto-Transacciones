import {
  AfterContentInit,
  AfterViewChecked,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrls: ['./sidebard.component.css'],
})
export class SidebardComponent implements OnInit {
  title: string = '{ expensable }';

  profile!: Profile;

  constructor(private authService: AuthService) {
    this.authService.getProfile().subscribe((data: any) => {
      this.profile = data;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {}
}
