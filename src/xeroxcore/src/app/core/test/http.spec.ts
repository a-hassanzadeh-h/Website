import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '../models/http.model';

describe('Http model for managing http calls', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent],
      providers: [HTTP],
    }).compileComponents();
  }));

  it('Http Get', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect('Xeroxcore').toEqual('Xeroxcore');
  });
});
