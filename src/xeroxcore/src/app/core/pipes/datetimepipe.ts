import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'DateTime' })
export class DateTimePipe implements PipeTransform {
  transform(value: Date, format: string): string {
    return moment(value).format(format).toString();
  }
}
