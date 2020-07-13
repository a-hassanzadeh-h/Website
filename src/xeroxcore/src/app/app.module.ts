import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaData } from './core/models/metadata';
import { LocalStorage } from './core/models/localstorage';
import { DateTime } from './core/pipes/datetime';

@NgModule({
  declarations: [AppComponent, DateTime],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MetaData, LocalStorage],
  bootstrap: [AppComponent],
})
export class AppModule {}
