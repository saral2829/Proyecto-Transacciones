import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface CurrentUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUri = 'https://expensable-api.herokuapp.com/';

  currentUser!: CurrentUser | null;

  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, password: string) {
    this.http
      .post(`${this.apiUri}/login`, { email, password })

      .subscribe((data: any) => {
        if (data.token) {
          // entramos aqui solo si
          // el usuario se logeo
          // correctamente.
          sessionStorage.setItem('token', data.token);
          this.router.navigate(['/dashboard/categories']);
        }
      });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  isLogged(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    }

    return false;
  }
}
