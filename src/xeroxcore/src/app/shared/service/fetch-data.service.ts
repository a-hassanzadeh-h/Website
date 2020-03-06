import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/ConfigFile';
import { IArticle } from 'src/app/frontend/Models/Interface/IArticle';
import { IDownload } from 'src/app/frontend/Models/Interface/IDownload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  http: HttpClient;
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public getArticles(): Observable<IArticle[]> {
    return this.http.get<IArticle[]>(
      `${AppConfig.domain}/assets/data/articles.json`
    );
  }

  public getDownloads(): Observable<IDownload[]> {
    return this.http.get<IDownload[]>(
      `${AppConfig.domain}/assets/data/downloads.json`
    );
  }
}
