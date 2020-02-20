import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HotarticlesComponent } from './shared/hotarticles/hotarticles.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SocialMediaComponent } from './shared/social-media/social-media.component';

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
    CarouselComponent,
    HotarticlesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
