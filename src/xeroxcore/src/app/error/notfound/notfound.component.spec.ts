import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundComponent } from './notfound.component';
import { MetaData } from 'src/app/core/models/metadata.model';
import { CoreModule } from 'src/app/core/core.module';
import { Language } from 'src/app/core/models/language.model';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [NotfoundComponent],
      providers: [MetaData],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
