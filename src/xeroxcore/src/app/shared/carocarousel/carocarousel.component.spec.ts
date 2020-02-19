import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarocarouselComponent } from './carocarousel.component';

describe('CarocarouselComponent', () => {
  let component: CarocarouselComponent;
  let fixture: ComponentFixture<CarocarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarocarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarocarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
