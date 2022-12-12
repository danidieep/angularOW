import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espejos'
})
export class EspejoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('')
  }

}
