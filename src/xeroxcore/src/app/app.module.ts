import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/error404/error404.component';
import { SharedModule } from './frontend/shared/shared.module';
import { FrontendModule } from './frontend/frontend.module';

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [BrowserModule, AppRoutingModule, SharedModule, FrontendModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
