import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { FrontendComponent } from './frontend.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { GlobalSharedModule } from '../shared/globalshared.module';
import { MessageboxService } from '../shared/service/messagebox.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FrontendRoutingModule,
    GlobalSharedModule
  ],
  declarations: [
    HomeComponent,
    DownloadsComponent,
    ArticlesComponent,
    FrontendComponent
  ],
  providers: [MessageboxService],
  exports: [],
  bootstrap: [FrontendComponent]
})
export class FrontendModule {}