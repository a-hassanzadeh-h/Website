import { TestBed, async } from '@angular/core/testing';
import { DateTime } from '../models/datetime.model';

describe('Datetime', () => {
  let datetime = new DateTime(new Date('2021-03-25'));

  it('format date String', () => {
    let date = datetime.formatString('yyyy');
    expect(date).toEqual('2021');
  });

  it(`Date is greater than today'`, () => {
    let date = datetime.isGreaterThan(new Date());
    expect(date).toBeTruthy();
  });

  it(`Date is lesser than today'`, () => {
    let date = datetime.isLowerThan(new Date());
    expect(date).not.toBeTruthy();
  });
});
