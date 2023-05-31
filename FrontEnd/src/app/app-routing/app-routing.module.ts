import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ToLogInComponent } from '../to-log-in/to-log-in.component';
import { IsLogInComponent } from '../is-log-in/is-log-in.component';

import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ToLogInComponent,
  },
  {
    path: '#/',
    component: IsLogInComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
