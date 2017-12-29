import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utc'
})
export class UtcPipe implements PipeTransform {

  transform(value: string): any {

    const originalDate = new Date(value);
    console.log("Old:"+originalDate)

    const dateWithNoTimezone = new Date(
      originalDate.getFullYear(),
      originalDate.getMonth(),
      originalDate.getDate(),
      originalDate.getUTCHours(),
      originalDate.getUTCMinutes(),
      originalDate.getUTCSeconds()
    );
    console.log("New:"+dateWithNoTimezone);
    return dateWithNoTimezone;
  }

}
