import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightsComponent } from './highlights/highlights.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HotarticlesComponent } from './hotarticles/hotarticles.component';
import { SliderComponent } from './slider/slider.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [AppRoutingModule, CommonModule],
  declarations: [
    HighlightsComponent,
    CarouselComponent,
    HotarticlesComponent,
    SliderComponent,
    SocialMediaComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    HighlightsComponent,
    CarouselComponent,
    HotarticlesComponent,
    SliderComponent,
    SocialMediaComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule {}
