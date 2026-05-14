imports: [
  NavbarComponent,
  HomeComponent,
  LoginComponent
]

import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NavbarComponent } from './modules/shared/navbar/navbar.component';

import { HomeComponent } from './modules/dashboard/home/home.component';

import { LoginComponent } from './modules/auth/login/login.component';

import { SidebarComponent }
from './shared/sidebar/sidebar.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}