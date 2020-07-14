import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HTTP {
  constructor(private http: HttpClient) {}
}
