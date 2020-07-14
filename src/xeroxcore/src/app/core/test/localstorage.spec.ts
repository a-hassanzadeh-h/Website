import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { LocalStorage } from '../models/localstorage.model';

describe('Test Localstorage', () => {
  let storage = new LocalStorage();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('Add data to localstorage', () => {
    storage.insertData('test', '1234');
    let sample = storage.getData('test');
    expect(sample).toEqual('1234');
  });

  it(`Delete data from localstorage'`, () => {
    storage.removeData('test');
    let sample = storage.getData('test');

    expect(sample).toBeNull();
  });
});
