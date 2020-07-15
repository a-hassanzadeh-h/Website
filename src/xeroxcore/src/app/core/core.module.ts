import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//External packages
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Custom packages
import { MetaData } from './models/metadata.model';
import { LocalStorage } from './models/localstorage.model';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [MetaData, LocalStorage],
})
export class CoreModule {}
