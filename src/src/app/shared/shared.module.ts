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

@NgModule({
  declarations: [
    CarouselComponent,
    HighlightComponent,
    FooterComponent,
    NavComponent,
    DateTimePipe,
  ],
  imports: [CommonModule, CoreModule, RouterModule, MaterialModule],
  exports: [
    DateTimePipe,
    CarouselComponent,
    HighlightComponent,
    FooterComponent,
    NavComponent,
  ],
})
export class SharedModule {}
