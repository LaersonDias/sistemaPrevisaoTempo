import { Component } from '@angular/core';

import { NavbarComponent } from './modules/shared/navbar/navbar.component';

import { HomeComponent } from './modules/dashboard/home/home.component';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [
    NavbarComponent,
    HomeComponent
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}