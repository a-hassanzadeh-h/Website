import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Error404Component } from '../errors/error404/error404.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ArticlesComponent } from './articles/articles.component';
import { FrontendComponent } from './frontend.component';

const frontendRoutes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: '**', component: Error404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(frontendRoutes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule {}
