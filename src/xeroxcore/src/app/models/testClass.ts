import { async, ComponentFixture, TestBed } from '@angular/core/testing';

export class TestClass {
  componentType;
  constructor(value) {
    this.componentType = value;
  }
  component: any;
  fixture: ComponentFixture<any>;

  runTest(component: string) {
    describe(component, () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [this.componentType]
        }).compileComponents();
      }));

      beforeEach(() => {
        this.fixture = TestBed.createComponent(this.componentType);
        this.component = this.fixture.componentInstance;
        this.fixture.detectChanges();
      });

      it('should create', () => {
        expect(this.component).toBeTruthy();
      });
    });
  }
}
