import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenhietToCelsious',
  standalone: false
})
export class FahrenhietToCelsiousPipe implements PipeTransform {

  transform(value: number): number {
    if(value === null|| value===undefined|| isNaN(value)) return 0;
    return ((value - 32) * 5) / 9;
  }

}
