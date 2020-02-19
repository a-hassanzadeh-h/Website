import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { CarocarouselComponent } from './shared/carocarousel/carocarousel.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DownloadsComponent,
    ArticlesComponent,
    SocialMediaComponent,
    CarocarouselComponent,
    CarouselComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
