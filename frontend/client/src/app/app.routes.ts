import { Routes } from '@angular/router';

import { HomeComponent }
from './modules/dashboard/home/home.component';

import { LoginComponent }
from './modules/auth/login/login.component';

import { authGuard }
from './guards/auth.guard';

export const routes: Routes = [

  {
    path: '',

    component: HomeComponent,

    canActivate: [authGuard]
  },

  {
    path: 'login',

    component: LoginComponent
  }

];