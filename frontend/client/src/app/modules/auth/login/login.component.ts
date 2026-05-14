import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService: AuthService
  ) {}

  login() {

    const data = {
      email: this.email,
      password: this.password
    };

    this.authService.login(data)
      .subscribe({

        next: (res: any) => {

          console.log(res);

          localStorage.setItem(
            'user',
            JSON.stringify(res.user)
          );

          alert('Login realizado');

        },

        error: (err) => {
          console.log(err);
        }

      });

  }
}