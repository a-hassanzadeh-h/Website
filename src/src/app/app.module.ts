//Angular built in components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { NotfoundComponent } from './error/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ErrorRoutingModule } from './error/error-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NotfoundComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ErrorRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
