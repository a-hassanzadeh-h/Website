import * as moment from 'moment';
import { IDateTime } from './interface/IDateTime';

export class DateTime implements IDateTime {
  dateTime: Date;

  constructor(date: Date) {
    this.dateTime = date;
  }

  public formatString(dateFormat: string): string {
    return moment(this.dateTime).format(dateFormat).toString();
  }
  public isGreaterThan(date: Date): boolean {
    return moment(this.dateTime).isAfter(date);
  }
  public isLowerThan(date: Date): boolean {
    return moment(this.dateTime).isBefore(date);
  }
}
