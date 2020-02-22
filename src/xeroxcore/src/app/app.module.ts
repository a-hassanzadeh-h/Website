import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './errors/error404/error404.component';
import { ArticlesComponent } from './frontend/articles/articles.component';
import { DownloadsComponent } from './frontend/downloads/downloads.component';
import { HomeComponent } from './frontend/home/home.component';
import { CarouselComponent } from './frontend/shared/carousel/carousel.component';
import { FooterComponent } from './frontend/shared/footer/footer.component';
import { HighlightsComponent } from './frontend/shared/highlights/highlights.component';
import { HotarticlesComponent } from './frontend/shared/hotarticles/hotarticles.component';
import { NavbarComponent } from './frontend/shared/navbar/navbar.component';
import { SliderComponent } from './frontend/shared/slider/slider.component';
import { SocialMediaComponent } from './frontend/shared/social-media/social-media.component';

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
    HotarticlesComponent,
    HighlightsComponent,
    SliderComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
