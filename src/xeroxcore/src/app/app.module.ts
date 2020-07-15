//Angular built in components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DateTimePipe } from './core/pipes/datetime.pipe';
import { CoreModule } from './core/core.module';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ErrorRoutingModule } from './error/error-routing.module';

@NgModule({
  declarations: [AppComponent, DateTimePipe, NotfoundComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, ErrorRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
