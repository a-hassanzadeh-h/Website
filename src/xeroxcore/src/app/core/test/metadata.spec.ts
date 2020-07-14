import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { MetaData } from '../models/metadata.model';

describe('Test Localstorage', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [MetaData],
    }).compileComponents();
  }));

  it('Alter title of page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const meta: MetaData = TestBed.get(MetaData);
    const app = fixture.componentInstance;
    meta.alterTitle('Welcome');
    setTimeout(() => {
      expect(app.title).toEqual('Welcome');
    }, 200);
  });
});
