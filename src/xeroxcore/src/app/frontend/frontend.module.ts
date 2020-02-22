import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent, DownloadsComponent, ArticlesComponent],
  exports: [HomeComponent, DownloadsComponent, ArticlesComponent]
})
export class FrontendModule {}
