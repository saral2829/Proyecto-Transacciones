import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('lucia@mail.com'),
    password: new FormControl('123456'),
    first_name: new FormControl('Wenceslao'),
    last_name: new FormControl('Negrete'),
    phone: new FormControl('918273645'),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}


  hide = true;

  onSubmit(): void {
    this.authService.signup(this.signupForm.value);
  }

}
