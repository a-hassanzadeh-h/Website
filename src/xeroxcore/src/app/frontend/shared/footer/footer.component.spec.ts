import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { FrontendComponent } from '../../frontend.component';
import { MessageboxService } from 'src/app/shared/service/messagebox.service';
import { APP_BASE_HREF } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, AppRoutingModule],
      declarations: [FooterComponent, FrontendComponent],
      providers: [
        { provide: APP_BASE_HREF, useValue: 'home' },
        MessageboxService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
