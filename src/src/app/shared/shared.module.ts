import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { HighlightComponent } from './highlight/highlight.component';
import { CoreModule } from '../core/core.module';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { DateTimePipe } from '../core/pipes/datetime.pipe';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerComponent } from './banner/banner.component';
import { HintsComponent } from './hints/hints.component';

@NgModule({
  declarations: [
    CarouselComponent,
    HighlightComponent,
    FooterComponent,
    NavComponent,
    DateTimePipe,
    BannerComponent,
    HintsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    MaterialModule,
    CarouselModule,
  ],
  exports: [
    DateTimePipe,
    CarouselComponent,
    HighlightComponent,
    FooterComponent,
    NavComponent,
    BannerComponent,
    HintsComponent,
  ],
})
export class SharedModule {}
