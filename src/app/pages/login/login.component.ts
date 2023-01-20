import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('test3@mail.com'),
    password: new FormControl('123456'),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
  }
}
