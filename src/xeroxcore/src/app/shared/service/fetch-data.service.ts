import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/ConfigFile';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  http: HttpClient;
  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public getArticles() {
    return this.http.get<any[]>(
      `${AppConfig.domain}/assets/data/articles.json`
    );
  }

  public getDownloads() {
    return this.http.get<any[]>(
      `${AppConfig.domain}/assets/data/downloads.json`
    );
  }
}
