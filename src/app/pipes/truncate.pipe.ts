import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value == null) {
      return '';
    } else {
      return (
        value
          .split(' ')
          .slice(0, +args[0])
          .join(' ') + ' ...'
      );
    }
  }
}
