import { isDevMode } from '@angular/core';

export class AppConfig {
  public static GetApiUrl(): string {
    if (!isDevMode()) return 'https://xeroxcore.org/';
    return 'http://localhost:4200/';
  }
}
