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

// Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleComponent } from './articles/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FrontendRoutingModule,
    GlobalSharedModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  declarations: [
    HomeComponent,
    DownloadsComponent,
    ArticlesComponent,
    FrontendComponent,
    ArticleComponent
  ],
  providers: [MessageboxService],
  exports: [],
  bootstrap: []
})
export class FrontendModule {}
