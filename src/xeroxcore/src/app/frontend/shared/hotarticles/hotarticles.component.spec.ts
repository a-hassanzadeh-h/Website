import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotarticlesComponent } from './hotarticles.component';

describe('HotarticlesComponent', () => {
  let component: HotarticlesComponent;
  let fixture: ComponentFixture<HotarticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotarticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
