import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IsLogInComponent } from './is-log-in/is-log-in.component';
import { ToLogInComponent } from './to-log-in/to-log-in.component';

@NgModule({
  declarations: [AppComponent, IsLogInComponent, ToLogInComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
