import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './frontend/home/home.component';
import { ArticlesComponent } from './frontend/articles/articles.component';
import { DownloadsComponent } from './frontend/downloads/downloads.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
