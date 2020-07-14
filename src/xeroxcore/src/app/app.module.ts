//Angular built in components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//External packages
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// Custom packages
import { MetaData } from './core/models/metadata.model';
import { LocalStorage } from './core/models/localstorage.model';
import { DateTimePipe } from './core/pipes/datetime.pipe';
import { HTTP } from './core/models/http.model';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, DateTimePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [MetaData, LocalStorage, HTTP],
  bootstrap: [AppComponent],
})
export class AppModule {}
