import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { FrontendComponent } from './frontend.component';
import { FrontendRoutingModule } from './frontend-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, FrontendRoutingModule],
  declarations: [
    HomeComponent,
    DownloadsComponent,
    ArticlesComponent,
    FrontendComponent
  ],
  exports: [HomeComponent, DownloadsComponent, ArticlesComponent],
  bootstrap: [FrontendComponent]
})
export class FrontendModule {}
