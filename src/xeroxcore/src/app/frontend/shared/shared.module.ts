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
import { GlobalSharedModule } from 'src/app/shared/globalshared.module';
import { FilterComponent } from './filter/filter.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    GlobalSharedModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  declarations: [
    HighlightsComponent,
    CarouselComponent,
    HotarticlesComponent,
    SliderComponent,
    SocialMediaComponent,
    FooterComponent,
    NavbarComponent,
    FilterComponent
  ],
  exports: [
    HighlightsComponent,
    CarouselComponent,
    HotarticlesComponent,
    SliderComponent,
    SocialMediaComponent,
    FooterComponent,
    NavbarComponent,
    FilterComponent
  ]
})
export class SharedModule {}
