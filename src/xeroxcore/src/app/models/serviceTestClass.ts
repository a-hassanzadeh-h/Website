import { TestBed } from '@angular/core/testing';

export class ServiceTestClass {
  serviceComponent;
  constructor(value) {
    this.serviceComponent = value;
  }
  runtTest(serviceComponent: string): void {
    describe(serviceComponent, () => {
      let service: any;

      beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(this.serviceComponent);
      });

      it('should be created', () => {
        expect(service).toBeTruthy();
      });
    });
  }
}
