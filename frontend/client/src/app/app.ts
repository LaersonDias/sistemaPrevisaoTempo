imports: [
  NavbarComponent,
  HomeComponent,
  LoginComponent
]

import { Component } from '@angular/core';

import { NavbarComponent } from './modules/shared/navbar/navbar.component';

import { HomeComponent } from './modules/dashboard/home/home.component';

import { LoginComponent } from './modules/auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}