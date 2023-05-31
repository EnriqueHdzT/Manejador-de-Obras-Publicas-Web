import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AuthGuard } from './_guards/auth.guard';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { IsLogInComponent } from './is-log-in/is-log-in.component';
import { ToLogInComponent } from './to-log-in/to-log-in.component';

@NgModule({
  declarations: [AppComponent, IsLogInComponent, ToLogInComponent],
  imports: [AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
