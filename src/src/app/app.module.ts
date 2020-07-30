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
import { ProductsComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from './shared/material.module';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent,
    LegalComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ErrorRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
